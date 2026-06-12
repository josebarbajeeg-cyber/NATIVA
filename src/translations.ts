// Modular translation resource for NATIVA Eco Jungle Residences
// English is the primary language ('en'), Spanish is secondary ('es')

export interface Amenity {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export const getAmenitiesList = (lang: "en" | "es"): Amenity[] => [
  {
    id: "clubhouse",
    name: "Clubhouse",
    category: lang === "en" ? "Social" : "Social",
    image: "/src/assets/images/luxury_social_clubhouse_1781074762788.png",
    description: lang === "en"
      ? "The low-density social centerpiece. Sustainable architecture blending precious woods, rustic teak, and palapa thatched roofs with a modern double-height design. Features a library, tasting lounge, organic farm-to-table restaurant, and shaded corners aligned to catch the breeze."
      : "El epicentro social de baja densidad. Arquitectura sustentable que fusiona maderas preciosas, teca rústica y techos de palapa con un diseño moderno de doble altura. Ofrece biblioteca, lounge de degustación, restaurante orgánico de granja a la mesa y rincones sombreados orientados hacia la brisa."
  },
  {
    id: "pool",
    name: lang === "en" ? "Natural Pool" : "Piscina Natural",
    category: lang === "en" ? "Nature" : "Naturaleza",
    image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=80",
    description: lang === "en"
      ? "A crystal-clear oasis sculpted from native limestone, featuring naturally filtered fresh water. Surrounded by a sustainable teak deck with comfortable lounge chairs, closed-loop soothing waterfalls, and lush tropical ferns."
      : "Un oasis cristalino esculpido en piedra caliza nativa, con aguas frescas filtradas naturalmente. Rodeado por un deck de teca sustentable con cómodos camastros, cascadas relajantes de circuito cerrado y densos helechos tropicales."
  },
  {
    id: "yoga",
    name: lang === "en" ? "Yoga & Wellness Sanctuary" : "Yoga & Wellness Sanctuary",
    category: lang === "en" ? "Wellness" : "Bienestar",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAthHk5xCxfhT8AaUKfYIDLAyB2dvJ9A2wztUlibzBTNMBrLQe2UwitgbOrZgulaMyBLrCYDGyk4bJDcuIrjUg_59OsdQG2xCLRYMTK6g6_EEC9wWnFAkvPM5SmIBZkBXAkbbs78VF3IyY220dozcNo8hIH2-2_wC_p-W4Ma7u_2MqlDtmUlzmx_uVez06sE8TjErBAkF1QJCUtRpwumnJe5PIc9HMuX4dE4Mzqay14Qp38jK7lEXs-ha4n7B1FxRucqmtDaiVY3YkV",
    description: lang === "en"
      ? "A majestic elevated deck of exotic wood nestled under the forest canopy. Designed to receive the sunrise filtering through the giant branches of sacred ceiba trees, ideal for daily introspection and stretching."
      : "Una majestuosa plataforma elevada de madera exótica ubicada bajo el dosel forestal. Diseñada para recibir la luz del amanecer filtrada entre las ramas gigantes de sagrados ceibas, ideal para introspección y estiramientos diarios."
  },
  {
    id: "cenotes",
    name: lang === "en" ? "Cenote" : "Cenote",
    category: lang === "en" ? "Nature" : "Naturaleza",
    image: "https://i.imgur.com/G7KVVfg.jpeg",
    description: lang === "en"
      ? "Exclusive access to a pristine virgin cenote within the development. A subterranean jewel of turquoise waters where you can swim in deep meditation, connecting with the millenary aquifer heart of the peninsula."
      : "Acceso exclusivo a un majestuoso cenote virgen dentro del desarrollo. Una joya subterránea de aguas turquesas donde se puede nadar en profunda meditación, conectando con el corazón acuífero milenario de la península."
  },
  {
    id: "temazcal",
    name: lang === "en" ? "Temazcal Ritual" : "Temazcal Ritual",
    category: lang === "en" ? "Wellness" : "Bienestar",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    description: lang === "en"
      ? "Pre-Hispanic inspired dome structure guided by local ceremonial masters. A mystical and detoxifying sensory experience under the steam of volcanic stones infused with wild healing herbs."
      : "Estructura domeñada de inspiración prehispánica guiada por maestros ceremoniales de la tradición local. Una experiencia sensorial mística y desintoxicante bajo el vapor de piedras volcánicas infundidas con hierbas silvestres curativas."
  },
  {
    id: "senderos",
    name: lang === "en" ? "Ecological Trails" : "Senderos Ecológicos",
    category: lang === "en" ? "Nature" : "Naturaleza",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800&q=80",
    description: lang === "en"
      ? "Scenic rustic trails for contemplative walks or low-impact biking, winding through the development's 180 hectares for spotting exotic birds, wild orchids, and ancient trees."
      : "Ciclo de senderos rústicos para caminata contemplativa o ciclismo de bajo impacto, serpenteando a lo largo de las 180 hectáreas del desarrollo para el avistamiento de aves exóticas, orquídeas salvajes y árboles centenarios."
  },
  {
    id: "tennis",
    name: lang === "en" ? "Eco-Friendly Tennis Court" : "Cancha de Tenis Ecológica",
    category: lang === "en" ? "Sports" : "Deporte",
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=800&q=80",
    description: lang === "en"
      ? "Professional tennis court framed by massive green walls of jungle vegetation, providing a natural wind barrier and unmatched air quality for your morning matches."
      : "Cancha de tenis profesional enmarcada por gigantescos muros verdes de vegetación selvática, proporcionando una barrera de viento natural y una calidad de aire inigualable para tus partidos matutinos."
  },
  {
    id: "multi",
    name: lang === "en" ? "Multi-purpose & Volleyball Court" : "Cancha Multiusos & Voleibol",
    category: lang === "en" ? "Sports" : "Deporte",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=800&q=80",
    description: lang === "en"
      ? "Soft silica sand spaces and soccer courts subtly integrated into jungle clearings, perfect for active family fun and friendly sports matches."
      : "Espacios de arena sílica suave y canchas de fútbol rápido integradas sutilmente en claros de selva, perfectas para la diversión familiar activa y encuentros deportivos amistosos."
  },
  {
    id: "golf",
    name: lang === "en" ? "Mini Golf & Virtual Golf Cabins" : "Mini Golf & Cabinas de Golf Virtual",
    category: lang === "en" ? "Sports" : "Deporte",
    image: "https://images.unsplash.com/photo-1587174486073-ae5e5cff23aa?auto=format&fit=crop&w=800&q=80",
    description: lang === "en"
      ? "Organically designed mini-golf course flowing with the natural contours of the jungle floor, complemented by high-definition virtual simulation cabins in the Clubhouse for precision enthusiasts."
      : "Campo de mini-golf de diseño orgánico que fluye con el contorno natural del suelo selvático, complementado con cabinas tecnológicas de simulación de alta definición en el Clubhouse para los amantes de la precisión."
  },
  {
    id: "campfire",
    name: lang === "en" ? "Campfire Area & Observatory" : "Área de Fogata & Observatorio",
    category: lang === "en" ? "Social" : "Social",
    image: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
    description: lang === "en"
      ? "A circular sunken campfire pit protected by Mayan limestone, ideal for sharing stories, tasting premium mezcal, and gazing at night skies free from light pollution."
      : "Una fogata de diseño circular hundido protegida por piedra caliza maya, ideal para compartir historias, catar mezcal premium y contemplar cielos nocturnos libres de contaminación lumínica."
  }
];

export const getTranslations = (lang: "en" | "es") => {
  return {
    // Navigation Menu
    navConcepto: lang === "en" ? "Concept" : "Concepto",
    navMasterplan: lang === "en" ? "Master Plan" : "Master Plan",
    navAmenidades: lang === "en" ? "Amenities" : "Amenidades",
    navInversion: lang === "en" ? "Investment" : "Inversión",
    navContacto: lang === "en" ? "Contact" : "Contacto",
    navInvertir: lang === "en" ? "Invest in Pre-Sale" : "Invertir en Preventa",
    navDiscover: lang === "en" ? "Discover Pre-Sale" : "Descubrir Preventa",
    navSantuarioConcepto: lang === "en" ? "Sanctuary & Concept" : "Santuario & Concepto",
    navMasterPlanLotes: lang === "en" ? "Lots Master Plan" : "Master Plan de Lotes",
    navAmenidadesExclusivas: lang === "en" ? "Exclusive Amenities" : "Amenidades Exclusivas",
    navModeloPlusvalia: lang === "en" ? "Model & Appreciation" : "Modelo & Plusvalía",
    navRegistrarInteres: lang === "en" ? "Register Interest" : "Registrar Interés",
    navPresaleExclusive: lang === "en" ? "EXCLUSIVE PRE-SALE IN QUINTANA ROO" : "PRE-VENTA EXCLUSIVA EN QUINTANA ROO",

    // Hero Section
    heroPreSaleTag: lang === "en" ? "Exclusive Launch · Initial Pre-Sale" : "Lanzamiento Exclusivo · Preventa Inicial",
    heroJungleResidences: lang === "en" ? "Eco Jungle Residences" : "Eco Jungle Residences",
    heroSlogan: lang === "en" ? '"A sanctuary where nature and investment meet"' : '"Un refugio donde la naturaleza y la inversión se encuentran"',
    heroCtaInvest: lang === "en" ? "Invest in Pre-Sale" : "Invertir en Preventa",
    heroCtaExplore: lang === "en" ? "Explore Project" : "Explorar Proyecto",
    heroMetricJungle: lang === "en" ? "Preserved Forest" : "Selva Preservada",
    heroMetricLots: lang === "en" ? "Exclusive Lots" : "Terrenos Exclusivos",
    heroMetricAmenities: lang === "en" ? "Luxury Amenities" : "Amenidades de Lujo",
    heroHeaderAppreciation: lang === "en" ? "Appreciation" : "Plusvalía",
    heroPreSaleHeader: lang === "en" ? "950 Lots Development" : "Desarrollo de 950 Lotes",
    heroPreSaleSub: lang === "en" ? "Pre-sale of 100 lots at preferential prices for investors." : "Preventa de 100 terrenos a precio preferencial para inversionistas.",

    // Concept Section
    conceptTag: lang === "en" ? "The Concept" : "El Concepto",
    conceptTitleFront: lang === "en" ? "Sanctuary of" : "Santuario de",
    conceptTitleBack: lang === "en" ? "Eco-Luxury" : "Lujo Ecológico",
    conceptDesc1: lang === "en" 
      ? "An eco-residential project strategically located near Cancun, Quintana Roo. It is an exclusive, low-density development with high value appreciation potential, designed for those who value the authenticity of primal forest without compromising contemporary elegance."
      : "Proyecto eco-residencial estratégicamente situado cerca de Cancún, Quintana Roo. Es un desarrollo exclusivo de baja densidad y alta plusvalía diseñado para quienes valoran la autenticidad de la selva virgen sin comprometer la elegancia contemporánea.",
    conceptQuote: lang === "en"
      ? "“We seek to preserve native flora and fauna through state-of-the-art sustainable architecture. A sanctuary where absolute privacy and comfort coexist in flawless ecological balance.”"
      : "“Buscamos preservar la flora y fauna nativa mediante una arquitectura sustentable de vanguardia. Un refugio donde la privacidad total y la comodidad coexisten en un perfecto balance ecológico.”",
    conceptLocTitle: lang === "en" ? "Strategic Location" : "Ubicación Estratégica",
    conceptLocDesc: lang === "en" 
      ? "180 hectares in the magical primal jungle located close to Cancun, Quintana Roo. An area experiencing high tourism and real estate growth with rapid access to the Mexican Caribbean."
      : "180 hectáreas en la mágica mística selva cercana a Cancún, Quintana Roo. Zona de máxima demanda turística e inmobiliaria con acceso rápido al Caribe Mexicano.",
    conceptConnTitle: lang === "en" ? "Flawless Connectivity" : "Conectividad Perfecta",
    conceptConnDesc: lang === "en"
      ? "Direct connection with the Cancun International Airport, the Hotel Zone, and the upcoming Mayan Train route, enabling stellar accessibility in the middle of sacred serene wilderness."
      : "Conexión directa con el Aeropuerto Internacional de Cancún, la Zona Hotelera y el tramo del Tren Maya, permitiendo una accesibilidad impecable en medio de un silencio sagrado.",
    conceptExperience: lang === "en" ? "THE EXPERIENCE" : "La Experiencia",
    conceptCabinLiving: lang === "en" ? "Eco-Luxury Cabin Living" : "Eco-Luxury Cabin Living",
    conceptPreservation: lang === "en" ? "PRESERVATION" : "Preservación",
    conceptRegenerative: lang === "en" ? "Sustainable Regenerative Architecture" : "Arquitectura regenerativa sustentable",

    // Master Plan Section
    mpTag: lang === "en" ? "General Master Plan" : "Master Plan Maestro",
    mpTitle: lang === "en" ? "General Layout & Acquisition Options" : "Plano General & Opciones de Adquisición",
    mpDesc: lang === "en"
      ? "A meticulously detailed 180-hectare master plan mapped out to safeguard native biodiversity. The development offers low-carbon footprint and spacious boundaries to ensure an environment of absolute tranquility and generous natural reserve."
      : "Un master plan minuciosamente diseñado de 180 hectáreas para resguardar la biodiversidad local. El desarrollo ofrece terrenos de baja huella de carbono y amplias dimensiones para asegurar un entorno de absoluta paz y gran reserva natural.",
    mpTabLots: lang === "en" ? "Lots" : "Terrenos",
    mpTabCabins: lang === "en" ? "Eco Cabins" : "Eco Cabañas",
    
    // Lots Tab
    mpLotsTag: lang === "en" ? "Residential Option" : "Opción Residencial",
    mpLotsTitle: lang === "en" ? "Eco-Residential Lots" : "Terrenos Eco-Residenciales",
    mpLotsDesc: lang === "en"
      ? "Rustic, grand-scale land lots ideal for custom designing your sanctuary integrated into the ecosystem. Every parcel meticulously respects master-planned forestry guidelines."
      : "Lotes rústicos de gran extensión ideales para diseñar la villa de tus sueños integrada en el ecosistema. Cada terreno respeta los dictámenes de preservación forestal.",
    mpLotsDim: lang === "en" ? "Dimensions" : "Dimensiones",
    mpLotsDimVal: lang === "en" ? "Starting from 1,000 sqm" : "Desde 1,000 m²",
    mpLotsClear: lang === "en" ? "Max Clearing Limit" : "Huella de Desmonte Máx.",
    mpLotsClearVal: lang === "en" ? "Maximum 20% Only" : "Solamente el 20%",
    mpLotsStatus: lang === "en" ? "Ownership Status" : "Estatus de Propiedad",
    mpLotsStatusVal: lang === "en" ? "Fully Deedable & Legal" : "Escritura y Régimen lícito",

    // Cabins Tab
    mpCabTag: lang === "en" ? "Vacation Rental Option" : "Opción Renta Vacacional",
    mpCabTitle: lang === "en" ? "Eco Cabins for Rent" : "Eco Cabins para Rentas",
    mpCabDesc: lang === "en"
      ? "Modular building layouts styled with fine local timber and stilted foundations. Perfect for direct incorporation into NATIVA's luxury rental property program."
      : "Modelos de construcción modular con maderas finas endémicas y cimentaciones tipo palafito. Perfectas para ingresar al catálogo de rentas vacacionales de lujo de NATIVA.",
    mpCabArea: lang === "en" ? "Built Area" : "Área de Construcción",
    mpCabAreaVal: lang === "en" ? "85 sqm to 160 sqm" : "85m² a 160m²",
    mpCabBeds: lang === "en" ? "Bedrooms" : "Habitaciones",
    mpCabBedsVal: lang === "en" ? "1 to 2 premium suites" : "1 a 2 recámaras premium",
    mpCabMaint: lang === "en" ? "Maintenance" : "Mantenimiento",
    mpCabMaintVal: lang === "en" ? "Central Property Management" : "Administración Central de Rentas",

    mpPurposeTag: lang === "en" ? "Purposeful Investment" : "Inversión Con Propósito",
    mpDensityTitle: lang === "en" ? "True Low Density" : "Baja Densidad Real",
    mpDensityDesc: lang === "en"
      ? "We enjoy an extensive, perpetual wild canopy preserve area, ensuring that your immediate forest neighbors stay completely untouched and secure forever."
      : "Contamos con un área extensiva de conservación natural perpetua de selva alta, asegurando que tus colindantes inmediatos permanezcan inalterados y protegidos para siempre.",
    
    mpGeneralPlan: lang === "en" ? "GENERAL LAYOUT - NATIVA DEVELOPMENT" : "PLANO GENERAL - DESARROLLO NATIVA",
    mpPreSaleAvailable: lang === "en" ? "Pre-Sale Lots Available" : "Preventa Lotes Disponibles",
    mpPoolCenote: lang === "en" ? "Natural Pool & Cenote" : "Piscina Natural & Cenote",
    mpEcoLotsPremium: lang === "en" ? "Premium Eco-Lots" : "Eco-Lotes Premium",
    mpIllustrativeNote: lang === "en" ? "* Layout graphic for promotional and illustrative use." : "* Plano de carácter ilustrativo para fines comerciales.",
    mpDownloadPdf: lang === "en" ? "Download Technical Catalog PDF" : "Descargar PDF Catálogo Técnico",
    
    mpSatTitle: lang === "en" ? "SATELLITE LOCATION & CONSTRUCTIVE GEOMETRY" : "UBICACIÓN SATELITAL & POLÍGONO DE RESERVA",
    mpStrategicLocation: lang === "en" ? "Strategic Location Map" : "Ubicación Estratégica",
    mpNativaMap: lang === "en" ? "NATIVA MAP" : "NATIVA MAP",
    mpExpandMap: lang === "en" ? "Expand Detailed Layout" : "Ampliar Plano Detallado",
    mpExpandSub: lang === "en" ? "View precise satellite coordinates, cadastral boundaries, and water wells." : "Ver coordenadas satelitales, límites catastrales y cenotes.",
    mpSatCaption: lang === "en" ? '* Official satellite plot boundaries of polygon "El Agapito" with exact coordinates and municipal references.' : '* Plano satelital oficial del Polígono "El Agapito" con colindancias y puntos de referencia catastrales.',
    mpAccessCoords: lang === "en" ? "View Coordinates of Access" : "Ver Coordenadas de Acceso",

    // Amenities Section
    amenTag: lang === "en" ? "Exclusive Experiences" : "Experiencias Exclusivas",
    amenTitle: lang === "en" ? "Amenities Crafted for Your Tranquility and Harmony with the Environment" : "Amenidades Creadas Para Su Tranquilidad y Armonía del Entorno",
    amenTitleItalic: lang === "en" ? "Tranquility and Harmony with the Environment" : "Tranquilidad y Armonía del Entorno",
    amenDesc: lang === "en"
      ? "Discover the spectacular assets crafted to elevate your daily life. A balanced fusion of high-end sports structures, pristine freshwater healing reserves, and organic social spaces."
      : "Descubra las extraordinarias instalaciones diseñadas para complementar tu estilo de vida. Un conjunto balanceado de instalaciones deportivas, santuarios curativos de agua dulce y espacios de congregación social selectos.",
    amenMinorCampfire: lang === "en" ? "Campfire Trails" : "Área de Fogatas",
    amenMinorTennis: lang === "en" ? "Tennis Court" : "Cancha de Tenis",
    amenMinorSports: lang === "en" ? "Sports Courts" : "Canchas Deportivas",
    amenMinorGolf: lang === "en" ? "Contour Mini-Golf" : "Mini-Golf Contorno",
    amenMinorSim: lang === "en" ? "Virtual Simulator" : "Simulador Virtual",

    // Lightbox / Modals
    amenModalSubtitle: lang === "en" ? "Central Master Plan Location" : "Ubicación central del Master Plan",
    amenModalButton: lang === "en" ? "Request Full Catalog" : "Solicitar Catálogo Completo",
    
    mapLightboxTitle: lang === "en" ? "CADASTRAL & SATELLITE PLOT - NATIVA" : "PLANO CATASTRAL Y SATELITAL NATIVA",
    mapLightboxSub: lang === "en" ? "El Agapito Polygon — Quintana Roo, Mexico" : "Polígono El Agapito — Quintana Roo, México",
    mapLightboxNavTitle: lang === "en" ? "Map Navigation Guidelines" : "Navegación del Plano",
    mapLightboxNav1: lang === "en" ? "• Use + / - to modify zoom scale up to 300%." : "• Use + / - para ajustar zoom hasta 300%.",
    mapLightboxNav2: lang === "en" ? "• Drag or use structural scrolls to browse cadastral references in UHD." : "• Arrastre o use las barras de desplazamiento para explorar colindancias y coordenadas en alta resolución.",
    mapLightboxFooter: lang === "en" 
      ? "Strategic location positioning on Cancun - Valladolid premium growth axis, ideal for fully secure family heritage investments."
      : "Ubicación estratégica sobre la ruta de alto crecimiento Cancún - Valladolid, ideal para inversión patrimonial segura.",

    // Investment Section
    invTag: lang === "en" ? "Business Model" : "Modelo de Negocio",
    invTitle: lang === "en" ? "Opportunity for Smart Assets" : "Oportunidad para Patrimonio Inteligente",
    invDesc: lang === "en"
      ? "Professional standards and stellar luxury real estate records are our strongest values. NATIVA offers a highly lucrative, eco-sustained business model built on four robust pillars:"
      : "El profesionalismo y la experiencia en el sector inmobiliario de lujo son nuestras mayores fortalezas. NATIVA cuenta con un modelo de negocio balanceado y eco-sustentable de alta rentabilidad basado en cuatro pilares:",
    
    p1Title: lang === "en" ? "Initial Pre-Sale Phase" : "Adquisición Pre-Venta Inicial",
    p1Desc: lang === "en"
      ? "Secure premium terrain starting from 1,000 sqm with the absolute lowest introductory price points, locking in substantial appreciation margins from day one."
      : "Adquiera terrenos premium desde 1,000 m² con los precios base más bajos del mercado, asegurando un margen sustancial de plusvalía desde la fase de urbanización.",
    
    p2Title: lang === "en" ? "Sustained Modular Cabin layouts" : "Construcción Modular Eco",
    p2Desc: lang === "en"
      ? "Build sleek, luxury modular layouts utilizing pre-approved ecological designs that respect the jungle canopy and minimize carbon footprint."
      : "Construya cabañas minimalistas de alta gama mediante nuestros diseños pre-aprobados sustentables de bajo impacto que maximizan la naturaleza circundante.",
    
    p3Title: lang === "en" ? "Fully Managed Property Income" : "Rentas Vacacionales Administradas",
    p3Desc: lang === "en"
      ? "Turnkey hotel standard framework optimized to yield lucrative passive cash flow managed under premium international resort operations."
      : "Modelo llave en mano optimizado para generar atractivos flujos pasivos mediante la administración hotelera centralizada en plataformas internacionales de lujo.",
    
    p4Title: lang === "en" ? "Unstoppable Land Appreciation" : "Crecimiento de Plusvalía Urbana",
    p4Desc: lang === "en"
      ? "The matchless connectivity of the Mexican Riviera, adjacent to Cancun and mega-infrastructure investments in Quintana Roo, guarantees historical asset appreciation."
      : "La conectividad del Caribe Mexicano, aunado a la cercanía de Cancún y megaproyectos federales en Quintana Roo, garantiza una revalorización histórica del suelo.",

    // Calculator Section
    calcTitleTag: lang === "en" ? "NATIVA Investment Simulator" : "Simulador de Inversión NATIVA",
    calcHeading: lang === "en" ? "Project your Capital Appreciation" : "Evalúe su Retorno de Plusvalía",
    calcModel: lang === "en" ? "USD MODEL" : "USD MODEL",
    calcPropertyArea: lang === "en" ? "Selected Parcel Size" : "Área de Terreno Escogido",
    calcBaseTag: lang === "en" ? "1,000 sqm (Base)" : "1,000 m² (Base)",
    calcPremiumTag: lang === "en" ? "5,000 sqm (Estate)" : "5,000 m² (Señorial)",
    calcCabinsCount: lang === "en" ? "Number of Eco Cabins to Construct" : "Número de Cabañas Eco a Construir",
    calcCabinsUnits: lang === "en" ? "Cabin(s)" : "Cabaña(s)",
    calcNoCabins: lang === "en" ? "Land Only (No cabins)" : "Sin cabaña (Solo Terreno)",
    calcVIPCabins: lang === "en" ? "4 VIP Cabins" : "4 Cabañas VIP",
    calcHorizon: lang === "en" ? "Projected Investment Horizon" : "Plazo de Maduración Proyectado",
    calcYears: lang === "en" ? "Years" : "Años",
    calcHorizon3: lang === "en" ? "3 Years (Medium term)" : "3 Años (Medio plazo)",
    calcHorizon10: lang === "en" ? "10 Years (Legacy)" : "10 Años (Largo Plazo)",
    calcEstTotal: lang === "en" ? "Estimated Total Investment" : "Inversión Total Estimada",
    calcTerrenoCabin: lang === "en" ? "Lot" : "Terreno",
    calcCabinsLabel: lang === "en" ? "Cabins" : "Cabañas",
    calcAnnualRental: lang === "en" ? "Net Annual Rental Earnings" : "Ingreso Neto Anual por Rentas",
    calcRentalOcup: lang === "en" ? "Projected at 58% average occupancy" : "Ocupación estimada del 58%",
    calcAppLabel: lang === "en" ? "Land Appreciation in" : "Plusvalía del Terreno en",
    calcAppSub: lang === "en" ? "+16.5% CAGR historical projection" : "+16.5% promedio anual compuesto",
    calcPortfolioLabel: lang === "en" ? "Portfolio Value + Total Returns" : "Valor de Portafolio + Retorno Total",
    calcROI: lang === "en" ? "Projected Return on Investment of" : "Retorno sobre inversión de ~ ",
    calcDisclaimer: lang === "en"
      ? "*Note: High-level financial projections modeled on premium historical coefficients from Quintana Roo's reserve markets (16.5% annual appreciation rate and $280 ADR average yields). All figures represent non-guaranteed estimates."
      : "*Nota: Los valores presentados constituyen una proyección teórica fundamentada en coeficientes históricos del mercado premium de Quintana Roo (16.5% plusvalía anual y tarifas de renta promedio de $280 ADR). Ningún dato representa garantía de ingresos.",
    calcCta: lang === "en" ? "Confirm Simulation & Reserve Location" : "Confirmar Simulación & Reservar Ubicación",

    // Form Section
    formTag: lang === "en" ? "Form Your Legacy" : "Inicie su Legado",
    formHeading: lang === "en" ? "Begin Your Journey at NATIVA" : "Comience su Viaje en NATIVA",
    formDesc: lang === "en"
      ? "Our wealth advisors are at your service for premium guidance. Please provide your basic credentials to receive immediate access to the ultra-high resolution Master Plan, technical property dossiers, and our initial pre-sale price book."
      : "Nuestros consejeros patrimoniales se encuentran listos para brindarle toda la información pertinente. Registre sus credenciales básicas para recibir de inmediato el Master Plan en alta resolución, la carpeta técnica de desarrollo y la lista confidencial de precios de lista inicial de preventa.",
    formDirectCall: lang === "en" ? "Direct Call Center" : "Contacto Directo",
    formCommunity: lang === "en" ? "Official Community" : "Comunidad Oficial",
    formCertTag: lang === "en" ? "Certified Sustainability Standards" : "Desarrollo Con Certificación",
    formCertDesc: lang === "en" ? "Environmental sustainability certified under local Quintana Roo regulations." : "Sustentabilidad ambiental certificada bajo estándares locales de Quintana Roo.",
    formDossierTitle: lang === "en" ? "Request Executive Portfolio" : "Solicitar dossier comercial",
    formDossierSub: lang === "en" ? "Complete the quick form to receive our brochure and price workbook." : "Complete el formulario y le enviaremos el dossier y catálogo premium.",
    
    labelName: lang === "en" ? "Full Name *" : "Nombre Completo *",
    placeholderName: lang === "en" ? "e.g., Alexander Smith" : "p. ej. Alejandro Martínez",
    labelWhatsapp: lang === "en" ? "WhatsApp / Phone *" : "WhatsApp / Teléfono *",
    placeholderWhatsapp: lang === "en" ? "e.g., +1 212 555 0199" : "+52 998 400 6052",
    labelEmail: lang === "en" ? "Email Address *" : "Correo Electrónico *",
    placeholderEmail: lang === "en" ? "e.g., alex@example.com" : "correo@ejemplo.com",
    
    labelInterest: lang === "en" ? "Area of Greatest Interest" : "Opción de mayor Interés",
    opt1: lang === "en" ? "Eco-Residential Lots (parcels from 1,000 sqm)" : "Terrenos Eco-Residenciales (lotes desde 1,000m²)",
    opt2: lang === "en" ? "Luxury Eco Cabin construction for rental return" : "Construcción de Eco Cabaña para renta vacacional",
    opt3: lang === "en" ? "Comprehensive bundle (Land + High-End Luxury Cabin)" : "Modelos integrales (Terreno + Cabaña de lujo)",
    opt4: lang === "en" ? "Corporate multi-parcel portfolio investment" : "Inversionista Copropiedad",
    
    labelComments: lang === "en" ? "Additional Comments" : "Comentarios adicionales",
    placeholderComments: lang === "en" ? "Mention any specific requirements or timelines..." : "Indique si tiene requerimientos específicos...",
    newsletterConsent: lang === "en" 
      ? "I want to receive monthly confidential appreciation statements and private pre-sale opportunities."
      : "Deseo recibir actualizaciones mensuales confidenciales de plusvalía y ofertas de preventa.",
    formSubmitCta: lang === "en" ? "Request Confidential Dossier" : "Solicitar Información Confidencial",
    formProcessing: lang === "en" ? "Verifying coordinates..." : "Procesando solicitud...",

    formSuccessTitle: lang === "en" ? "Dossier Access Registered!" : "¡Dossier Registrado!",
    formSuccessDescFront: lang === "en" ? "Dear" : "Estimado(a)",
    formSuccessDescBack: lang === "en" ? ", we have successfully verified your WhatsApp connectivity at" : ", hemos verificado su número de WhatsApp Usados en",
    formSuccessDescMail: lang === "en" ? "and email contact information." : "y correo electrónico de contacto.",
    formSuccessInterest: lang === "en" ? "Logged Interest:" : "Interés registrado:",
    formSuccessChannel: lang === "en" ? "Preferred Channel:" : "Canal preferente:",
    formSuccessChannelVal: lang === "en" ? "Direct WhatsApp" : "WhatsApp Directo",
    formSuccessWait: lang === "en" ? "Estimated Response Latency:" : "Tiempo de espera estimado:",
    formSuccessWaitVal: lang === "en" ? "< 15 Minutes" : "< 15 Minutos",
    formSuccessCopy: lang === "en" 
      ? "We have dispatched a high-res introductory PDF brochure to your mailbox. An expert advisor will reach out to you momentarily on WhatsApp."
      : "Le hemos enviado una copia del dossier introductorio en PDF a su correo. Un asesor le escribirá brevemente por WhatsApp.",
    formSuccessReset: lang === "en" ? "Configure another projection" : "Registrar otra cotización",

    // Footer Section
    footDesc: lang === "en"
      ? "NATIVA Eco Jungle Residences is a residential project fully governed by strict conservation guidelines, minimum footprint construction, and sustainable infrastructure."
      : "NATIVA Eco Jungle Residences es un concepto inmobiliario habitacional regido por políticas estrictas de conservación ambiental, baja huella ecológica y sustentabilidad permanente.",
    footNav: lang === "en" ? "Select Navigation" : "Navegación Selecta",
    footOffice: lang === "en" ? "Pre-Sale Sales House" : "Oficina de Preventas",
    footLocation: lang === "en" ? "Quintana Roo, Mexico" : "Quintana Roo, México",
    footPhoneLabel: lang === "en" ? "Phone:" : "Teléfono:",
    footRights: lang === "en" ? "All rights reserved." : "Todos los derechos reservados.",
    footCompliance: lang === "en" ? "Developed in complete compliance with Quintana Roo environmental regulatory laws" : "Desarrollado de conformidad con la Ley Ambiental de Quintana Roo",
    footMotto: lang === "en" ? "Luxury Ecological Living" : "Luxury Ecological Living",
    chatHelper: lang === "en" ? "Expert Advisor" : "Asesor Directo"
  };
};
