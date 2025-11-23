"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Wrench } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-2 rounded-lg">
              <Wrench className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent">
              Sebengkel
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("fitur")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Fitur
            </button>
            <button
              onClick={() => scrollToSection("harga")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Harga
            </button>
            <button
              onClick={() => scrollToSection("manfaat")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Manfaat
            </button>
            <button
              onClick={() => scrollToSection("kontak")}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Kontak
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-lg shadow-blue-500/30"
            >
              Coba Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("fitur")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Fitur
              </button>
              <button
                onClick={() => scrollToSection("harga")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Harga
              </button>
              <button
                onClick={() => scrollToSection("manfaat")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Manfaat
              </button>
              <button
                onClick={() => scrollToSection("kontak")}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left"
              >
                Kontak
              </button>
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full">
                Coba Gratis
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
