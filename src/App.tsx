import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Compass, 
  MapPin, 
  Trees, 
  Sparkles, 
  TrendingUp, 
  Flame, 
  Phone, 
  Mail, 
  Instagram, 
  Facebook, 
  CheckCircle, 
  ArrowRight, 
  ChevronRight, 
  Maximize2, 
  Layout, 
  Home, 
  DollarSign, 
  Activity, 
  Map, 
  Sunset,
  Menu,
  X,
  Plus,
  Clock
} from "lucide-react";
import { getTranslations, getAmenitiesList, Amenity } from "./translations";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  origin: string;
}

const heroSlides = [
  "https://i.imgur.com/fZjr6S2.jpeg",
  "https://i.imgur.com/mFx4cQc.jpeg",
  "https://i.imgur.com/G7KVVfg.jpeg"
];

export default function App() {
  // Language switcher: default is English ('en'), secondary is Spanish ('es')
  const [language, setLanguage] = useState<"en" | "es">("en");
  const t = getTranslations(language);
  const amenitiesList = getAmenitiesList(language);

  // Navigation active state
  const [activeSection, setActiveSection] = useState("inicio");
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Modal active states
  const [selectedAmenity, setSelectedAmenity] = useState<Amenity | null>(null);
  const [investmentType, setInvestmentType] = useState<"terreno" | "cabana">("terreno");
  const [preSaleModalOpen, setPreSaleModalOpen] = useState(false);
  const [mapLightboxOpen, setMapLightboxOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);

  // Form states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    investmentInterest: "Terrenos Premium",
    comments: "",
    newsletter: true
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formLoading, setFormLoading] = useState(false);

  // Scroll detection for Navbar morphing
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setNavScrolled(true);
      } else {
        setNavScrolled(false);
      }

      // Check current section
      const sections = ["inicio", "concepto", "masterplan", "amenidades", "inversion", "contacto"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Automated background slider looping
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Handle lead submission
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.whatsapp) return;

    setFormLoading(true);

    const subjectText = language === "en" 
      ? "New NATIVA Eco Jungle Residences Inquiry" 
      : "Nueva Consulta de NATIVA Eco Jungle Residences";
    
    const bodyText = language === "en"
      ? `New Lead Registration details:\n\n` +
        `Name: ${formData.name}\n` +
        `WhatsApp/Phone: ${formData.whatsapp}\n` +
        `Email: ${formData.email}\n` +
        `Investment Interest: ${formData.investmentInterest}\n` +
        `Comments: ${formData.comments || "None"}\n`
      : `Detalles de Registro de Nuevo Prospecto:\n\n` +
        `Nombre Completo: ${formData.name}\n` +
        `WhatsApp/Teléfono: ${formData.whatsapp}\n` +
        `Email: ${formData.email}\n` +
        `Interes de Inversion: ${formData.investmentInterest}\n` +
        `Comentarios: ${formData.comments || "Ninguno"}\n`;

    const mailtoUrl = `mailto:ventas@nativaresidences.com?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;

    // Simulate API registration call first, and then open the user's default email client pre-filled
    setTimeout(() => {
      setFormLoading(false);
      setFormSubmitted(true);
      window.location.href = mailtoUrl;
    }, 1500);
  };

  // Handled dynamically via translations module

  return (
    <div className="bg-bone text-offblack font-sans leading-relaxed selection:bg-gold selection:text-forest min-h-screen relative flex flex-col">
      
      {/* HEADER NAVBAR */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 ${
          navScrolled 
            ? "bg-forest/95 backdrop-blur-md shadow-lg border-b border-white/5 py-3 text-white" 
            : "bg-gradient-to-b from-black/60 to-transparent text-white"
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo Brand with Flags stacked underneath */}
          <div className="flex flex-col items-start">
            <a href="#inicio" className="flex items-center gap-3 group focus:outline-none" id="brand-logo-link">
              <img 
                src="https://i.imgur.com/y3regni.png" 
                alt="Nativa Logo" 
                className="h-10 w-auto object-contain transition-all duration-500 group-hover:scale-110"
                id="brand-logo-img"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif font-semibold tracking-[0.2em] text-lg text-white group-hover:text-gold transition-colors">
                NATIVA
              </span>
            </a>
            {/* Language Selection Flags directly below the logo */}
            <div className="flex items-center gap-2 mt-1.5 pl-0.5">
              <button 
                onClick={() => setLanguage("en")} 
                className={`transition-all hover:scale-110 cursor-pointer focus:outline-none flex items-center justify-center p-0.5 rounded-sm overflow-hidden border ${
                  language === "en" 
                    ? "border-gold opacity-100 bg-gold/10 scale-105 shadow-md" 
                    : "border-transparent opacity-45 hover:opacity-85"
                }`}
                title="English (Primary)"
              >
                <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-5.5 h-3.5 object-cover rounded-[1px]" />
              </button>
              <button 
                onClick={() => setLanguage("es")} 
                className={`transition-all hover:scale-110 cursor-pointer focus:outline-none flex items-center justify-center p-0.5 rounded-sm overflow-hidden border ${
                  language === "es" 
                    ? "border-gold opacity-100 bg-gold/10 scale-105 shadow-md" 
                    : "border-transparent opacity-45 hover:opacity-85"
                }`}
                title="Español (Secundario)"
              >
                <img src="https://flagcdn.com/w40/mx.png" alt="Mexico Flag" className="w-5.5 h-3.5 object-cover rounded-[1px]" />
              </button>
            </div>
          </div>

          {/* Desktop Navigation Linkages */}
          <nav className="hidden lg:flex items-center gap-10 font-sans text-xs uppercase tracking-[0.18em] font-medium">
            <a href="#concepto" className={`hover:text-gold transition-colors relative py-2 ${activeSection === "concepto" ? "text-gold" : "text-white/80"}`}>
              {t.navConcepto}
              {activeSection === "concepto" && <motion.span layoutId="activeDot" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />}
            </a>
            <a href="#masterplan" className={`hover:text-gold transition-colors relative py-2 ${activeSection === "masterplan" ? "text-gold" : "text-white/80"}`}>
              {t.navMasterplan}
              {activeSection === "masterplan" && <motion.span layoutId="activeDot" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />}
            </a>
            <a href="#amenidades" className={`hover:text-gold transition-colors relative py-2 ${activeSection === "amenidades" ? "text-gold" : "text-white/80"}`}>
              {t.navAmenidades}
              {activeSection === "amenidades" && <motion.span layoutId="activeDot" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />}
            </a>
            <a href="#inversion" className={`hover:text-gold transition-colors relative py-2 ${activeSection === "inversion" ? "text-gold" : "text-white/80"}`}>
              {t.navInversion}
              {activeSection === "inversion" && <motion.span layoutId="activeDot" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />}
            </a>
            <a href="#contacto" className={`hover:text-gold transition-colors relative py-2 ${activeSection === "contacto" ? "text-gold" : "text-white/80"}`}>
              {t.navContacto}
              {activeSection === "contacto" && <motion.span layoutId="activeDot" className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gold rounded-full" />}
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#contacto" 
              className="bg-gold text-forest hover:bg-white hover:text-forest transition-all px-6 py-2.5 rounded-none font-sans uppercase tracking-[0.18em] text-[11px] font-bold border border-gold hover:border-white focus:outline-none"
            >
              {t.navInvertir}
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="lg:hidden text-white/90 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-forest pt-24 px-8 pb-12 flex flex-col justify-between"
          >
            <nav className="flex flex-col gap-6 text-xl font-serif text-white/95 mt-6">
              <a 
                href="#concepto" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span>{t.navSantuarioConcepto}</span>
                <ChevronRight className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#masterplan" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span>{t.navMasterPlanLotes}</span>
                <ChevronRight className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#amenidades" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span>{t.navAmenidadesExclusivas}</span>
                <ChevronRight className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#inversion" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span>{t.navModeloPlusvalia}</span>
                <ChevronRight className="w-5 h-5 text-gold" />
              </a>
              <a 
                href="#contacto" 
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-gold transition-colors flex items-center justify-between border-b border-white/5 pb-4"
              >
                <span>{t.navRegistrarInteres}</span>
                <ChevronRight className="w-5 h-5 text-gold" />
              </a>
            </nav>

            <div className="flex flex-col gap-4">
              <a 
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full bg-gold text-forest py-4 rounded-sm font-sans text-center uppercase tracking-widest text-xs font-bold shadow-lg"
              >
                {t.navDiscover}
              </a>
              <div className="text-center text-[11px] text-white/55 tracking-wider font-sans mt-4">
                {t.navPresaleExclusive}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. HERO SECTION */}
      <section 
        id="inicio"
        className="relative h-screen min-h-[660px] flex items-center justify-center overflow-hidden bg-forest"
      >
        {/* Ambient background slider */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <AnimatePresence mode="popLayout">
            <motion.img 
              key={currentSlide}
              src={heroSlides[currentSlide]} 
              alt="Nativa Eco-Reserves" 
              className="absolute inset-0 w-full h-full object-cover object-center" 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
          {/* Subtle slow drift overlay to make the jungle feel alive */}
          <div className="absolute inset-0 bg-gradient-to-t from-forest via-forest/20 to-black/50 z-10" />
        </div>

        {/* Hero content card */}
        <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 class-id-hero flex flex-col justify-end h-full pb-16 md:pb-24">
          <div className="max-w-4xl animate-slide-up">
            
            {/* Elegant luxury eye-brow */}
            <div className="flex items-center gap-3 text-gold text-xs uppercase tracking-[0.25em] font-semibold mb-6">
              <span className="w-8 h-[1px] bg-gold" />
              <span>{t.heroPreSaleHeader}</span>
            </div>

            {/* Main title */}
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.05]">
              NATIVA
              <span className="block font-sans text-lg md:text-2xl font-light tracking-[0.3em] text-sand uppercase mt-3">
                Eco Jungle Residences
              </span>
            </h1>

            {/* Slogan */}
            <p className="font-sans text-sm md:text-lg lg:text-xl text-white/90 max-w-2xl font-light leading-relaxed mb-10 tracking-wide">
              {t.heroSlogan}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a 
                href="#contacto" 
                className="bg-gold text-forest hover:bg-white hover:text-forest transition-all text-center px-10 py-4.5 rounded-none font-sans uppercase tracking-[0.2em] text-xs font-bold border border-gold hover:border-white"
              >
                {t.navInvertir}
              </a>
              <a 
                href="#concepto" 
                className="border border-white/30 backdrop-blur-sm text-white hover:bg-white hover:text-forest transition-all text-center px-10 py-4.5 rounded-none font-sans uppercase tracking-[0.2em] text-xs font-semibold"
              >
                {t.heroCtaExplore}
              </a>
            </div>
          </div>

          {/* Quick Metrics ticker */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-white/10 pt-10 mt-16 text-white/90 font-sans items-center">
            <div className="md:col-span-3 grid grid-cols-3 gap-6">
              <div>
                <span className="font-serif text-3xl md:text-4xl text-gold block font-semibold">180 Ha</span>
                <span className="text-[11px] uppercase tracking-wider text-sand/80">{t.heroMetricJungle}</span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-gold block font-semibold">950</span>
                <span className="text-[11px] uppercase tracking-wider text-sand/80">{t.heroMetricLots}</span>
              </div>
              <div>
                <span className="font-serif text-3xl md:text-4xl text-gold block font-semibold">25+</span>
                <span className="text-[11px] uppercase tracking-wider text-sand/80">{t.heroMetricAmenities}</span>
              </div>
            </div>
            
            {/* Branded Investment Stats Badge */}
            <div className="md:col-span-1 bg-black/40 hover:bg-black/55 transition-all duration-300 p-4 border border-white/10 flex flex-col gap-3 rounded-none premium-box" id="branded-stats-badge">
              <div className="flex items-center gap-3 border-b border-white/10 pb-2">
                <img 
                  src="https://i.imgur.com/y3regni.png" 
                  alt="Nativa Logo" 
                  className="h-10 w-auto object-contain flex-shrink-0"
                  id="badge-logo-img"
                  referrerPolicy="no-referrer"
                />
                <div className="w-[1.5px] h-6 bg-white/20" />
                <div>
                  <span className="font-serif text-2xl md:text-3xl text-gold font-bold block leading-none">+16.5%</span>
                  <span className="text-[9px] uppercase tracking-wider text-sand/60 block leading-none mt-1">{t.heroHeaderAppreciation}</span>
                </div>
              </div>
              <div className="text-left text-[11px] tracking-wide leading-relaxed text-white/90 font-light font-sans">
                <p className="font-medium text-gold mb-0.5">{t.heroPreSaleHeader}</p>
                <p className="text-white/80">{t.heroPreSaleSub}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CONCEPTO & UBICACIÓN STORY */}
      <section id="concepto" className="py-24 md:py-32 bg-bone relative overflow-hidden">
        {/* Decorative foliage shadows ambient graphics placeholder / design touch */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sand/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Elegant Copy section */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="flex items-center gap-3 text-clay text-xs uppercase tracking-widest font-semibold mb-3">
                <span>{t.conceptTag}</span>
              </div>
              
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl tracking-tight text-forest mb-8 font-medium">
                {language === "en" ? <>Sanctuary of <br /><span className="italic text-clay font-normal">Eco Luxury</span></> : <>Santuario de <br /><span className="italic text-clay font-normal">Lujo Ecológico</span></>}
              </h2>

              <p className="font-sans text-sm md:text-base text-offblack/75 mb-6 font-light leading-relaxed">
                {t.conceptDesc1}
              </p>

              <p className="font-sans text-sm md:text-base text-offblack/74 mb-10 font-normal leading-relaxed border-l-2 border-clay pl-6 italic">
                {t.conceptQuote}
              </p>

              {/* Location markers */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-forest/5 p-3 rounded-full text-forest mt-0.5">
                    <MapPin className="w-5 h-5 text-clay" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-forest font-medium">{t.conceptLocTitle}</h4>
                    <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                      {t.conceptLocDesc}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-forest/5 p-3 rounded-full text-forest mt-0.5">
                    <Compass className="w-5 h-5 text-clay" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-forest font-medium">{t.conceptConnTitle}</h4>
                    <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                      {t.conceptConnDesc}
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* Immersive Image Display */}
            <div className="lg:col-span-7 relative">
              <div className="grid grid-cols-12 gap-4">
                
                {/* Large offset picture of the cabin */}
                <div className="col-span-8 relative rounded-none overflow-hidden border border-forest/10 group">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcHCGQPPDrwvFjQEdK2xjo-a5emhhFNo1IGNccyZQZr1dvDQk9lUZ_PDnvNFAxuVjm_IQ0nQWPsl-W8VX4SZOc3YMh5_-nsufy_Xdg53O6wOLfgxjZJgat_Zce6PoI20VnoSQ_qzL71WBsTQVra__mNKa9qCmggURsye_eYMadv8EIMcrdIFiO4j4VGxymN4YzAzAg4mD8KGpVohhvTovpg5PyfRZtSEqbKO4IGVlsxBbk0Z8SibXZCbXHrSfeE0z7TyQRCeCzJm3X" 
                    alt="Luxury Eco Cabin inside tropical rainforest at Nativa" 
                    className="w-full aspect-[0.75] object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/40 via-transparent to-transparent" />
                  {/* Subtle luxury brand identifier card floating inside image */}
                  <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-5 rounded-none shadow-sm flex items-center justify-between border border-forest/10">
                    <div>
                      <span className="text-[10px] text-clay font-bold uppercase tracking-widest block mb-0.5">{t.conceptExperience}</span>
                      <span className="font-serif text-sm font-semibold text-forest">{t.conceptCabinLiving}</span>
                    </div>
                    <span className="text-gold text-lg font-serif">NATIVA</span>
                  </div>
                </div>

                {/* Small offset grid with forest ceiling lookup */}
                <div className="col-span-4 flex flex-col justify-end gap-4 h-full pb-8">
                  <div className="rounded-none overflow-hidden border border-forest/10 group">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGqw67L5wkEuBVbiNZ23L3yMpAfBkSh0yD7fDAeY9sbkCLoQJdA2iIdSMyKBx3PL5HPp_K5KUETGZ7dqJ4OKtT804MgI8YrRI0U5MmW2K90aaytU2LdE_X8KYAB4oRQ9ILhOoFBvAK9UvqWlft5oDZwwnEPaehxcovH_-4UwmSHvDch2Hl7EhUDM6_k9XkQe6Bh0dGTo1-Z0BVVmo5OsuoqgBYLjFHRrJgetS7D7Fizhmvu6ZW1A2tEyThFjbv3U-I1hLluyZUhKtB" 
                      alt="Ceiling canopy sun shafts" 
                      className="w-full aspect-[0.8] object-cover transition-transform duration-[1200ms] group-hover:scale-105" 
                    />
                  </div>
                  <div className="bg-forest p-6 rounded-none text-white border border-gold/10 flex flex-col justify-between">
                    <div>
                      <span className="text-[9px] text-gold uppercase tracking-[0.2em] font-medium block mb-2">{t.conceptPreservation}</span>
                      <span className="font-serif text-sm block leading-snug">{t.conceptRegenerative}</span>
                    </div>
                    <Trees className="w-6 h-6 text-gold mt-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MASTER PLAN & TERRENOS EXCLUSIVOS */}
      <section id="masterplan" className="py-24 md:py-32 bg-[#FCFBF7] border-t border-b border-forest/10">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          
          {/* Official Presentation Video Component with Sound */}
          <div className="max-w-4xl mx-auto mb-16 md:mb-20 bg-forest p-1 rounded-none border border-gold/20 shadow-xl animate-fade-in" id="official-presentation-video-container">
            <div className="border border-gold/10 p-3 md:p-6 flex flex-col gap-4 text-white">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 pb-3 border-b border-white/10">
                <div>
                  <span className="text-[10px] text-gold uppercase tracking-[0.25em] font-bold block mb-1">
                    {language === "en" ? "Official Presentation Video" : "Video Presentación Oficial"}
                  </span>
                  <h3 className="font-serif text-lg md:text-xl font-medium tracking-wide text-white">
                    {language === "en" ? "Experience NATIVA Jungle Wellness" : "Experimente NATIVA Bienestar en la Selva"}
                  </h3>
                </div>
                <div className="flex items-center gap-2 bg-black/30 border border-white/15 px-3 py-1 text-[10px] font-mono tracking-widest text-gold uppercase rounded-none">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span>{language === "en" ? "Audio Enabled" : "Audio con Sonido"}</span>
                </div>
              </div>

              <div className="relative aspect-video bg-black/40 overflow-hidden border border-white/5">
                {language === "en" ? (
                  <iframe
                    src="https://www.youtube.com/embed/BSjIZ_FIx2Y?si=pFWBaUXZrRZMXmsq"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0 border-0"
                  />
                ) : (
                  <iframe
                    src="https://www.youtube.com/embed/JLo-tqGsHn4?si=MGWywfFaCTIy3EfX"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-full absolute top-0 left-0 border-0"
                  />
                )}
              </div>

              <div className="flex justify-between items-center text-[11px] text-sand/70 font-sans font-light mt-1">
                <p>
                  {language === "en" 
                    ? "Full HD drone journey and land reserve overview of El Agapito." 
                    : "Video en alta definición con recorrido de dron y reserva del Polígono El Agapito."}
                </p>
                <span className="font-mono text-gold text-xs">HD 1080P</span>
              </div>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
            <span className="text-clay text-xs uppercase tracking-[0.25em] font-bold block mb-4">{t.mpTag}</span>
            <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-forest mb-6">
              {t.mpTitle}
            </h2>
            <div className="w-16 h-[1px] bg-clay mx-auto mb-6" />
            <p className="font-sans text-sm md:text-base text-offblack/70 leading-relaxed font-light">
              {t.mpDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mt-12">
            
            {/* Interactive Switchers & Core Details */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              <div className="space-y-6">
                
                {/* Switcher Tab header */}
                <div className="flex bg-[#F8F7F2] p-1 rounded-none border border-forest/10">
                  <button 
                    onClick={() => setInvestmentType("terreno")}
                    className={`flex-1 text-center py-3 font-sans uppercase text-xs tracking-widest font-bold transition-all cursor-pointer ${
                      investmentType === "terreno" 
                        ? "bg-forest text-gold rounded-none" 
                        : "text-offblack/60 hover:text-offblack"
                    }`}
                  >
                    {t.mpTabLots}
                  </button>
                  <button 
                    onClick={() => setInvestmentType("cabana")}
                    className={`flex-1 text-center py-3 font-sans uppercase text-xs tracking-widest font-bold transition-all cursor-pointer ${
                      investmentType === "cabana" 
                        ? "bg-forest text-gold rounded-none" 
                        : "text-offblack/60 hover:text-offblack"
                    }`}
                  >
                    {t.mpTabCabins}
                  </button>
                </div>

                <AnimatePresence mode="wait">
                  {investmentType === "terreno" ? (
                    <motion.div 
                      key="terreno-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="bg-white p-8 rounded-none border border-forest/10 shadow-sm">
                        <span className="text-[10px] text-clay uppercase tracking-[0.2em] font-bold block mb-2">{t.mpLotsTag}</span>
                        <h3 className="font-serif text-2xl text-forest font-semibold mb-4">{t.mpLotsTitle}</h3>
                        <p className="font-sans text-xs text-offblack/70 leading-relaxed mb-6 font-light">
                          {t.mpLotsDesc}
                        </p>
                        
                        <div className="space-y-3 pt-4 border-t border-forest/10 text-xs font-sans">
                           <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpLotsDim}</span>
                            <strong className="text-forest font-semibold">{t.mpLotsDimVal}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpLotsClear}</span>
                            <strong className="text-forest font-semibold">{t.mpLotsClearVal}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpLotsStatus}</span>
                            <strong className="text-forest font-semibold">{t.mpLotsStatusVal}</strong>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="cabana-tab"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-6"
                    >
                      <div className="bg-white p-8 rounded-none border border-forest/10 shadow-sm">
                        <span className="text-[10px] text-clay uppercase tracking-[0.2em] font-bold block mb-2">{t.mpCabTag}</span>
                        <h3 className="font-serif text-2xl text-forest font-semibold mb-4">{t.mpCabTitle}</h3>
                        <p className="font-sans text-xs text-offblack/70 leading-relaxed mb-6 font-light">
                          {t.mpCabDesc}
                        </p>
                        
                        <div className="space-y-3 pt-4 border-t border-forest/10 text-xs font-sans">
                          <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpCabArea}</span>
                            <strong className="text-forest font-semibold">{t.mpCabAreaVal}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpCabBeds}</span>
                            <strong className="text-forest font-semibold">{t.mpCabBedsVal}</strong>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-offblack/60 font-light">{t.mpCabMaint}</span>
                            <strong className="text-forest font-semibold">{t.mpCabMaintVal}</strong>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Informative Highlights */}
              <div className="bg-forest p-8 rounded-none text-white space-y-4 border border-gold/20">
                <div className="flex items-center gap-2 text-gold">
                  <Sparkles className="w-5 h-5" />
                  <span className="text-[10px] uppercase font-bold tracking-widest">{t.mpPurposeTag}</span>
                </div>
                <h4 className="font-serif text-lg text-white font-medium">{t.mpDensityTitle}</h4>
                <p className="font-sans text-[11px] text-white/70 leading-relaxed font-light">
                  {t.mpDensityDesc}
                </p>
              </div>

            </div>

            {/* Immersive interactive layout blueprints map with lightbox capability */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              
              {/* Primary Master Plan Card */}
              <div className="relative bg-white p-5 rounded-none border border-forest/10 group flex flex-col justify-between shadow-sm">
                
                {/* Title */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="font-serif text-sm text-forest font-semibold tracking-wider text-xs">{t.mpGeneralPlan}</span>
                  <div className="flex items-center gap-2 text-xs font-sans text-clay">
                    <span className="w-2.5 h-2.5 rounded-full bg-gold animate-pulse" />
                    <span>{t.mpPreSaleAvailable}</span>
                  </div>
                </div>

                {/* Plan map container */}
                <div className="relative overflow-hidden bg-[#e9e7e2]/50 aspect-video rounded-none border border-forest/10 flex items-center justify-center">
                  <img 
                    src="https://i.imgur.com/B0Iuzwc.jpeg" 
                    alt="Plano general de terrenos Nativa en cancun" 
                    className="max-w-full max-h-full object-contain filter saturate-75 contrast-105" 
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle water-drop pinpoint overlay highlighting CENOTES or clubhouse on the blueprint image */}
                  <div className="absolute top-[35%] left-[26%] -translate-x-1/2 -translate-y-1/2 group">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-gold/30 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold border border-white" />
                    <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-forest text-white text-[10px] p-2 rounded-sm shadow-md tracking-wider uppercase font-semibold text-center leading-none">
                      {t.mpPoolCenote}
                    </div>
                  </div>

                  <div className="absolute top-[60%] left-[50%] -translate-x-1/2 -translate-y-1/2 group">
                    <span className="absolute inline-flex h-6 w-6 rounded-full bg-gold/30 animate-ping" />
                    <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gold border border-white" />
                    <div className="absolute hidden group-hover:block bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 bg-forest text-white text-[10px] p-2 rounded-sm shadow-md tracking-wider uppercase font-semibold text-center leading-none">
                      {t.mpEcoLotsPremium}
                    </div>
                  </div>
                </div>

                {/* Footnote */}
                <div className="mt-4 px-2 flex justify-between items-center text-[11px] font-sans text-offblack/60 pt-2 border-t border-forest/10">
                  <span>{t.mpIllustrativeNote}</span>
                  <a href="#contacto" className="text-clay hover:text-forest transition-all flex items-center gap-1 font-semibold">
                    <span>{t.mpDownloadPdf}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

              {/* Location Satellite Map Card */}
              <div className="relative bg-white p-5 rounded-none border border-forest/10 group flex flex-col justify-between shadow-sm">
                
                {/* Title */}
                <div className="flex justify-between items-center mb-4 px-2">
                  <span className="font-serif text-sm text-forest font-semibold tracking-wider text-xs">{t.mpSatTitle}</span>
                  <div className="flex items-center gap-2 text-xs font-sans text-clay">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{t.mpStrategicLocation}</span>
                  </div>
                </div>

                {/* Satellite map container with clean interactive visual trigger */}
                <div 
                  onClick={() => {
                    setZoomScale(1);
                    setMapLightboxOpen(true);
                  }}
                  className="relative overflow-hidden bg-forest/5 aspect-video rounded-none border border-forest/15 cursor-pointer group"
                >
                  {/* Exact requested high-res map image */}
                  <img 
                    src="https://i.imgur.com/C320mbH.jpeg" 
                    alt="Ubicación satelital oficial y polígono de reserva Nativa (Agapito)" 
                    className="w-full h-full object-cover filter contrast-[1.02] saturate-[1.02] group-hover:scale-105 transition-transform duration-700 ease-out" 
                    referrerPolicy="no-referrer"
                  />

                  {/* Elegant floating caption indicator */}
                  <div className="absolute top-3 right-3 text-white/90 bg-forest/90 backdrop-blur-sm px-2.5 py-1.5 border border-white/15 text-[10px] font-mono tracking-widest uppercase flex items-center gap-1.5 shadow-lg">
                    <Compass className="w-3.5 h-3.5 animate-spin-slow text-gold" />
                    <span>NATIVA MAP</span>
                  </div>

                  {/* Hover Overlay featuring expand invite */}
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/90 via-forest/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <div className="flex items-center gap-2.5 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <div className="bg-gold text-forest p-2 rounded-full shadow-lg">
                        <Maximize2 className="w-4.5 h-4.5" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.15em] font-bold text-gold">{t.mpExpandMap}</p>
                        <p className="text-[10px] text-white/85 font-light">{t.mpExpandSub}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footnote */}
                <div className="mt-4 px-2 flex justify-between items-center text-[11px] font-sans text-offblack/60 pt-2 border-t border-forest/10 font-light">
                  <span>{t.mpSatCaption}</span>
                  <a href="#contacto" className="text-clay hover:text-forest transition-all flex items-center gap-1 font-semibold">
                    <span>{t.mpAccessCoords}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. AMENIDADES DE LUJO (GRID & DETAILS CAPABILITY) */}
      <section id="amenidades" className="py-24 md:py-32 bg-forest text-white relative">
        <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-[#0b130e]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          
          <div className="max-w-4xl mb-16 md:mb-24">
            <span className="text-gold text-xs uppercase tracking-[0.25em] font-bold block mb-4">{t.amenTag}</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-6 font-medium">
              {language === "en" ? <>Amenities Crafted for Your <br /><span className="text-gold italic font-normal">Tranquility and Harmony with the Environment</span></> : <>Amenidades Creadas Para Su <br /><span className="text-gold italic font-normal">Tranquilidad y Armonía del Entorno</span></>}
            </h2>
            <p className="font-sans text-sm md:text-base text-white/70 max-w-2xl font-light leading-relaxed">
              {t.amenDesc}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 auto-rows-[280px]">
            {amenitiesList.map((amenity, index) => {
              // Custom layout logic to make the grid look dynamic and elegant (bento format)
              let colSpan = "lg:col-span-4";
              if (index === 0) colSpan = "lg:col-span-8"; // Clubhouse wide
              if (index === 1) colSpan = "lg:col-span-4"; // Pool standard
              if (index === 2) colSpan = "lg:col-span-4"; // Yoga standard
              if (index === 3) colSpan = "lg:col-span-8"; // Private Cenotes wide

              return (
                <motion.div 
                  key={amenity.id}
                  className={`${colSpan} bg-white/5 backdrop-blur-sm rounded-none overflow-hidden relative group cursor-pointer border border-white/10 flex flex-col justify-end p-6 hover:border-gold/60 transition-all duration-500`}
                  onClick={() => setSelectedAmenity(amenity)}
                  whileHover={{ y: -5 }}
                >
                  {/* Aspect background image */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={amenity.image} 
                      alt={amenity.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1500ms] opacity-50 group-hover:opacity-75"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>

                  {/* Amenity title and indicator */}
                  <div className="relative z-10">
                    <span className="text-[9px] text-gold uppercase tracking-widest font-bold block mb-1">
                      {amenity.category}
                    </span>
                    <div className="flex justify-between items-center">
                      <h3 className="font-serif text-xl text-white font-medium tracking-tight">
                        {amenity.name}
                      </h3>
                      <div className="w-8 h-8 rounded-none bg-white/10 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-forest transition-all">
                        <Plus className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Sencilla lista enlazada para las amenidades menores no listadas en el Grid principal */}
          <div className="mt-16 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-white/80 font-sans text-xs uppercase tracking-widest text-center">
            <div className="p-4 bg-white/5 rounded-none border border-white/10 hover:border-gold/30 transition-all">
              {t.amenMinorCampfire}
            </div>
            <div className="p-4 bg-white/5 rounded-none border border-white/10 hover:border-gold/30 transition-all">
              {t.amenMinorTennis}
            </div>
            <div className="p-4 bg-white/5 rounded-none border border-white/10 hover:border-gold/30 transition-all">
              {t.amenMinorSports}
            </div>
            <div className="p-4 bg-white/5 rounded-none border border-white/10 hover:border-gold/30 transition-all">
              {t.amenMinorGolf}
            </div>
            <div className="p-4 bg-white/5 rounded-none border border-white/10 hover:border-gold/30 transition-all">
              {t.amenMinorSim}
            </div>
          </div>

        </div>

        {/* Amenity Detail Immersive Modal */}
        <AnimatePresence>
          {selectedAmenity && (
            <motion.div 
              className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-forest/90 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                className="bg-white text-offblack rounded-sm max-w-2xl w-full overflow-hidden shadow-2xl relative border border-sand"
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
              >
                <button 
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 z-10 bg-forest text-white p-2 rounded-full hover:bg-gold transition-colors"
                  aria-label="Cerrar modal"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="relative aspect-video">
                  <img 
                    src={selectedAmenity.image} 
                    alt={selectedAmenity.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] text-gold uppercase tracking-[0.2em] font-medium block mb-1">
                      {selectedAmenity.category}
                    </span>
                    <h3 className="font-serif text-3xl font-semibold tracking-tight">
                      {selectedAmenity.name}
                    </h3>
                  </div>
                </div>

                <div className="p-8">
                  <p className="font-sans text-sm text-offblack/75 leading-relaxed font-light mb-8 max-h-[160px] overflow-y-auto">
                    {selectedAmenity.description}
                  </p>

                  <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="text-xs text-clay font-sans tracking-widest uppercase font-semibold">
                      {t.amenModalSubtitle}
                    </div>
                    <button 
                      onClick={() => {
                        setSelectedAmenity(null);
                        window.location.hash = "#contacto";
                      }}
                      className="bg-forest text-white hover:bg-gold hover:text-forest transition-all px-6 py-2.5 rounded-sm font-sans uppercase tracking-widest text-[11px] font-bold"
                    >
                      {t.amenModalButton}
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Satellite Map High-Resolution Lightbox */}
        <AnimatePresence>
          {mapLightboxOpen && (
            <motion.div 
              className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 bg-black/95 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Header */}
              <div className="w-full max-w-6xl flex justify-between items-center mb-4 px-4 text-white">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-semibold tracking-wide text-gold">{t.mapLightboxTitle}</h3>
                  <p className="font-sans text-xs text-neutral-400">{t.mapLightboxSub}</p>
                </div>
                <button 
                   onClick={() => setMapLightboxOpen(false)}
                  className="bg-white/10 hover:bg-gold hover:text-forest text-white p-3 rounded-full transition-all border border-white/10 flex items-center justify-center shadow-lg cursor-pointer animate-none"
                  title="Cerrar plano"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Main Map View Area with custom scrolling and interactive zoom */}
              <div className="w-full max-w-6xl bg-neutral-900 border border-white/10 overflow-hidden flex items-center justify-center relative p-4 rounded-none aspect-video">
                <div className="w-full h-full overflow-auto custom-scrollbar flex items-start justify-center">
                  <div className="relative inline-block transition-transform duration-200" style={{ transform: `scale(${zoomScale})`, transformOrigin: "0 0" }}>
                    <img 
                      src="https://i.imgur.com/C320mbH.jpeg" 
                      alt="Plano satelital y de colindancias Nativa" 
                      className="max-w-none h-auto"
                      style={{ width: "100%", maxHeight: "80vh" }}
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Floating controls */}
                <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/85 backdrop-blur-md border border-white/10 p-2 rounded-none text-white shadow-2xl z-10 font-sans text-xs select-none">
                  <button 
                    onClick={() => setZoomScale(prev => Math.max(1, prev - 0.25))}
                    className="p-2 hover:bg-white/10 transition-colors cursor-pointer w-8 h-8 flex items-center justify-center font-bold"
                    title="Reducir Zoom"
                  >
                    -
                  </button>
                  <span className="px-2 font-mono tabular-nums font-semibold tracking-wider">
                    {Math.round(zoomScale * 100)}%
                  </span>
                  <button 
                    onClick={() => setZoomScale(prev => Math.min(3, prev + 0.25))}
                    className="p-2 hover:bg-white/10 transition-colors cursor-pointer w-8 h-8 flex items-center justify-center font-bold"
                    title="Aumentar Zoom"
                  >
                    +
                  </button>
                  <div className="w-[1px] h-4 bg-white/20 mx-1" />
                  <button 
                    onClick={() => setZoomScale(1)}
                    className="px-3 py-1 bg-white/10 hover:bg-white/20 text-[10px] uppercase font-bold tracking-wider transition-colors cursor-pointer"
                  >
                    {language === "en" ? "Reset (100%)" : "Restablecer (100%)"}
                  </button>
                </div>

                {/* Floating Legend Helper */}
                <div className="absolute bottom-4 left-4 hidden md:flex flex-col gap-1 text-[10px] bg-black/85 backdrop-blur-md border border-white/10 p-3 rounded-none text-white shadow-2xl z-10 font-sans select-none max-w-xs">
                  <p className="font-semibold text-gold border-b border-white/10 pb-1 mb-1 uppercase tracking-wider text-[9px]">{t.mapLightboxNavTitle}</p>
                  <p className="text-white/80">{t.mapLightboxNav1}</p>
                  <p className="text-white/80">{t.mapLightboxNav2}</p>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-neutral-400 max-w-2xl px-4">
                <p>{t.mapLightboxFooter}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* 5. VISIÓN DE INVERSIÓN */}
      <section id="inversion" className="py-24 md:py-32 bg-bone relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6">
          
          {/* Description & Business model */}
          <div className="text-left">
            <span className="text-clay text-xs uppercase tracking-[0.25em] font-bold block mb-4">{t.invTag}</span>
            <h2 className="font-serif text-3xl md:text-5xl lg:text-5xl tracking-tight text-forest mb-8 leading-[1.1]">
              {language === "en" ? <>Opportunity for <br /><span className="italic text-clay font-normal">Smart Legacy</span></> : <>Oportunidad para <br /><span className="italic text-clay font-normal">Patrimonio Inteligente</span></>}
            </h2>

            <p className="font-sans text-sm md:text-base text-offblack/70 mb-10 font-light leading-relaxed">
              {t.invDesc}
            </p>

            {/* Pillars list */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#F8F7F2] p-2 rounded-none text-forest font-bold font-serif text-sm border border-forest/5">01</div>
                <div>
                  <h4 className="font-serif text-lg text-forest font-semibold">{t.p1Title}</h4>
                  <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                    {t.p1Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F8F7F2] p-2 rounded-none text-forest font-bold font-serif text-sm border border-forest/5">02</div>
                <div>
                  <h4 className="font-serif text-lg text-forest font-semibold">{t.p2Title}</h4>
                  <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                    {t.p2Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F8F7F2] p-2 rounded-none text-forest font-bold font-serif text-sm border border-forest/5">03</div>
                <div>
                  <h4 className="font-serif text-lg text-forest font-semibold">{t.p3Title}</h4>
                  <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                    {t.p3Desc}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#F8F7F2] p-2 rounded-none text-forest font-bold font-serif text-sm border border-forest/5">04</div>
                <div>
                  <h4 className="font-serif text-lg text-forest font-semibold">{t.p4Title}</h4>
                  <p className="font-sans text-xs text-offblack/60 mt-1 leading-relaxed">
                    {t.p4Desc}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. FORMULARIO DE CONTACTO PREMIUM */}
      <section id="contacto" className="py-24 md:py-32 bg-forest text-white relative">
        {/* Subtle graphic canopy branches overlay */}
        <div className="absolute inset-x-0 bottom-0 top-[20%] pointer-events-none opacity-10 bg-[radial-gradient(#dbcbb0_1px,transparent_1px)] [background-size:16px_16px]" />
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            
            {/* Quick pre-sale text, credentials, phone handles */}
            <div className="lg:col-span-5 text-white/90">
              <span className="text-gold text-xs uppercase tracking-[0.25em] font-bold block mb-4">{t.formTag}</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-8 font-medium">
                {language === "en" ? <>Begin Your Journey <br /><span className="text-gold italic font-normal">at NATIVA</span></> : <>Comience su Viaje <br /><span className="text-gold italic font-normal">en NATIVA</span></>}
              </h2>
              
              <p className="font-sans text-sm md:text-base text-white/70 mb-12 font-light leading-relaxed">
                {t.formDesc}
              </p>

              {/* Verified badges */}
              <div className="space-y-6">
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/50 tracking-wider block">{t.formDirectCall}</span>
                    <strong className="text-white text-base font-serif font-medium">+52 998 400 6052</strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-white/50 tracking-wider block">{t.formCommunity}</span>
                    <strong className="text-white text-base font-serif font-medium hover:text-gold transition-colors block cursor-pointer">
                      @nativaresidences
                    </strong>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-none bg-white/5 border border-white/10 flex items-center justify-center text-gold">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase text-gold tracking-widest font-bold block">{t.formCertTag}</span>
                    <p className="text-white/60 text-xs mt-1 leading-relaxed">
                      {t.formCertDesc}
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Form registration */}
            <div className="lg:col-span-7">
              <div className="bg-white text-offblack p-8 md:p-12 rounded-none border border-forest/10 relative overflow-hidden shadow-sm">
                
                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="lead-form"
                      onSubmit={handleFormSubmit}
                      initial={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="space-y-6"
                    >
                      <div className="border-b border-forest/10 pb-4 mb-6">
                        <h4 className="font-serif text-2xl text-forest font-semibold mb-2">{t.formDossierTitle}</h4>
                        <p className="font-sans text-xs text-offblack/60 font-light">{t.formDossierSub}</p>
                      </div>

                      {/* Name input */}
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#5d4201] font-bold mb-2">{t.labelName}</label>
                        <input 
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleFormChange}
                          placeholder={t.placeholderName}
                          className="w-full bg-[#F8F7F2]/40 border border-forest/10 focus:border-gold focus:outline-none px-4 py-3 text-sm transition-all rounded-none"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* WhatsApp input */}
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-[#5d4201] font-bold mb-2">{t.labelWhatsapp}</label>
                          <input 
                            type="tel"
                            required
                            name="whatsapp"
                            value={formData.whatsapp}
                            onChange={handleFormChange}
                            placeholder="+52 33 22 8885"
                            className="w-full bg-[#F8F7F2]/40 border border-forest/10 focus:border-gold focus:outline-none px-4 py-3 text-sm transition-all rounded-none"
                          />
                        </div>

                        {/* Email input */}
                        <div>
                          <label className="block text-xs uppercase tracking-widest text-[#5d4201] font-bold mb-2">{t.labelEmail}</label>
                          <input 
                            type="email"
                            required
                            name="email"
                            value={formData.email}
                            onChange={handleFormChange}
                            placeholder="correo@ejemplo.com"
                            className="w-full bg-[#F8F7F2]/40 border border-forest/10 focus:border-gold focus:outline-none px-4 py-3 text-sm transition-all rounded-none"
                          />
                        </div>
                      </div>

                      {/* Product Type select */}
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#5d4201] font-bold mb-2">{t.labelInterest}</label>
                        <select 
                          name="investmentInterest"
                          value={formData.investmentInterest}
                          onChange={handleFormChange}
                          className="w-full bg-[#F8F7F2]/40 border border-forest/10 focus:border-gold focus:outline-none px-4 py-3 text-sm transition-all rounded-none cursor-pointer"
                        >
                          <option value="Terrenos Premium">{t.opt1}</option>
                          <option value="Cabañas Vacacionales">{t.opt2}</option>
                          <option value="Terreno y Cabaña">{t.opt3}</option>
                          <option value="Inversionista Copropiedad">{t.opt4}</option>
                        </select>
                      </div>

                      {/* Comments input */}
                      <div>
                        <label className="block text-xs uppercase tracking-widest text-[#5d4201] font-bold mb-2">{t.labelComments}</label>
                        <textarea 
                          name="comments"
                          value={formData.comments}
                          onChange={handleFormChange}
                          placeholder={t.placeholderComments}
                          rows={3}
                          className="w-full bg-[#F8F7F2]/40 border border-forest/10 focus:border-gold focus:outline-none px-4 py-3 text-sm transition-all rounded-none resize-none"
                        />
                      </div>

                      {/* Newsletter checkout */}
                      <div className="flex items-center gap-3">
                        <input 
                          type="checkbox"
                          id="newsletter-check"
                          name="newsletter"
                          checked={formData.newsletter}
                          onChange={handleCheckboxChange}
                          className="accent-gold w-4 h-4"
                        />
                        <label htmlFor="newsletter-check" className="text-[11px] text-offblack/70 font-sans cursor-pointer select-none">
                          {t.newsletterConsent}
                        </label>
                      </div>

                      {/* Actions */}
                      <button 
                        type="submit"
                        disabled={formLoading}
                        className="w-full bg-forest text-gold uppercase tracking-[0.25em] font-bold text-xs py-5 hover:bg-gold hover:text-forest transition-all flex items-center justify-center gap-3 shadow-lg"
                      >
                        {formLoading ? (
                          <>
                            <span className="w-5 h-5 border-2 border-gold border-t-transparent rounded-full animate-spin" />
                            <span>{t.formProcessing}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.formSubmitCta}</span>
                            <ArrowRight className="w-4 h-4" />
                          </>
                        )}
                      </button>

                    </motion.form>
                  ) : (
                    <motion.div 
                      key="lead-success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 px-6 space-y-6 flex flex-col items-center"
                    >
                      <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 mb-4 border border-emerald-100">
                        <CheckCircle className="w-12 h-12" />
                      </div>
                      
                      <h3 className="font-serif text-3xl font-semibold text-forest">{t.formSuccessTitle}</h3>
                      
                      <p className="font-sans text-sm text-offblack/70 max-w-md leading-relaxed font-light">
                        {language === "en" ? (
                          <>Dear <strong className="text-forest font-semibold">{formData.name}</strong>, we have verified your WhatsApp number <span className="font-medium text-forest">{formData.whatsapp}</span> and contact email.</>
                        ) : (
                          <>Estimado(a) <strong className="text-forest font-semibold">{formData.name}</strong>, hemos verificado su número de WhatsApp <span className="font-medium text-forest">{formData.whatsapp}</span> y correo electrónico de contacto.</>
                        )}
                      </p>

                      <div className="bg-sand/20 p-6 rounded-sm text-left text-xs font-sans border border-sand w-full max-w-sm space-y-3">
                        <div className="flex justify-between">
                          <span className="text-offblack/60">{t.formSuccessInterest}</span>
                          <span className="font-bold text-forest">{formData.investmentInterest}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-offblack/60">{t.formSuccessChannel}</span>
                          <span className="font-bold text-forest">{t.formSuccessChannelVal}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-offblack/60">{t.formSuccessWait}</span>
                          <span className="font-bold text-forest font-serif italic text-clay">{t.formSuccessWaitVal}</span>
                        </div>
                      </div>

                      <p className="font-sans text-xs text-offblack/50">
                        {t.formSuccessCopy}
                      </p>

                      <button 
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({
                            name: "",
                            email: "",
                            whatsapp: "",
                            investmentInterest: "Terrenos Premium",
                            comments: "",
                            newsletter: true
                          });
                        }}
                        className="border border-forest text-forest hover:bg-forest hover:text-white px-8 py-3 rounded-none font-sans uppercase text-xs font-semibold tracking-wider transition-all cursor-pointer"
                      >
                        {t.formSuccessReset}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-forest text-white/90 border-t border-white/5 py-12 md:py-16 mt-auto">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 class-id-footer">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-white/5">
            
            {/* Column 1 Logo and brand theme */}
            <div className="md:col-span-4 space-y-4">
              <div className="flex items-center gap-3 text-white">
                <img 
                  src="https://i.imgur.com/y3regni.png" 
                  alt="Nativa Logo" 
                  className="h-9 w-auto object-contain"
                  id="footer-logo-img"
                  referrerPolicy="no-referrer"
                />
                <span className="font-serif font-bold tracking-[0.25em] text-lg text-white">
                  NATIVA
                </span>
              </div>
              <p className="font-sans text-xs text-white/60 leading-relaxed max-w-sm">
                {t.footDesc}
              </p>
            </div>

            {/* Column 2 Navigation Links */}
            <div className="md:col-span-4 space-y-4 font-sans">
              <h5 className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.footNav}</h5>
              <div className="grid grid-cols-2 gap-3 text-xs text-white/70">
                <a href="#concepto" className="hover:text-gold transition-colors">{t.navConcepto}</a>
                <a href="#masterplan" className="hover:text-gold transition-colors">{t.navMasterplan}</a>
                <a href="#amenidades" className="hover:text-gold transition-colors">{t.navAmenidades}</a>
                <a href="#inversion" className="hover:text-gold transition-colors">{t.navInversion}</a>
                <a href="#contacto" className="hover:text-gold transition-colors">{t.navContacto}</a>
                <span className="text-white/30 cursor-not-allowed">{language === "en" ? "Privacy Policy" : "Aviso Privacidad"}</span>
              </div>
            </div>

            {/* Column 3 Contact and Social handles */}
            <div className="md:col-span-4 space-y-4 font-sans text-xs">
              <h5 className="text-[10px] uppercase text-gold tracking-widest font-bold">{t.footOffice}</h5>
              <p className="text-white/60 leading-relaxed font-light">
                {language === "en" ? "Quintana Roo, Mexico" : "Quintana Roo, México"} <br />
                {language === "en" ? "Phone" : "Teléfono"}: +52 998 400 6052 <br />
                Email: ventas@nativaresidences.com
              </p>
              
              <div className="flex items-center gap-4 text-white/60 pt-2">
                <a className="hover:text-gold transition-colors" href="https://instagram.com" target="_blank" rel="noreferrer">
                  <Instagram className="w-4 h-4" />
                </a>
                <a className="hover:text-gold transition-colors" href="https://facebook.com" target="_blank" rel="noreferrer">
                  <Facebook className="w-4 h-4" />
                </a>
                <span className="text-[11px] tracking-wider text-gold font-serif">@nativaresidences</span>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-white/40 font-sans gap-4">
            <div>
              &copy; {new Date().getFullYear()} NATIVA Eco Jungle Residences. {t.footRights}
            </div>
            
            <div className="flex items-center gap-6 flex-wrap justify-center">
              <span>{t.footCompliance}</span>
              <span className="text-gold">Luxury Ecological Living</span>
            </div>
          </div>

        </div>
      </footer>

      {/* PERSISTENT FLOATING INQUIRY CHAT SHORTCUT ON SCREEN */}
      <a 
        href="https://wa.me/529984006052" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white hover:bg-[#20ba5a] transition-all duration-300 p-3.5 rounded-full shadow-2xl flex items-center justify-center gap-0 group hover:gap-2 focus:ring-4 focus:ring-[#25D366]/20"
        title={language === "en" ? "Contact Wealth Advisor" : "Contactar Asesor Patrimonial"}
        id="persistent-whatsapp-button-link"
      >
        <img 
          src="https://i.imgur.com/XWh4057.png" 
          alt="WhatsApp" 
          className="w-6 h-6 shrink-0 object-contain" 
          referrerPolicy="no-referrer"
        />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out text-xs font-bold uppercase tracking-widest pl-0 group-hover:pl-1 whitespace-nowrap">
          {t.chatHelper}
        </span>
      </a>

    </div>
  );
}
