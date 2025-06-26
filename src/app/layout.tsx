import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";


export const metadata: Metadata = {
  title: "Spicey O",
  description: "Welcome to Spicey-O, Kenya's boldest small-batch condiment makers. Born out of the desire to make bland food better, we handcraft chutneys and sauces using 100% locally sourced Kenyan ingredients. Whether you prefer it mellow or 'very freakin’ hot', our range is designed to bring bold, unforgettable flavour to your plate. We’re proudly Kenyan—rooted in local culture, fuelled by passion, and obsessed with great food.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"   suppressHydrationWarning>
      <body
      
      >
        {/* Navbar */}
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
