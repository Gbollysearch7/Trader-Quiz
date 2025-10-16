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
  title: "Discover Your Trader Personality | Tradersyard Quiz",
  description:
    "Take our science-backed quiz to identify your unique trading style and get matched with the perfect Tradersyard evaluation challenge. Join 20,000+ funded traders.",
  keywords: [
    "trader quiz",
    "trading personality",
    "funded trading",
    "prop firm",
    "Tradersyard",
    "trading evaluation",
    "trader type",
  ],
  openGraph: {
    title: "Discover Your Trader Personality | Tradersyard",
    description:
      "Find out your trading personality type and get matched with the perfect evaluation challenge.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
