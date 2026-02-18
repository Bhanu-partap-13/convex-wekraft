import {
  DeleteObjectCommand,
  ListObjectsV2Command,
  PutObjectCommand,
  S3Client,
} from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

// Initialize S3 client only if credentials are available
function getS3Client() {
  const accessKeyId =
    process.env.AWS_ACCES_KEY || process.env.AWS_ACCESS_KEY_ID;
  const secretAccessKey =
    process.env.AWS_SECRET_KEY || process.env.AWS_SECRET_ACCESS_KEY;
  const region = process.env.AWS_REGION || "ap-south-1";

  if (!accessKeyId || !secretAccessKey) {
    throw new Error("AWS credentials not configured");
  }

  return new S3Client({
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    region,
  });
}

export async function GET(_req: Request) {
  try {
    const client = getS3Client();
    const bucketName =
      process.env.S3_BUCKET_NAME ||
      process.env.AWS_S3_BUCKET ||
      "wekraft-demo-rox-1";

    const command = new ListObjectsV2Command({
      Bucket: bucketName,
    });
    const result = await client.send(command);
    console.log(result);
    return NextResponse.json(result);
  } catch (error) {
    console.error("S3 GET error:", error);
    if (
      error instanceof Error &&
      error.message === "AWS credentials not configured"
    ) {
      return NextResponse.json(
        {
          error:
            "AWS S3 is not configured. Please set AWS credentials in .env file.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Failed to list objects" },
      { status: 500 },
    );
  }
}

export async function POST(req: Request) {
  console.log("POST /api/objects - Upload request received");
  try {
    // Check AWS configuration first
    const client = getS3Client();
    const bucketName =
      process.env.S3_BUCKET_NAME ||
      process.env.AWS_S3_BUCKET ||
      "wekraft-demo-rox-1";
    const region = process.env.AWS_REGION || "ap-south-1";

    const formData = await req.formData();
    const file = formData.get("file") as File;
    const oldUrl = formData.get("oldUrl") as string;

    if (!file) {
      console.error("No file found in formData");
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    console.log(
      `Processing file: ${file.name}, Size: ${file.size}, Type: ${file.type}`,
    );

    // Validation
    // Max size: 5MB
    if (file.size > 1 * 1024 * 1024) {
      console.warn("File too large");
      return NextResponse.json(
        { error: "File too large. Max 1MB allowed." },
        { status: 400 },
      );
    }

    // Image/check type if needed, but client side can also restrict.
    // Just ensuring basic upload first.

    const buffer = Buffer.from(await file.arrayBuffer());
    const fileName = `thumbnails/${Date.now()}-${file.name.replace(/\s/g, "-")}`;

    console.log(`Uploading to S3 as: ${fileName}`);

    const command = new PutObjectCommand({
      Bucket: bucketName,
      Key: fileName,
      Body: buffer,
      ContentType: file.type,
      // ACL: "public-read", // Uncomment if bucket policies require ACL. usually bucket policy handles this.
    });

    await client.send(command);

    const url = `https://${bucketName}.s3.${region}.amazonaws.com/${fileName}`;
    console.log("Upload successful, URL:", url);

    // DELETE OLD FILE IF EXISTS
    if (oldUrl) {
      try {
        console.log("Attempting to delete old thumbnail:", oldUrl);
        const oldKey = oldUrl.split(".amazonaws.com/")[1];
        if (oldKey) {
          const deleteCommand = new DeleteObjectCommand({
            Bucket: bucketName,
            Key: oldKey,
          });
          await client.send(deleteCommand);
          console.log("Old thumbnail deleted successfully");
        } else {
          console.warn("Could not extract key from oldUrl");
        }
      } catch (deleteError) {
        console.error("Error deleting old thumbnail:", deleteError);
        // Don't fail the request just because delete failed, user still got new one uploaded
      }
    }

    return NextResponse.json({ success: true, url });
  } catch (error) {
    console.error("Error uploading file:", error);
    if (
      error instanceof Error &&
      error.message === "AWS credentials not configured"
    ) {
      return NextResponse.json(
        {
          error:
            "AWS S3 is not configured. Please set AWS credentials in .env file to enable file uploads.",
        },
        { status: 503 },
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
