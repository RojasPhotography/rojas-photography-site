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
  title: "Professional Corporate Headshots in Modesto | Rojas Photography",
  description: "Premium corporate headshots for executives, attorneys, and business leaders in Modesto, Stockton, Fresno, Turlock, and Merced. $150 session + $150/image. Trusted by Comcast, Save Mart, and California Lawyers Association.",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  robots: "index, follow",
  openGraph: {
    title: "Professional Corporate Headshots in Modesto | Rojas Photography",
    description: "Premium corporate headshots for executives, attorneys, and business leaders in Central Valley.",
    url: "https://rojasphotography.net",
    type: "website",
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
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#1a5c3c" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}