import { Utensils, Coffee, Wine, Flame } from "lucide-react";

const features = [
  {
    icon: Flame,
    title: "Asados al Carbón",
    description: "Carnes preparadas con leña para un sabor auténtico y tradicional."
  },
  {
    icon: Utensils,
    title: "Cocina Típica",
    description: "Almuerzos típicos los domingos y festivos con recetas tradicionales."
  },
  {
    icon: Coffee,
    title: "Bebidas Especiales",
    description: "Desde café artesanal hasta cócteles y licores nacionales e importados."
  },
  {
    icon: Wine,
    title: "Celebraciones",
    description: "El lugar perfecto para celebrar cumpleaños y ocasiones especiales."
  }
];

export function About() {
  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Bienvenidos a <span className="text-amber-400">La Ventana</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Un lugar donde la buena comida, el ambiente acogedor y las mejores vistas se encuentran 
            para crear experiencias inolvidables.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-6 rounded-2xl bg-stone-800/50 border border-stone-700/50 hover:bg-stone-800 hover:border-amber-500/30 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-amber-500/10 flex items-center justify-center mb-4 group-hover:bg-amber-500/20 transition-colors">
                <feature.icon className="w-7 h-7 text-amber-400" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Special Note */}
        <div className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-amber-400 mb-2">
                Almuerzos Típicos
              </h3>
              <p className="text-stone-300">
                Todos los <span className="text-white font-semibold">domingos y festivos</span> disfruta de nuestros 
                tradicionales almuerzos: Sancocho en leña, Frijoles en leña y Mojarra frita. 
                ¡Una experiencia gastronómica única!
              </p>
            </div>
            <div className="flex-shrink-0">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500 text-black font-semibold text-sm">
                Domingos & Festivos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
