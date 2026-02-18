import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Check if OpenAI API key is available
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          error:
            "Text-to-speech requires OpenAI API key. Please configure OPENAI_API_KEY in .env file and install @ai-sdk/openai package.",
        },
        { status: 503 },
      );
    }

    // Dynamically import OpenAI SDK only when needed
    const { openai } = await import("@ai-sdk/openai");
    const {
      experimental_generateSpeech: generateSpeech,
      NoSpeechGeneratedError,
    } = await import("ai");

    const { text } = await req.json();

    if (!text) {
      return NextResponse.json(
        { error: "Text is required for speech generation" },
        { status: 400 },
      );
    }

    const result = await generateSpeech({
      model: openai.speech("tts-1"),
      voice: "alloy",
      text: text,
    });

    return NextResponse.json({ audio: result.audio.base64 });
  } catch (error) {
    if (
      error instanceof Error &&
      error.message.includes("Cannot find module")
    ) {
      return NextResponse.json(
        {
          error:
            "Text-to-speech requires @ai-sdk/openai package. Install it with: pnpm add @ai-sdk/openai",
        },
        { status: 503 },
      );
    }

    console.error("Error generating audio API:", error);
    return NextResponse.json(
      { error: "Failed to generate audio" },
      { status: 500 },
    );
  }
}
