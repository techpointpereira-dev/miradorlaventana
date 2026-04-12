import { Heart } from "lucide-react";
import { restaurantInfo } from "@/data/menu";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Name */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-400/50 flex items-center justify-center">
              <svg 
                viewBox="0 0 100 100" 
                className="w-6 h-6 text-amber-400"
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
            <div>
              <h3 className="text-white font-bold text-lg">La Ventana</h3>
              <p className="text-amber-400 text-sm">Mirador</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a 
              href="#menu" 
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              Menú
            </a>
            <a 
              href="#contact" 
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              Contacto
            </a>
            <a 
              href={`https://instagram.com/${restaurantInfo.social.instagram.replace("@", "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              Instagram
            </a>
            <a 
              href={`https://wa.me/57${restaurantInfo.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 hover:text-amber-400 transition-colors"
            >
              WhatsApp
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-stone-500 text-sm flex items-center gap-1 justify-center md:justify-end">
              Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500" /> en Boquerón
            </p>
            <p className="text-stone-600 text-xs mt-1">
              © {currentYear} {restaurantInfo.name}. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
