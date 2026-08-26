import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
      (process.env.VERCEL_PROJECT_PRODUCTION_URL
        ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
        : "http://localhost:3000")
  ),
  title: "MyPepFinder — Optimize You",
  description:
    "Research peptides. Compare providers. Optimize with confidence. Educational peptide research and comparison platform.",
  openGraph: {
    title: "Optimize You. | MyPepFinder",
    description: "Research peptides. Compare providers.",
    type: "website",
    siteName: "MyPepFinder",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optimize You. | MyPepFinder",
    description: "Research peptides. Compare providers.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased font-sans`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
