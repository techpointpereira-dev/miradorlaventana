import { useState } from "react";
import { menuCategories } from "@/data/menu";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

// Group categories for better navigation
const menuGroups = {
  comidas: ["entradas", "piqueos", "asados", "platos-fuertes", "comidas-rapidas", "al-horno", "raices-mexicanas", "almuerzos-tipicos"],
  bebidas: ["bebidas-calientes", "bebidas-frias", "smoothies", "cervezas"],
  bar: ["vinos", "shots", "peceras", "cocktails", "licores-nacionales", "licores-importados"]
};

export function Menu() {
  const [activeGroup, setActiveGroup] = useState<string>("comidas");

  const getCategoryById = (id: string) => menuCategories.find(cat => cat.id === id);

  const renderMenuSection = (categoryId: string) => {
    const category = getCategoryById(categoryId);
    if (!category) return null;

    return (
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-amber-400 mb-6 pb-2 border-b border-amber-500/30">
          {category.title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {category.items.map((item, index) => (
            <div 
              key={index}
              className="group flex justify-between items-start p-4 rounded-xl bg-stone-800/30 hover:bg-stone-800/60 border border-stone-700/30 hover:border-amber-500/20 transition-all duration-300"
            >
              <div className="flex-1 pr-4">
                <h4 className="text-white font-medium group-hover:text-amber-300 transition-colors">
                  {item.name}
                </h4>
                {item.description && (
                  <p className="text-stone-400 text-sm mt-1 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              <span className="text-amber-400 font-bold whitespace-nowrap">
                {item.price}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section id="menu" className="py-20 bg-stone-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Nuestro <span className="text-amber-400">Menú</span>
          </h2>
          <p className="text-lg text-stone-400 max-w-2xl mx-auto">
            Descubre nuestra variedad de platos preparados con los mejores ingredientes 
            y el sabor tradicional que nos caracteriza.
          </p>
        </div>

        {/* Main Group Tabs */}
        <Tabs value={activeGroup} onValueChange={setActiveGroup} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-stone-800/50 p-1 rounded-full">
              <TabsTrigger 
                value="comidas" 
                className="px-6 py-3 rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-black text-stone-300 transition-all"
              >
                Comidas
              </TabsTrigger>
              <TabsTrigger 
                value="bebidas"
                className="px-6 py-3 rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-black text-stone-300 transition-all"
              >
                Bebidas
              </TabsTrigger>
              <TabsTrigger 
                value="bar"
                className="px-6 py-3 rounded-full data-[state=active]:bg-amber-500 data-[state=active]:text-black text-stone-300 transition-all"
              >
                Bar
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Sub-category tabs for each group */}
          <TabsContent value="comidas" className="mt-0">
            <ScrollArea className="w-full whitespace-nowrap mb-8">
              <div className="flex gap-2 pb-2">
                {menuGroups.comidas.map((catId) => {
                  const cat = getCategoryById(catId);
                  if (!cat) return null;
                  return (
                    <button
                      key={catId}
                      onClick={() => {
                        const element = document.getElementById(`cat-${catId}`);
                        element?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-4 py-2 rounded-full bg-stone-800/50 text-stone-300 hover:bg-amber-500/20 hover:text-amber-300 border border-stone-700/50 hover:border-amber-500/30 transition-all text-sm whitespace-nowrap"
                    >
                      {cat.title}
                    </button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="space-y-8">
              {menuGroups.comidas.map((catId) => (
                <div key={catId} id={`cat-${catId}`}>
                  {renderMenuSection(catId)}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bebidas" className="mt-0">
            <ScrollArea className="w-full whitespace-nowrap mb-8">
              <div className="flex gap-2 pb-2">
                {menuGroups.bebidas.map((catId) => {
                  const cat = getCategoryById(catId);
                  if (!cat) return null;
                  return (
                    <button
                      key={catId}
                      onClick={() => {
                        const element = document.getElementById(`cat-${catId}`);
                        element?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-4 py-2 rounded-full bg-stone-800/50 text-stone-300 hover:bg-amber-500/20 hover:text-amber-300 border border-stone-700/50 hover:border-amber-500/30 transition-all text-sm whitespace-nowrap"
                    >
                      {cat.title}
                    </button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="space-y-8">
              {menuGroups.bebidas.map((catId) => (
                <div key={catId} id={`cat-${catId}`}>
                  {renderMenuSection(catId)}
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="bar" className="mt-0">
            <ScrollArea className="w-full whitespace-nowrap mb-8">
              <div className="flex gap-2 pb-2">
                {menuGroups.bar.map((catId) => {
                  const cat = getCategoryById(catId);
                  if (!cat) return null;
                  return (
                    <button
                      key={catId}
                      onClick={() => {
                        const element = document.getElementById(`cat-${catId}`);
                        element?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className="px-4 py-2 rounded-full bg-stone-800/50 text-stone-300 hover:bg-amber-500/20 hover:text-amber-300 border border-stone-700/50 hover:border-amber-500/30 transition-all text-sm whitespace-nowrap"
                    >
                      {cat.title}
                    </button>
                  );
                })}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
            <div className="space-y-8">
              {menuGroups.bar.map((catId) => (
                <div key={catId} id={`cat-${catId}`}>
                  {renderMenuSection(catId)}
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
