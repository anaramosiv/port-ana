import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

export const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="group block">
      <motion.div 
        whileHover={{ y: -8 }}
        className="bg-white rounded-2xl overflow-hidden ambient-shadow border border-surface-container transition-all"
      >
        <div className="aspect-[4/3] overflow-hidden relative">
          <img 
            src={project.heroImageUrl} 
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
              {project.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-on-surface-variant text-sm line-clamp-2 font-light leading-relaxed">
            {project.subtitle}
          </p>
        </div>
      </motion.div>
    </Link>
  );
};