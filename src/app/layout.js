import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import { getSiteBaseUrl } from "@/lib/site-url";
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
  metadataBase: new URL(getSiteBaseUrl()),
  title: "MyPepFinder — Optimize You",
  description:
    "Research peptides. Compare providers. Optimize with confidence. Educational peptide research and comparison platform.",
  alternates: {
    canonical: "/",
  },
  robots: {
    googleBot: {
      "max-image-preview": "standard",
    },
  },
  openGraph: {
    title: "Optimize You. | MyPepFinder",
    description: "Research peptides. Compare providers.",
    type: "website",
    siteName: "MyPepFinder",
    url: "/",
  },
  twitter: {
    card: "summary",
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
