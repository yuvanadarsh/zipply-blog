import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using Inter as a standard modern sans-serif
import Spotlight from "@/components/spotlight";
import Navbar from "@/components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zipply Blog - Insights on Focus & Productivity",
  description: "Read the latest updates, tips, and insights from the Zipply team.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className}>
        <Spotlight />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
