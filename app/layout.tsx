import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NewsFlow",
  description: "NewsFlow is a news aggregator app built with Next.js. It provides users with the latest news from various sources in one place.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}
