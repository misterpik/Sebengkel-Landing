import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  TrendingUp,
  Users,
  Shield,
  Smartphone,
  Zap,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Hemat Waktu 70%",
    description:
      "Otomasi proses administrasi dan pembukuan sehingga Anda bisa fokus pada pelayanan pelanggan.",
  },
  {
    icon: TrendingUp,
    title: "Tingkatkan Omzet",
    description:
      "Analitik mendalam membantu Anda mengidentifikasi peluang bisnis dan meningkatkan profit hingga 40%.",
  },
  {
    icon: Users,
    title: "Pelayanan Lebih Baik",
    description:
      "Akses cepat ke riwayat kendaraan membuat pelayanan lebih personal dan profesional.",
  },
  {
    icon: Shield,
    title: "Data Aman & Terpercaya",
    description:
      "Enkripsi tingkat bank dan backup otomatis memastikan data bisnis Anda selalu aman.",
  },
  {
    icon: Smartphone,
    title: "Akses Dimana Saja",
    description:
      "Pantau bisnis Anda dari smartphone atau komputer, kapan saja dan dimana saja.",
  },
  {
    icon: Zap,
    title: "Setup Cepat & Mudah",
    description:
      "Mulai dalam 5 menit tanpa perlu keahlian teknis. Tim support kami siap membantu.",
  },
];

export default function BenefitsSection() {
  return (
    <section id="manfaat" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Mengapa Memilih{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Sebengkel?
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Bergabunglah dengan ratusan bengkel motor yang telah merasakan
            manfaat digitalisasi bisnis
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200"
              >
                <CardContent className="p-6 md:p-8 text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Testimonial Section */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 shadow-2xl">
            <CardContent className="p-8 md:p-12 text-center text-white">
              <div className="mb-6">
                <svg
                  className="w-12 h-12 mx-auto text-blue-200"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed">
                "Sejak pakai Sebengkel, administrasi bengkel jadi jauh lebih
                rapi. Omzet naik 35% dalam 3 bulan karena bisa fokus ke
                pelayanan pelanggan. Highly recommended!"
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold">
                  BS
                </div>
                <div className="text-left">
                  <p className="font-bold text-lg">Budi Santoso</p>
                  <p className="text-blue-200">
                    Pemilik Bengkel Motor Jaya, Jakarta
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
