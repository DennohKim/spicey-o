import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: "Spicey O",
  description:
    "Welcome to Spicey-O, Kenya's boldest small-batch condiment makers. Born out of the desire to make bland food better, we handcraft chutneys and sauces using 100% locally sourced Kenyan ingredients. Whether you prefer it mellow or 'very freakin’ hot', our range is designed to bring bold, unforgettable flavour to your plate. We’re proudly Kenyan—rooted in local culture, fuelled by passion, and obsessed with great food.",
  keywords: SITE.keywords,
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  publisher: SITE.author,
  alternates: {
    canonical: SITE.url, // overridden per-page when needed
  },
  openGraph: {
    title: "Spicey O",
    description: "Kenyan artisanal chutneys and sauces.",
    url: "https://spiceyo.food",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spicey O",
    description: "Kenyan handcrafted chutneys and sauces.",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
