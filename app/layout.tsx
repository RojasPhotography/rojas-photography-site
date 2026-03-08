import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import SchemaScript from "./components/SchemaScript";
import GoogleAnalytics from "./components/GoogleAnalytics";
import MicrosoftClarity from "./components/MicrosoftClarity";
import { generateOrganizationSchema } from "./lib/schema";

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
  metadataBase: new URL('https://rojasphotography.net'),
  title: "Professional Corporate Headshots in Modesto | Rojas Photography",
  description:
    "Premium corporate headshots for executives, attorneys, and business leaders in Modesto, Stockton, Fresno, Turlock, and Merced. $150 session + $150/image. Trusted by Comcast, Save Mart, and California Lawyers Association.",
  robots: "index, follow",
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
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
        <GoogleAnalytics measurementId="G-FH5SG2NXP2" />
        <MicrosoftClarity projectId="vsdhem9lhy" />
        <SchemaScript schema={generateOrganizationSchema()} />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
