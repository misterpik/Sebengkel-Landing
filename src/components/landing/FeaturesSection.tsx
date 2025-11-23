import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Package,
  History,
  DollarSign,
  FileText,
  TrendingUp,
} from "lucide-react";

const features = [
  {
    icon: Wrench,
    title: "Manajemen Servis & Transaksi",
    description:
      "Catat setiap servis dengan detail lengkap, kelola antrian, dan proses pembayaran dengan cepat dan mudah.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: Package,
    title: "Stok Sparepart",
    description:
      "Pantau stok sparepart real-time, notifikasi otomatis saat stok menipis, dan kelola supplier dengan efisien.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: History,
    title: "Riwayat Kendaraan",
    description:
      "Simpan riwayat servis lengkap setiap kendaraan pelanggan untuk pelayanan yang lebih personal dan profesional.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: DollarSign,
    title: "Keuangan & Pembukuan",
    description:
      "Laporan keuangan otomatis, tracking pemasukan-pengeluaran, dan analisis profit untuk keputusan bisnis yang lebih baik.",
    color: "from-blue-600 to-blue-700",
  },
  {
    icon: FileText,
    title: "Laporan & Analitik",
    description:
      "Dashboard interaktif dengan grafik dan statistik untuk memantau performa bengkel Anda secara real-time.",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Manajemen Pelanggan",
    description:
      "Database pelanggan lengkap dengan riwayat transaksi, reminder servis berkala, dan program loyalitas.",
    color: "from-blue-600 to-blue-700",
  },
];

export default function FeaturesSection() {
  return (
    <section id="fitur" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Fitur Lengkap untuk{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Bengkel Modern
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Semua yang Anda butuhkan untuk mengelola bengkel motor dengan lebih
            profesional dan efisien
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 cursor-pointer"
              >
                <CardContent className="p-6 md:p-8">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
