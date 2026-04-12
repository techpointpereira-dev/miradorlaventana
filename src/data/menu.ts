export interface MenuItem {
  name: string;
  price: string;
  description?: string;
}

export interface MenuCategory {
  id: string;
  title: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "entradas",
    title: "Entradas",
    items: [
      { name: "Chorizo x1", price: "$10.000", description: "Chorizo 100% santarrosano asado a la parrilla, acompañados de arepa, rodajas de tomate y limón." },
      { name: "Chorizos x2", price: "$18.000", description: "Chorizos 100% santarrosanos asados a la parrilla. Acompañados de arepa, rodajas de tomate y limón." },
      { name: "Nuggets de Pollo", price: "$18.500", description: "Nuggets de pollo acompañados de papas a la francesa y salsa de la casa." },
      { name: "Empanadas", price: "$1.900 c/u", description: "Carne, pollo o queso." },
      { name: "Patacón con Hogao y Arepa", price: "$15.000" },
      { name: "Canasta Criolla", price: "$25.000", description: "Con pollo o carne desmechada, acompañada de tocineta ahumada finamente picada y salsa criolla." },
      { name: "Canasta Paisa", price: "$25.000", description: "Finos cortes de chorizo santarrosano, tocineta ahumada, maíz y salsa criolla." },
      { name: "Canasta Mixta", price: "$25.000", description: "Pollo y carne, acompañada de tocineta ahumada finamente picada y salsa criolla." },
      { name: "Dedos de Queso", price: "$16.000" },
      { name: "Chorizo Cocido Santarrosano x2", price: "$20.000" },
      { name: "Chorinuggets", price: "$19.500", description: "Finos cortes de chorizo santarrosano apanados, acompañados con papas a la francesa." },
      { name: "Bocaditos Ventaneros", price: "$19.500", description: "Rollitos de tocineta ahumada con queso mozzarella." },
      { name: "Fingers de Pollo", price: "$20.000", description: "Tiras de pollo crocante acompañados de salsa de la casa." },
      { name: "Chicharroncitos con Patacón", price: "$23.900", description: "Crocantes chicharrones bañados en salsa agridulce y patacón." },
      { name: "Camarones Ventaneros", price: "$25.000", description: "Camarones apanados bañados en salsa de la casa con toque picante." },
    ]
  },
  {
    id: "piqueos",
    title: "Piqueos La Ventana",
    items: [
      { name: "Patacón con Carne o Pollo", price: "$30.000", description: "Patacón ventanero acompañado de miel mostaza ahumada, hogao de la ventana y chimichurry blanco." },
      { name: "Patacón con Todo", price: "$35.000", description: "Patacón ventanero acompañado de pollo, carne, tocineta y finos cortes de chorizo santarrosano a base de miel mostaza ahumada, hogao de la ventana y chimichurry blanco." },
      { name: "Alitas Sweet Hoes x8", price: "$25.000", description: "Alitas bañadas en salsa BBQ y papas a la francesa acompañadas de guacamole de la casa." },
      { name: "Alitas Sweet Hoes x16", price: "$45.000", description: "Alitas bañadas en salsa BBQ y papas a la francesa acompañadas de guacamole de la casa." },
      { name: "Piqueo de Papa Criolla a la Parmesana", price: "$18.900", description: "Papas criollas deshidratadas con finos cortes de tocino ahumado, salsa de la casa y queso parmesano." },
      { name: "Ceviche de Chicharrón", price: "$32.500", description: "Chicharrón crocante acompañado de salsa tipo acevichada, cebolla, tomate cherry y patacones crocantes." },
    ]
  },
  {
    id: "asados",
    title: "Asados al Carbón",
    items: [
      { name: "Picada Ranchera La Ventana x4", price: "$100.000", description: "Chorizo santarrosano, chicharrón, cerdo, costilla de cerdo con su toque ahumado. Acompañado de papa criolla, patacones, arepas, rodajas de limón y tomates con su toque cítrico." },
      { name: "Picada Ranchera La Ventana x2", price: "$60.000", description: "Chorizo santarrosano, chicharrón, cerdo con su toque ahumado, acompañado de papa criolla, patacones, arepas, rodajas de limón y tomates con su toque cítrico." },
      { name: "Carne al Carbón", price: "$38.500", description: "Paletero asado al carbón, acompañado de chimichurry argentino, arepa de maíz, plátano maduro y ensalada de la casa." },
      { name: "Churrasco al Carbón", price: "$48.500", description: "Churrasco corte mariposa asado al carbón, acompañado de chimichurry argentino, arepa de maíz, plátano maduro y ensalada de la casa." },
      { name: "Punta de Anca al Carbón", price: "$48.500", description: "Punta de anca corte mariposa asada al carbón acompañada de chimichurry argentino, arepa de maíz, plátano maduro y ensalada de la casa." },
      { name: "Pechuga al Carbón", price: "$38.500", description: "Pechuga asada al carbón acompañada de chimichurry argentino, arepa de maíz, plátano maduro y ensalada de la casa." },
    ]
  },
  {
    id: "platos-fuertes",
    title: "Platos Fuertes",
    items: [
      { name: "Costillas en Salsa BBQ", price: "$48.500", description: "Costillas asadas al carbón bañadas en salsa BBQ de la casa, papas a la francesa y ensalada de la casa." },
      { name: "Chuzo Chicken Cordon Blue", price: "$48.500", description: "Rollos de pechuga apanados con tocineta ahumada y queso, acompañado con papas a la francesa, ensalada y BBQ receta de la casa." },
      { name: "Pechuga en Salsa de Champiñones", price: "$48.500", description: "Pechuga asada al carbón, bañada en salsa de champiñones, acompañada de papas a la francesa y ensalada de la casa." },
      { name: "Chicharrón Ventanero", price: "$45.500", description: "Crocante tocino frito, acompañado de arepa crocante, papa criolla y ensalada de la casa." },
    ]
  },
  {
    id: "comidas-rapidas",
    title: "Comidas Rápidas",
    items: [
      { name: "Combo Elite 1 con Gaseosa", price: "$29.500", description: "Pan artesanal sellado con mantequilla, carne de res, cebolla crocante, queso cheddar, tocineta, lechuga, tomate, salsa de la casa y papas a la francesa." },
      { name: "Combo Elite 2 con Gaseosa", price: "$35.000", description: "Pan artesanal sellado con mantequilla, 2 carnes de res, cebolla crocante, queso cheddar, tocineta, lechuga, tomate, salsa de la casa y papas a la francesa." },
      { name: "Hamburguesa Sencilla", price: "$24.000", description: "Pan artesanal sellado con mantequilla, carne de res, cebolla crocante, lechuga, queso cheddar, tomate y salsa de la casa." },
      { name: "Hamburguesa Hawaiana", price: "$29.500", description: "Pan artesanal sellado con mantequilla, carne de res, queso mozzarella, piña, lechuga, tomate y salsa de la casa." },
      { name: "Hamburguesa Ventanera", price: "$29.500", description: "Pan artesanal sellado con mantequilla, carne de res, queso mozzarella, chorizo santarrosano, salsa de la casa, lechuga, tomate y papas a la francesa." },
      { name: "Hamburguesa Chicken Cronch", price: "$31.000", description: "Pan artesanal sellado con mantequilla pollo crocante acompañado de plátano maduro, tocineta y queso gratinado." },
      { name: "Maicitos", price: "$27.000", description: "Maíz, pollo, ripio, tocineta ahumada, queso mozzarella, piña, y salsas de la casa." },
      { name: "Salchipapa", price: "$19.600", description: "Papas a la francesa, salchicha, tocineta y queso." },
      { name: "Salchipapa Especial", price: "$28.400", description: "Papas a la francesa, salchicha, tocineta, pollo, chorizo 100% santarrosano, salsas de la casa, y queso." },
      { name: "Arepa Burger Especial", price: "$25.900", description: "Arepa, carne artesanal, lechuga, tocineta, papas a la francesa, tomate, jamón, ripio, queso mozzarella, queso cheddar, piña calada y variedad de salsas." },
      { name: "Choridesgranado", price: "$28.100", description: "Maíz, chorizo 100% santarrosano, batavia, ripio, variedad de salsas y queso mozzarella." },
      { name: "Chuzo Desgranado", price: "$28.000", description: "Maíz, pollo, carne de cerdo, jamón, batavia, ripio, variedad de salsas y queso mozzarella." },
      { name: "Choriperro", price: "$20.500", description: "Chorizo 100% santarrosano, ripio, queso mozzarella y variedad de salsas." },
      { name: "Choripapa", price: "$24.500", description: "Finos cortes de chorizo 100% santarrosano, papas a la francesa, tocineta ahumada, queso y salsas de la casa." },
      { name: "Perro Especial", price: "$24.100", description: "Salchicha super, piña calada, variedad de salsas, ripio, papas a la francesa, queso mozzarella y tocineta." },
    ]
  },
  {
    id: "al-horno",
    title: "Al Horno",
    items: [
      { name: "Maduro con Mantequilla", price: "$6.000", description: "Plátano al horno artesanal y mantequilla de la casa." },
      { name: "Maduro con Queso", price: "$12.000", description: "Plátano maduro, mantequilla de la casa y queso." },
      { name: "Maduro con Toque Dulce", price: "$14.000", description: "Plátano al horno artesanal, mantequilla de la casa, queso cuajada y dulce de guayaba." },
      { name: "Maduro Especial", price: "$25.000", description: "Preparado al horno artesanal con carne o pollo desmechado, acompañado de tocineta ahumada, queso gratinado y salsa criolla de la casa." },
      { name: "Maduro Montañero", price: "$25.000", description: "Plátano preparado en horno artesanal con chorizo 100% santarrosano, acompañado de tocineta ahumada, guacamole de la casa, maíz y queso gratinado." },
      { name: "Plátano Chancho", price: "$25.000", description: "Plátano preparado en horno artesanal con chicharrón crujiente, acompañado de tocineta ahumada, guacamole de la casa, maíz y queso gratinado." },
    ]
  },
  {
    id: "raices-mexicanas",
    title: "Raíces Mexicanas",
    items: [
      { name: "Dorilocos Personales (5 opciones 45g)", price: "$15.000", description: "Con nuestra deliciosa carne de birria, maicitos gratinados, guacamole y pico de gallo." },
      { name: "Dorilocos Medianos (1 opción 80g)", price: "$28.000" },
      { name: "Dorilocos Familiares (1 opción 185g)", price: "$52.000" },
      { name: "Nachos Chavito", price: "$15.000", description: "Acompañados de guacamole, sour cream y queso cheddar." },
      { name: "Nachos Ay Chavela", price: "$28.000", description: "Acompañados con pollo desmechado, queso mozzarella, queso cheddar, maicitos, guacamole y sour cream." },
      { name: "Nachos Raices", price: "$28.000", description: "Acompañando con carne molida, salteados con pimentón y cebolla, guacamole, sour cream y queso cheddar." },
      { name: "Flautas x3", price: "$28.000", description: "3 tortillas fritas, envueltas y rellenas de queso y el ingrediente de su elección. Res, pollo o mixtas." },
      { name: "Fajitas x3", price: "$26.000", description: "Pollo o res en julianas, salteados con pimentón y cebolla, acompañados de 3 tortillas. Res o pollo." },
      { name: "Burrito de Res", price: "$28.000", description: "Res desmechado. Dorada tortilla a la plancha, rellena de lechuga, frijol refrito, pico de gallo, guacamole, queso mozzarella, sour cream y el ingrediente de su elección." },
      { name: "Burrito de Pollo", price: "$28.000", description: "Pollo desmechado." },
      { name: "Burrito Mixto", price: "$28.000", description: "Pollo y res desmechado." },
      { name: "Burrito Hawaiano", price: "$28.000", description: "Queso, piña y tocineta." },
      { name: "Burrito Gratinado", price: "$30.000", description: "Burrito mixto bañado en queso fundido." },
      { name: "Burrito Raices", price: "$30.000", description: "Pollo y res en julianas, salteados con pimentón y cebolla." },
      { name: "Burrito Vegetariano", price: "$26.000", description: "Queso y vegetales salteados." },
      { name: "Quesadilla Queso", price: "$22.000", description: "Queso mozzarella y queso cuajada. Tortillas rellenas con queso y el ingrediente de su elección." },
      { name: "Quesadilla Res", price: "$25.000", description: "Res desmechado, queso y vegetales salteados." },
      { name: "Quesadilla Pollo", price: "$25.000", description: "Pollo desmechado, queso y vegetales salteados." },
      { name: "Quesadilla Hawaiana", price: "$27.000", description: "Queso, piña, tocineta y vegetales salteados." },
      { name: "Taco de Res", price: "$26.000", description: "Res desmechado. 3 crujientes tacos de maíz rellenos de queso, lechuga, pico de gallo, guacamole, frijol refrito y el ingrediente de su elección." },
      { name: "Tacos de Pollo", price: "$26.000", description: "Pollo desmechado." },
      { name: "Tacos de Chicharrón", price: "$29.000", description: "Chicharrón salteado con pimentón y cebolla." },
      { name: "Caldo de Albondigas x1", price: "$10.000", description: "Delicioso caldo de albondigas acompañado con huevo, arepa, limón y cilantro." },
      { name: "Caldo de Albondigas x2", price: "$13.000" },
    ]
  },
  {
    id: "almuerzos-tipicos",
    title: "Almuerzos Típicos (Domingos y Festivos)",
    items: [
      { name: "Sancocho en Leña", price: "Consultar", description: "Tradicional sancocho preparado en leña." },
      { name: "Frijoles en Leña", price: "Consultar", description: "Frijoles preparados en leña." },
      { name: "Mojarra Frita", price: "Consultar", description: "Mojarra frita con acompañamiento." },
    ]
  },
  {
    id: "bebidas-calientes",
    title: "Bebidas Calientes",
    items: [
      { name: "Americano Grande", price: "$5.400" },
      { name: "Americano Pequeño", price: "$4.000" },
      { name: "Pintado Grande", price: "$7.500" },
      { name: "Pintado Pequeño", price: "$5.500" },
      { name: "Capuchino", price: "$9.500" },
      { name: "Capuchino Chantilly", price: "$14.400" },
      { name: "Capuchino con Licor", price: "$15.400" },
      { name: "Café Bombon", price: "$10.000" },
      { name: "Chocolate en Agua", price: "$6.500" },
      { name: "Chocolate con Leche", price: "$8.500" },
      { name: "Chocomasmelo", price: "$14.500" },
      { name: "Choconutella", price: "$12.500" },
      { name: "Carajillo", price: "$6.500" },
      { name: "Aguapanela con Queso", price: "$9.200" },
      { name: "Aguapanela Sola", price: "$4.400" },
      { name: "Milo Grande", price: "$9.500" },
      { name: "Milo Pequeño", price: "$7.500" },
      { name: "Mocca", price: "$9.400" },
      { name: "Mocca Nutella", price: "$10.600" },
      { name: "Mocca Especial (lleva licor)", price: "$14.000" },
      { name: "Maicenita Natural", price: "$5.500" },
      { name: "Maicenita de Milo", price: "$7.500" },
      { name: "Aromática", price: "$4.500" },
      { name: "Aromática de Frutas", price: "$10.500" },
      { name: "Canelazo sin Licor", price: "$10.200" },
      { name: "Canelazo con Licor", price: "$18.300" },
      { name: "Afogato", price: "$15.000" },
      { name: "Té Chai", price: "$9.500" },
      { name: "Migote Paisa", price: "$20.000", description: "Buñuelo, pandebono, tostada, galletas dulces, queso mozzarella y chocolate en leche." },
    ]
  },
  {
    id: "bebidas-frias",
    title: "Bebidas Frías",
    items: [
      { name: "Granizados (Oreo, café y milo)", price: "$15.000" },
      { name: "Malteadas (Arequipe, milo, chocolate, fresa, café y oreo)", price: "$16.000" },
      { name: "Sodas Saborizadas (Frutos rojos, frutos amarillos y frutos verdes)", price: "$15.500" },
      { name: "Jugo en Agua (Mango, mora, maracuyá, fresa, lulo y guanábana)", price: "$7.000" },
      { name: "Jugo en Leche (Mango, mora, maracuyá, fresa, lulo y guanábana)", price: "$9.500" },
      { name: "Limonadas (Coco, mango biche, cerezada y piña colada)", price: "$15.000" },
      { name: "Limonada Natural", price: "$8.500" },
      { name: "Milo Frío", price: "$10.400" },
      { name: "Café Frío", price: "$8.500" },
      { name: "Tamarindo", price: "$4.900" },
      { name: "Gaseosa 350ml", price: "$4.900" },
      { name: "Gatorade", price: "$7.000" },
      { name: "Agua", price: "$3.500" },
      { name: "Té Chai Frío", price: "$15.000" },
    ]
  },
  {
    id: "smoothies",
    title: "Smoothies",
    items: [
      { name: "Mango", price: "$17.000", description: "A base de yogurt tipo griego, bajo en azúcar, fruta natural, avena y granola." },
      { name: "Banano", price: "$17.000", description: "A base de yogurt tipo griego, bajo en azúcar, fruta natural, avena y granola." },
      { name: "Fresa", price: "$17.000", description: "A base de yogurt tipo griego, bajo en azúcar, fruta natural, avena y granola." },
      { name: "Chocolate", price: "$17.000", description: "A base de yogurt tipo griego, bajo en azúcar, fruta natural, avena y granola." },
    ]
  },
  {
    id: "cervezas",
    title: "Cervezas",
    items: [
      { name: "Aguila Original", price: "$7.500" },
      { name: "Aguila Light", price: "$7.500" },
      { name: "Tres Cordilleras", price: "$10.000" },
      { name: "Poker", price: "$7.500" },
      { name: "Corona", price: "$11.000" },
      { name: "Andina", price: "$6.000" },
      { name: "Club Dorada", price: "$8.500" },
      { name: "Club Negra", price: "$8.500" },
      { name: "Club Roja", price: "$8.500" },
      { name: "Cola & Pola", price: "$7.500" },
      { name: "Heineken", price: "$10.000" },
      { name: "Bretaña", price: "$4.900" },
      { name: "Michelada", price: "$3.000" },
      { name: "Michelada de Mango", price: "$4.000" },
    ]
  },
  {
    id: "vinos",
    title: "Vinos",
    items: [
      { name: "Gato Negro (Cabernet sauvignon o merlot)", price: "$100.000" },
      { name: "Jarra de Sangría de la Casa", price: "$80.000", description: "Vino tinto rosa o blanco, con base de mandarina, ron, vodka, almibar, y frutos rojos." },
      { name: "Jarra de Sangría de Cerveza", price: "$68.000" },
      { name: "Frontera Botella", price: "$100.000" },
      { name: "Frontera Media", price: "$45.000" },
      { name: "Santa Rita Botella", price: "$120.000" },
      { name: "Santa Rita Media", price: "$60.000" },
      { name: "Vino Rosa", price: "$50.000" },
      { name: "Copa de Vino", price: "$15.000" },
      { name: "Copa de Vino Caliente", price: "$16.000" },
      { name: "Copa de Sangría", price: "$19.000" },
    ]
  },
  {
    id: "shots",
    title: "Shots de Licores",
    items: [
      { name: "Vodka", price: "$15.000" },
      { name: "Ginebra", price: "$15.000" },
      { name: "Whisky", price: "$15.000" },
      { name: "Baileys", price: "$15.000" },
      { name: "Ron", price: "$15.000" },
      { name: "Tequila", price: "$15.000" },
      { name: "Aguardiente", price: "$15.000" },
    ]
  },
  {
    id: "peceras",
    title: "Peceras y Sangrías",
    items: [
      { name: "Pecera Salvaje", price: "$80.000", description: "Variedad de licores como tequila, vodka, ron, ginebra y aguardiente, granadina, triple sec azul, almibar y decorada con naranja y gomas." },
    ]
  },
  {
    id: "cocktails",
    title: "Cocktails con Alcohol",
    items: [
      { name: "Mojito", price: "$25.000", description: "Ron blanco, hierba buena, soda, azúcar y limón." },
      { name: "Mojito de Coco", price: "$25.000", description: "Ron blanco, hierba buena, soda, azúcar, limón y coco." },
      { name: "Cabeza de Jabalí", price: "$25.000", description: "Ginebra, vodka, tequila, ron, zumo de naranja y triple sec." },
      { name: "Cuba Libre", price: "$25.000", description: "Ron, coca cola, hielo y limón." },
      { name: "Orgasmo", price: "$25.000", description: "Licor de café, amaretto y crema de whisky." },
      { name: "Long Island", price: "$25.000", description: "Vodka, ron, ginebra, tequila y triple sec." },
      { name: "Expresso Martini", price: "$25.000", description: "Expresso, vodka y licor de café." },
      { name: "Caliente Tentación", price: "$25.000", description: "Triple sec, vodka, granadina y lyche." },
      { name: "Polvo de Media Noche", price: "$25.000", description: "Tequila, vodka, licor de café y flameado." },
      { name: "Limonada de Vino", price: "$25.000", description: "Michelado de azúcar, zumo de limón, almibar y vino tinto." },
      { name: "Gin Tonic", price: "$25.000", description: "Rodajas de naranja, almibar, ginebra y canada dry." },
      { name: "Margarita", price: "$25.000", description: "Tequila, limón y triple sec, en copa michelada." },
      { name: "Margarita Especial", price: "$26.000", description: "De lulo, maracuyá o mango." },
      { name: "Colombian Mojito", price: "$26.000", description: "Lulo, mango, maracuyá o fresa a base de aguardiente." },
    ]
  },
  {
    id: "licores-nacionales",
    title: "Licores Nacionales",
    items: [
      { name: "Aguardiente Antioqueño Botella", price: "$90.000" },
      { name: "Aguardiente Antioqueño Media", price: "$50.000" },
      { name: "Aguardiente Cristal sin Azúcar Botella", price: "$80.000" },
      { name: "Aguardiente Cristal sin Azúcar Media", price: "$45.000" },
      { name: "Ron Caldas Botella", price: "$100.000" },
      { name: "Ron Caldas Media", price: "$60.000" },
      { name: "Ron Caldas 8 Años Botella", price: "$160.000" },
      { name: "Ron Caldas 8 Años Media", price: "$90.000" },
      { name: "Ron Medellín 3 Años Botella", price: "$90.000" },
      { name: "Ron Medellín 3 Años Media", price: "$55.000" },
      { name: "Ron Medellín 5 Años Botella", price: "$120.000" },
      { name: "Ron Medellín 5 Años Media", price: "$60.000" },
      { name: "Ron Medellín 8 Años Botella", price: "$140.000" },
      { name: "Ron Medellín 8 Años Media", price: "$80.000" },
      { name: "Jagermeister Botella", price: "$180.900" },
      { name: "Jagermeister Media", price: "$103.900" },
    ]
  },
  {
    id: "licores-importados",
    title: "Licores Importados",
    items: [
      { name: "Buchanans Botella", price: "$250.000" },
      { name: "Buchanans Media", price: "$130.000" },
      { name: "Old Par Botella", price: "$210.000" },
      { name: "Old Par Media", price: "$170.000" },
      { name: "Jhonnie Walker Botella", price: "$130.000" },
      { name: "Jack Daniel's Botella", price: "$224.000" },
      { name: "Jack Daniel's Media", price: "$120.000" },
      { name: "Jimador Botella", price: "$200.000" },
      { name: "Jimador Media", price: "$120.000" },
      { name: "José Cuervo Botella", price: "$170.000" },
      { name: "José Cuervo Media", price: "$100.000" },
      { name: "Absolut Botella", price: "$150.000" },
      { name: "Absolut Media", price: "$119.800" },
    ]
  },
];

export const restaurantInfo = {
  name: "La Ventana Mirador",
  slogan: "La vida es muy corta para beber y comer maluco!",
  address: "Alto de Boquerón (Kilometro 2 via a Pereira)",
  phone: "3103581643",
  social: {
    facebook: "La Ventana Boquerón",
    instagram: "@laventana_mirador",
    whatsapp: "3103581643"
  }
};
