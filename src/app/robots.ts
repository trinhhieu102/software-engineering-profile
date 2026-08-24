import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: [
          "GPTBot",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "anthropic-ai",
        ],
        allow: ["/", "/llms.txt"],
      },
    ],
    sitemap: "https://trinhhieu.vercel.app/sitemap.xml",
  };
}
