import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BISC Marketing | Web Design, Social Media & Business Cards",
  description:
    "BISC Marketing helps businesses grow with professional website development, social media management, and custom business card design. Get results-driven marketing solutions today.",
  keywords: [
    "marketing agency",
    "web design",
    "social media management",
    "business cards",
    "digital marketing",
    "BISC Marketing",
  ],
  authors: [{ name: "BISC Marketing" }],
  openGraph: {
    title: "BISC Marketing | Web Design, Social Media & Business Cards",
    description:
      "Professional marketing solutions — websites, social media, and business cards that help your business stand out.",
    type: "website",
    locale: "en_AU",
    siteName: "BISC Marketing",
  },
  twitter: {
    card: "summary_large_image",
    title: "BISC Marketing | Web Design, Social Media & Business Cards",
    description:
      "Professional marketing solutions — websites, social media, and business cards that help your business stand out.",
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
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-white text-gray-900 antialiased">{children}</body>
    </html>
  );
}
