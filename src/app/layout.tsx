import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://sebengkel.com"),
  title: {
    default: "Sebengkel - Aplikasi Manajemen Bengkel Motor Terbaik di Indonesia",
    template: "%s | Sebengkel",
  },
  description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien. Sebengkel adalah aplikasi manajemen bengkel all-in-one untuk mengelola servis, stok sparepart, keuangan, dan riwayat kendaraan.",
  applicationName: "Sebengkel",
  referrer: "origin-when-cross-origin",
  keywords: [
    "aplikasi bengkel motor",
    "manajemen bengkel",
    "software bengkel motor",
    "aplikasi servis motor",
    "manajemen sparepart",
    "aplikasi keuangan bengkel",
    "bengkel motor digital",
    "sistem bengkel motor",
    "Sebengkel",
    "aplikasi bengkel Indonesia",
  ],
  authors: [{ name: "Sebengkel", url: "https://sebengkel.com" }],
  creator: "Sebengkel",
  publisher: "Sebengkel",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://sebengkel.com",
    siteName: "Sebengkel",
    title: "Sebengkel - Aplikasi Manajemen Bengkel Motor Terbaik",
    description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien. Aplikasi manajemen bengkel all-in-one.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sebengkel - Aplikasi Manajemen Bengkel Motor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebengkel - Aplikasi Manajemen Bengkel Motor",
    description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien.",
    creator: "@sebengkel",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="canonical" href="https://sebengkel.com" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
