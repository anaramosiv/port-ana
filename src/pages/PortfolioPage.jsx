import React from 'react';
import { motion } from 'motion/react';
import { projects } from '../data/projects.js';
import { ProjectCard } from '../components/ProjectCard.jsx';

export const PortfolioPage = () => {
  return (
    <div className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6 mb-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tight mb-6">
            Algunos de mis proyectos
          </h1>
          <p className="text-on-surface-variant text-lg md:text-xl font-light leading-relaxed">
           Cada proyecto es una forma distinta de resolver un reto: explorar ideas, cuidar los detalles y encontrar soluciones que funcionen de verdad. Aquí puedes ver una selección de mi trabajo, donde diseño y desarrollo van de la mano.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
