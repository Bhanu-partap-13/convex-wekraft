import type { AuthConfig } from "convex/server";

export default {
  providers: [
    {
      // Clerk Issuer URL from your "convex" JWT template
      // Must exactly match the "Issuer" shown in Clerk Dashboard → JWT Templates → convex
      domain: "https://caring-muskox-47.clerk.accounts.dev",
      applicationID: "convex",
    },
  ],
} satisfies AuthConfig;
