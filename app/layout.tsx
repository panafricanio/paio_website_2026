import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: "PAIO 2026 - The Future of Innovation",
  description: "Empowering innovation and collaboration on a global scale. Join us in shaping the future with cutting-edge solutions and meaningful impact.",
  keywords: ["PAIO 2026", "innovation", "collaboration", "technology"],
  authors: [{ name: "PAIO 2026 Team" }],
  openGraph: {
    title: "PAIO 2026",
    description: "The official website for PAIO 2026",
    siteName: "PAIO 2026",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
