import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://trinhhieu.vercel.app"),
  title: "Trịnh Văn Hiếu | Software Engineer Portfolio",
  description:
    "Portfolio of Trịnh Văn Hiếu (born 2006, English B2) - Software Engineer specializing in scalable full-stack web applications, distributed systems, Next.js, Go, and 3D WebGL.",
  keywords: [
    "Trịnh Văn Hiếu",
    "Trinh Van Hieu",
    "Software Engineer",
    "Full Stack Developer",
    "Next.js Developer",
    "Three.js Portfolio",
    "English B2 Developer",
    "Vietnam Software Engineer",
  ],
  authors: [{ name: "Trịnh Văn Hiếu" }],
  creator: "Trịnh Văn Hiếu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://trinhhieu.vercel.app",
    title: "Trịnh Văn Hiếu | Software Engineer Portfolio",
    description:
      "Explore production systems, 3D interactive projects, and backend architectures built by Trịnh Văn Hiếu (Software Engineer, English B2).",
    siteName: "Trịnh Văn Hiếu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Trịnh Văn Hiếu | Software Engineer Portfolio",
    description:
      "Software Engineer specializing in scalable full-stack systems, Next.js, and Three.js.",
    creator: "@trinhvanhieu",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Trịnh Văn Hiếu",
    alternateName: "Hieu Trinh",
    birthDate: "2006",
    jobTitle: "Software Engineer",
    knowsLanguage: ["Vietnamese", "English (B2)"],
    url: "https://trinhhieu.vercel.app",
    sameAs: [
      "https://github.com/trinhhieu102",
      "https://linkedin.com",
    ],
    knowsAbout: [
      "Software Engineering",
      "Next.js",
      "React",
      "Three.js",
      "Go",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-zinc-100 selection:bg-white selection:text-black">
        {children}
      </body>
    </html>
  );
}
