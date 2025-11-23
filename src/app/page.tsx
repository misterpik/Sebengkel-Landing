import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import PricingSection from "@/components/landing/PricingSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import Footer from "@/components/landing/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sebengkel - Aplikasi Manajemen Bengkel Motor Terbaik di Indonesia",
  description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien. Sebengkel adalah aplikasi manajemen bengkel all-in-one untuk mengelola servis, stok sparepart, keuangan, dan riwayat kendaraan.",
  keywords: [
    "aplikasi bengkel motor",
    "manajemen bengkel",
    "software bengkel motor",
    "aplikasi servis motor",
    "manajemen sparepart",
    "aplikasi keuangan bengkel",
    "bengkel motor digital",
    "sistem bengkel motor",
    "Sebengkel"
  ],
  authors: [{ name: "Sebengkel" }],
  openGraph: {
    title: "Sebengkel - Aplikasi Manajemen Bengkel Motor Terbaik",
    description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien. Aplikasi manajemen bengkel all-in-one.",
    type: "website",
    locale: "id_ID",
    siteName: "Sebengkel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sebengkel - Aplikasi Manajemen Bengkel Motor",
    description: "Kelola bengkel motor Anda dengan lebih mudah dan efisien.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
}
