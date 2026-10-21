import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import * as Icons from 'lucide-react';
import { projects } from '../data/projects';
import { ComputerMockup } from '../components/ComputerMockup';

export const ProjectDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (!project) {
      navigate('/portfolio');
    }
  }, [project, navigate]);

  if (!project) return null;

  return (
    <div className="pt-24 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block"
          >
            Proyecto
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface tracking-tight mb-6"
          >
            {project.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-on-surface-variant text-lg max-w-2xl mx-auto font-light leading-relaxed"
          >
            {project.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ComputerMockup 
            videoUrl={project.heroVideoUrl} 
            imageUrl={project.heroImageUrl} 
          />
        </motion.div>
      </section>

      {/* Overview & Features */}
      <section className="bg-surface-container py-24 mb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-7">
            <h2 className="font-headline font-bold text-3xl text-on-surface mb-8">Información del proyecto</h2>
            <p className="text-on-surface-variant leading-relaxed text-lg font-light">
              {project.overview}
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="bg-white rounded-2xl p-8 ambient-shadow border border-surface-container">
              <h3 className="font-headline font-bold text-xl mb-8 text-primary">Características</h3>
              <ul className="space-y-6">
                {project.features.map((feature, idx) => {
                  const IconComponent = Icons[feature.icon] || Icons.Zap;
                  return (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="bg-primary/10 p-3 rounded-xl text-primary">
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm text-on-surface mb-1">{feature.title}</h4>
                        <p className="text-xs text-on-surface-variant font-light">{feature.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="mb-12">
          <h2 className="font-headline font-extrabold text-4xl text-on-surface mb-4">Detalles de la interfaz</h2>
          <p className="text-on-surface-variant">Las pantallas donde se nota el trabajo: las decisiones de diseño, estructura y funcionalidad detrás de cada proyecto.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {project.gallery.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-2xl bg-gray-900 aspect-[4/3] ${idx % 2 !== 0 ? 'md:mt-12' : ''}`}
            >
              <img 
                src={item.url} 
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                {/* <span className="text-primary font-bold text-xs tracking-widest uppercase mb-2">Module {String(idx + 1).padStart(2, '0')}</span> */}
                <h3 className="text-white font-headline font-bold text-xl mb-2">{item.title}</h3>
                <p className="text-white/70 text-sm font-light">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-primary rounded-3xl p-12 md:p-24 text-center relative overflow-hidden text-white">
          <div className="relative z-10">
            <h2 className="font-headline font-extrabold text-4xl mb-6">¿Listo para hacer realidad tu visión?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg">
              Si buscas a alguien que cuide el diseño, la experiencia de usuario y los detalles que hacen que una web funcione de verdad, escríbeme.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary rounded-full px-10 py-4 font-bold hover:scale-105 transition-transform shadow-lg">
                Contáctame
              </button>
              <Link to="/portfolio" className="bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-full px-10 py-4 font-bold hover:bg-white/20 transition-all">
                Ver más proyectos
              </Link>
            </div>
          </div>
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl"></div>
        </div>
      </section>
    </div>
  );
};
