import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from "lucide-react";
import { restaurantInfo } from "@/data/menu";
import { Button } from "@/components/ui/button";

export function Contact() {
  const openWhatsApp = () => {
    window.open(`https://wa.me/57${restaurantInfo.phone}`, "_blank");
  };

  const openInstagram = () => {
    window.open(`https://instagram.com/${restaurantInfo.social.instagram.replace("@", "")}`, "_blank");
  };

  const openFacebook = () => {
    window.open(`https://facebook.com/LaVentanaBoqueron`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Visítanos
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Estamos listos para recibirte y ofrecerte la mejor experiencia gastronómica.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700/50">
              <h3 className="text-xl font-bold text-amber-400 mb-6">
                Información de Contacto
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Dirección</h4>
                    <p className="text-stone-400">{restaurantInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Teléfono</h4>
                    <p className="text-stone-400">{restaurantInfo.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1">Horario</h4>
                    <p className="text-stone-400">Abierto todos los días</p>
                    <p className="text-stone-500 text-sm">Domingos y festivos: Almuerzos típicos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="p-6 rounded-2xl bg-stone-800/50 border border-stone-700/50">
              <h3 className="text-xl font-bold text-amber-400 mb-6">
                Síguenos
              </h3>
              <div className="flex flex-wrap gap-4">
                <Button
                  onClick={openInstagram}
                  variant="outline"
                  className="flex items-center gap-2 border-pink-500/30 text-pink-400 hover:bg-pink-500/10 hover:border-pink-500/50"
                >
                  <Instagram className="w-5 h-5" />
                  {restaurantInfo.social.instagram}
                </Button>
                <Button
                  onClick={openFacebook}
                  variant="outline"
                  className="flex items-center gap-2 border-blue-500/30 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500/50"
                >
                  <Facebook className="w-5 h-5" />
                  {restaurantInfo.social.facebook}
                </Button>
                <Button
                  onClick={openWhatsApp}
                  variant="outline"
                  className="flex items-center gap-2 border-green-500/30 text-green-400 hover:bg-green-500/10 hover:border-green-500/50"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder / Image */}
          <div className="relative">
            <div className="h-full min-h-[400px] rounded-2xl overflow-hidden bg-stone-800 border border-stone-700/50">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="p-4 rounded-xl bg-stone-900/90 backdrop-blur-sm border border-stone-700/50">
                  <h4 className="text-white font-semibold mb-2">
                    ¿Cómo llegar?
                  </h4>
                  <p className="text-stone-400 text-sm mb-4">
                    Nos encontramos en el Alto de Boquerón, a solo 2 kilómetros por la vía a Pereira.
                  </p>
                  <a 
                    href={`https://maps.google.com/?q=Alto+de+Boqueron+via+a+Pereira`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-medium transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    Ver en Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-black mb-4">
            ¡Celebra con Nosotros!
          </h3>
          <p className="text-black/80 max-w-2xl mx-auto mb-6">
            ¿Tienes un cumpleaños o evento especial? En La Ventana Mirador te ayudamos 
            a crear momentos inolvidables con la mejor comida y ambiente.
          </p>
          <Button
            onClick={openWhatsApp}
            className="bg-black text-white hover:bg-stone-800 px-8 py-6 text-lg rounded-full font-semibold transition-all hover:scale-105"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Reserva Ahora
          </Button>
        </div>
      </div>
    </section>
  );
}
