  import React, { useState, useEffect, useRef } from 'react';
  import { ContactForm } from '../components/ContactForm';
  import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
  import { 
    ArrowRight, 
    Code, 
    Link as LinkIcon, 
    Mail, 
    MapPin, 
    Smartphone, 
    Grid, 
    Layout, 
    Sparkles,
    Layers,
    Zap
  } from 'lucide-react';
  import { Link } from 'react-router-dom';
  import { Swiper, SwiperSlide } from 'swiper/react';
  import { Autoplay } from 'swiper/modules';
  import anaPort from '../assets/images/AnaRS.webp';
  import cssLogo from '../assets/images/tech/CSS.png'
  import htmlLogo from '../assets/images/tech/HTML.png'
  import jsLogo from '../assets/images/tech/Js.png'
  import reactLogo from '../assets/images/tech/React.png'
  import sassLogo from '../assets/images/tech/Sass.png'
  import tailwindLogo from '../assets/images/tech/Tailwind.png'
  import wordpressLogo from '../assets/images/tech/Wordpress.png'
  import gitLogo from '../assets/images/tech/Git.png'
  import elementorLogo from '../assets/images/tech/elementor.png'
  // Import Swiper styles
  import 'swiper/css';

  // --- Components ---

  const Typewriter = ({ text, delay = 100 }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      if (currentIndex < text.length) {
        const timeout = setTimeout(() => {
          setCurrentText(prevText => prevText + text[currentIndex]);
          setCurrentIndex(prevIndex => prevIndex + 1);
        }, delay);
        return () => clearTimeout(timeout);
      }
    }, [currentIndex, delay, text]);

    return (
      <span>
        {currentText}
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8 }}
          className="inline-block w-[2px] h-[0.8em] bg-primary ml-1 align-middle"
        />
      </span>
    );
  };

  const ParallaxSection = ({ children, className = "", id = "" }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    return (
      <motion.section
        id={id}
        ref={ref}
        style={{ opacity }}
        className={`relative overflow-hidden ${className}`}
      >
        <motion.div style={{ y }}>
          {children}
        </motion.div>
      </motion.section>
    );
  };

  export const HomePage = () => {
    return (
      <div className="min-h-screen">
        <>
          {/* Hero Section */}
          <section className="max-w-7xl mx-auto px-8 pt-32 pb-20 md:pt-48 md:pb-32 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold tracking-widest uppercase mb-6">
                Disponible para Proyectos
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface leading-tight tracking-tighter mb-4">
                Desarrolladora Web <br />
                <span className="text-primary italic">
                  <Typewriter text="Front end" delay={150} />
                </span>
              </h1>
              <p className="text-2xl font-semibold text-on-surface-variant mb-6">
                Ana Karina Ramos <span className="font-normal text-on-surface-variant/80"> Más de 3 años construyendo interfaces limpias, accesibles y orientadas a resultados. Me adapto al stack y al proyecto.
  </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact" 
                  className="px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
                >
                  Hablar conmigo
                  <ArrowRight size={20} />
                </motion.a>
                <div className="flex items-center gap-4 px-4">
                  <a href="https://portfolioakrs.netlify.app/" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-primary/10 transition-colors"
                  target="_blank"   rel="noopener noreferrer">
                    <LinkIcon size={20} />
                  </a>
                  <a href="https://github.com/anaramosiv/" className="w-12 h-12 flex items-center justify-center rounded-full bg-surface-container text-on-surface hover:bg-primary/10 transition-colors"
                  target="_blank"   rel="noopener noreferrer">
                    <Code size={20} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
              animate={{ opacity: 1, scale: 1, rotate: 3 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="order-1 md:order-2 relative"
            >
              <div className="aspect-square rounded-xl overflow-hidden shadow-2xl hover:rotate-0 transition-transform duration-500 bg-surface-container">
                <img 
                  alt="Ana - Front end Developer" 
                  className="w-full h-full object-cover" 
                  src={anaPort}
                  referrerPolicy="no-referrer"
                />
              </div>
              <motion.div 
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-md p-6 rounded-lg shadow-xl hidden lg:block border border-white/20"
              >
                <p className="text-sm font-bold text-on-surface">React Js y Wordpress</p>
                <p className="text-xs text-on-surface-variant">Adaptabilidad a cada proyecto</p>
              </motion.div>
            </motion.div>
          </section>

          {/* Tech Stack Carousel */}
          <section className="bg-surface-container py-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-8">
              <p className="text-center font-bold text-on-surface-variant uppercase tracking-widest text-xs mb-10">Tecnologías Principales</p>
              
              <Swiper
                modules={[Autoplay]}
                spaceBetween={15}
                slidesPerView={2}
                slidesPerGroup={1}
                loop={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                  },
                  768: {
                    slidesPerView: 4,
                  },
                  1024: {
                    slidesPerView: 5,
                  },
                }}
                className="tech-swiper opacity-60 grayscale hover:grayscale-0 transition-all duration-500"
              >
                {[
                    { name: 'CSS', logo: cssLogo },
                    { name: 'HTML', logo: htmlLogo },
                    { name: 'JAVASCRIPT', logo: jsLogo },
                    { name: 'REACT', logo: reactLogo },
                    { name: 'SASS', logo: sassLogo },
                    { name: 'TAILWIND', logo: tailwindLogo },
                    { name: 'WORDPRESS', logo: wordpressLogo },
                    { name: 'GIT', logo: gitLogo },
                    { name: 'ELEMENTOR', logo: elementorLogo },
                ].map((tech, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center gap-2 py-4">
                      <div className="w-12 h-12 flex items-center justify-center">
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="max-w-full max-h-full object-contain"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[10px] font-bold">{tech.name}</span>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </section>

          {/* Services Section */}
          <ParallaxSection className="max-w-7xl mx-auto px-8 py-24" id="services">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-4xl md:text-5xl font-extrabold text-on-surface tracking-tight">Servicios de Diseño & Desarrollo</h2>
              </div>
              <p className="text-on-surface-variant max-w-xs border-l-2 border-primary pl-4">Soluciones integrales enfocadas en la usabilidad y la estética moderna.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: 'Desarrollo Front End con React', desc: 'Interfaces modernas con React, JavaScript y Tailwind. Me integro en proyectos existentes o arranco desde cero, con código limpio, escalable y listo para crecer.', icon: <Code className="text-primary" size={40} /> },
                { title: 'WordPress & CMS', desc: 'Sitios complejos con Elementor, WooCommerce, JetEngine y ACF. PHP cuando hace falta. Sin depender de plugins para todo ni de soluciones que se rompen al primer update.', icon: <Layout className="text-primary" size={40} /> },
                { title: 'UI/UX & Accesibilidad', desc: 'Prototipo en Figma e implemento con criterio. Diseño responsivo, escalable y consistente. Accesibilidad según WCAG 2.1/2.2 y UNE-EN 301 549, integrada desde el Design System', icon: <Grid className="text-primary" size={40} /> },
                { title: 'SEO Técnico & Rendimiento ', desc: 'Estructura semántica, velocidad de carga y optimización On-Page desde el código. No como extra, sino como parte del trabajo bien hecho.', icon: <Zap className="text-primary" size={40} /> },
              ].map(service => (
                <motion.div 
                  key={service.title}
                  whileHover={{ y: -10 }}
                  className="p-8 bg-white rounded-2xl hover:shadow-xl transition-all group border border-surface-container"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </ParallaxSection>

          {/* Portfolio Link Section */}
          <section className="bg-surface-container py-32" id="work">
            <div className="max-w-7xl mx-auto px-8 text-center">
              <span className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Portafolio Seleccionado</span>
              <h2 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-12">Explora mis proyectos</h2>
              <Link 
                to="/portfolio" 
                className="inline-flex items-center gap-3 px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
              >
                Ver todos los proyectos <ArrowRight size={20} />
              </Link>
            </div>
          </section>

          {/* Experience & Education */}
          <section className="max-w-7xl mx-auto px-8 py-32 scroll-mt-24" id="about">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Experience */}
              <div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-16 flex items-center gap-6">
                  <span className="w-16 h-1 bg-primary"></span>
                  Experiencia Profesional
                </h2>
                <div className="space-y-10">
                  {[
                    { 
                      role: 'Desarrolladora web', 
                      company: 'Altare Servicios Profesionales', 
                      period: 'Febrero 2023 - Septiembre 2026', 
                      desc: 'Desarrollo y mantenimiento de sitios web para clientes de distintos sectores. Trabajo habitual con WordPress (Elementor, Divi, WPBakery), WooCommerce, PrestaShop y Shopify. Personalización de temas y funcionalidades mediante HTML, CSS, JavaScript y PHP. Desarrollo frontend con ReactJS y Tailwind para proyectos a medida. Diseño de prototipos en Figma, gestión de hosting (cPanel, dominios, SSL, CDN) y auditorías de accesibilidad según WCAG 2.1 / UNE-EN 301 549. Uso de herramientas de IA y capacidad para revisar y depurar código generado por IA.'
                    },
                    { 
                      role: 'Desarrolladora Web', 
                      company: 'Independiente', 
                      period: '2021 - 2022', 
                      desc: 'Proyectos independientes de desarrollo frontend: maquetación con HTML, CSS, SASS y JavaScript, integración de APIs REST, control de versiones con Git y diseño responsivo para distintos tipos de clientes.' 
                    },
                  ].map((exp, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-surface-container hover:before:bg-primary transition-all"
                      >
                      <div className="mb-4">
                        <div className="flex flex-wrap items-center justify-between gap-4 mb-2">
                          <h3 className="text-2xl font-bold text-on-surface">{exp.role}</h3>
                          <span className="text-xs font-bold text-primary bg-primary/10 px-4 py-1.5 rounded-full uppercase tracking-widest">{exp.period}</span>
                        </div>
                        <p className="text-primary font-bold text-lg mb-4">{exp.company}</p>
                        <p className="text-on-surface-variant leading-relaxed">{exp.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-4xl font-extrabold text-on-surface mb-16 flex items-center gap-6">
                  <span className="w-16 h-1 bg-primary"></span>
                  Educación & Certificados
                </h2>
                <div className="grid gap-6">
                  {[
                    { title: 'Técnico Superior Universitario en Publicidad y Mercadeo', school: 'IUTIRLA - Barquisimeto- Venezuela', date: 'Promoción 2009' },
                    { title: 'Desarrollo Front End con React JS', school: 'Coderhouse', date: '2021-2022'},
                    { title: 'Formación en Accesibilidad Web HTML Semántico · Paleta de colores accesible · Diseño accesible · ARIA · Testing de accesibilidad ', school: 'WeAAAre', date: 'Marzo - Abril 2026' },
                  ].map((edu, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 bg-surface-container rounded-2xl hover:shadow-lg transition-all border-l-4 border-transparent hover:border-primary"
                    >
                      <h3 className="text-xl font-bold mb-1">{edu.title}</h3>
                      <p className="text-on-surface-variant mb-4 italic">{edu.school}</p>
                      <span className="text-xs font-black uppercase tracking-[0.2em] text-primary">{edu.date}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="max-w-7xl mx-auto px-8 py-24 scroll-mt-24" id="contact">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-primary rounded-3xl p-8 md:p-16 flex flex-col lg:flex-row gap-16 items-center overflow-hidden relative shadow-2xl"
            >
              <div className="relative z-10 lg:w-1/2">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6"> ¿Hablamos?</h2>
                <p className="text-white/80 text-lg mb-10 leading-relaxed">Estoy abierta a nuevos retos y seguir creciendo. Remoto o híbrido en Madrid.</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 text-white">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Mail size={20} />
                    </span>
                    <a href="mailto:ramoss.anakarina@gmail.com"
                      className="font-medium hover:underline">
                      ramoss.anakarina@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-white">
                    <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <MapPin size={20} />
                    </span>
                    <span className="font-medium">Remoto / Madrid, ES</span>
                  </div>
                </div>
              </div>
              <div className="relative z-10 lg:w-1/2 w-full">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <ContactForm />
                </div>
              </div>
              {/* Abstract Shapes */}
              <div className="absolute -right-20 -top-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
            </motion.div>
          </section>
        </>
      </div>
    );
  };