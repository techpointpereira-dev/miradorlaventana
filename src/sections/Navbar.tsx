import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantInfo } from "@/data/menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const openWhatsApp = () => {
    window.open(`https://wa.me/57${restaurantInfo.phone}`, "_blank");
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-stone-900/95 backdrop-blur-md border-b border-stone-800 shadow-lg" 
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2"
            >
              <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                isScrolled ? "bg-amber-500/20 border border-amber-400/50" : "bg-white/10 border border-white/30"
              }`}>
                <svg 
                  viewBox="0 0 100 100" 
                  className={`w-6 h-6 transition-colors ${isScrolled ? "text-amber-400" : "text-white"}`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="20" y="30" width="60" height="50" rx="4" />
                  <path d="M25 30 L50 10 L75 30" />
                  <line x1="35" y1="45" x2="35" y2="70" />
                  <line x1="50" y1="45" x2="50" y2="70" />
                  <line x1="65" y1="45" x2="65" y2="70" />
                </svg>
              </div>
              <span className={`font-bold text-lg transition-colors ${isScrolled ? "text-white" : "text-white"}`}>
                La Ventana
              </span>
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("menu")}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  isScrolled ? "text-stone-300" : "text-white/80"
                }`}
              >
                Menú
              </button>
              <button 
                onClick={() => scrollToSection("contact")}
                className={`text-sm font-medium transition-colors hover:text-amber-400 ${
                  isScrolled ? "text-stone-300" : "text-white/80"
                }`}
              >
                Contacto
              </button>
              <Button
                onClick={openWhatsApp}
                className="bg-amber-500 hover:bg-amber-600 text-black font-medium rounded-full px-6"
              >
                <Phone className="w-4 h-4 mr-2" />
                Reservar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute top-16 left-0 right-0 bg-stone-900 border-b border-stone-800 p-4 transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          <div className="flex flex-col gap-2">
            <button
              onClick={() => scrollToSection("menu")}
              className="w-full text-left px-4 py-3 rounded-lg text-stone-300 hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Menú
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full text-left px-4 py-3 rounded-lg text-stone-300 hover:bg-stone-800 hover:text-amber-400 transition-colors"
            >
              Contacto
            </button>
            <Button
              onClick={openWhatsApp}
              className="w-full bg-amber-500 hover:bg-amber-600 text-black font-medium mt-2"
            >
              <Phone className="w-4 h-4 mr-2" />
              Reservar por WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
