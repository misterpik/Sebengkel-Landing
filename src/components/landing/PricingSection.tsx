import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "99.000",
    period: "/bulan",
    description: "Cocok untuk bengkel kecil yang baru memulai",
    features: [
      "Maksimal 50 transaksi/bulan",
      "Manajemen servis dasar",
      "Stok sparepart (100 item)",
      "Riwayat kendaraan",
      "Laporan bulanan",
      "Support email",
    ],
    popular: false,
    color: "from-gray-600 to-gray-700",
  },
  {
    name: "Professional",
    price: "199.000",
    period: "/bulan",
    description: "Paling populer untuk bengkel menengah",
    features: [
      "Transaksi unlimited",
      "Semua fitur Basic",
      "Stok sparepart unlimited",
      "Manajemen pelanggan lengkap",
      "Laporan & analitik advanced",
      "Multi-user (3 akun)",
      "Support prioritas",
      "Backup otomatis",
    ],
    popular: true,
    color: "from-blue-600 to-blue-700",
  },
  {
    name: "Enterprise",
    price: "399.000",
    period: "/bulan",
    description: "Untuk bengkel besar dengan cabang",
    features: [
      "Semua fitur Professional",
      "Multi-cabang unlimited",
      "Multi-user unlimited",
      "API akses",
      "Custom branding",
      "Dedicated account manager",
      "Training & onboarding",
      "SLA 99.9% uptime",
    ],
    popular: false,
    color: "from-blue-700 to-blue-800",
  },
];

export default function PricingSection() {
  return (
    <section id="harga" className="py-20 md:py-32 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Paket Harga yang{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Fleksibel
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan bengkel Anda. Semua paket
            termasuk gratis trial 14 hari
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative group hover:shadow-2xl transition-all duration-300 ${
                plan.popular
                  ? "border-2 border-blue-500 shadow-xl scale-105 md:scale-110"
                  : "border-2 hover:border-blue-200"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1 shadow-lg">
                    <Star className="h-4 w-4 fill-current" />
                    Paling Populer
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-gray-600 text-lg">Rp</span>
                  <span
                    className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
              </CardHeader>

              <CardContent className="px-6 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <div
                        className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br ${plan.color} flex items-center justify-center mt-0.5`}
                      >
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30"
                      : "bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-500 hover:text-blue-600"
                  }`}
                  size="lg"
                >
                  Pilih Paket {plan.name}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Semua harga sudah termasuk PPN. Butuh paket custom?{" "}
            <button className="text-blue-600 font-semibold hover:underline">
              Hubungi kami
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
