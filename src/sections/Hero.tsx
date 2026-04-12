import { ChevronDown, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { restaurantInfo } from "@/data/menu";

export function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 mb-6 rounded-full bg-amber-500/20 border-2 border-amber-400">
            <svg 
              viewBox="0 0 100 100" 
              className="w-12 h-12 text-amber-400"
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
        </div>

        {/* Restaurant Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
          <span className="text-amber-400">La</span> Ventana
        </h1>
        <p className="text-xl sm:text-2xl text-amber-200/80 font-light tracking-widest uppercase mb-8">
          Mirador
        </p>

        {/* Slogan */}
        <div className="mb-10">
          <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 italic font-light leading-relaxed">
            "{restaurantInfo.slogan}"
          </p>
        </div>

        {/* Quick Info */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 text-white/70">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-400" />
            <span className="text-sm sm:text-base">{restaurantInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-amber-400" />
            <span className="text-sm sm:text-base">{restaurantInfo.phone}</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            onClick={scrollToMenu}
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Ver Menú
          </Button>
          <Button 
            onClick={scrollToContact}
            className="bg-stone-800/80 hover:bg-stone-700 text-white border border-stone-600 px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
          >
            Contáctanos
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-white/50" />
      </div>
    </section>
  );
}
