import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import TawkChat from "@/components/TawkChat";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://erackeltraders.com"),

  title: {
    default: "Erackel Traders | Indian Export & Global Sourcing",
    template: "%s | Erackel Traders",
  },

  description:
    "Erackel Traders is an India-based export and sourcing company supplying food products, oats, spices, industrial supplies, electrical equipment and customized procurement solutions to international buyers.",

  keywords: [
    "Indian exporters",
    "India export company",
    "Indian product suppliers",
    "global sourcing from India",
    "oats exporter India",
    "food products exporter India",
    "spices exporter India",
    "industrial supplies exporter",
    "electrical equipment exporter India",
    "custom sourcing India",
  ],

  authors: [
    {
      name: "Erackel Traders",
    },
  ],

  creator: "Erackel Traders",
  publisher: "Erackel Traders",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://erackeltraders.com",
    siteName: "Erackel Traders",
    title: "Erackel Traders | Indian Export & Global Sourcing",
    description:
      "Connecting quality Indian products and reliable sourcing solutions with international buyers.",
    images: [
      {
        url: "/logo/Logo.png",
        width: 1200,
        height: 630,
        alt: "Erackel Traders",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Erackel Traders | Indian Export & Global Sourcing",
    description:
      "Indian export and global sourcing solutions for international buyers.",
    images: ["/logo/Logo.png"],
  },

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
