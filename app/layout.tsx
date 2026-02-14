import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Professional Corporate Headshots in Modesto | Rojas Photography",
  description:
    "Premium corporate headshots for executives, attorneys, and business leaders in Modesto, Stockton, Fresno, Turlock, and Merced. $150 session + $150/image. Trusted by Comcast, Save Mart, and California Lawyers Association.",
  robots: "index, follow",
  openGraph: {
    title: "Professional Corporate Headshots in Modesto | Rojas Photography",
    description:
      "Premium corporate headshots for executives, attorneys, and business leaders in Central Valley.",
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta name="theme-color" content="#1a5c3c" />
      </head>
      <body
        className={`${dmSerifDisplay.variable} ${dmSans.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
