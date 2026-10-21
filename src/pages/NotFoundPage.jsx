import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <div className="max-w-3xl mx-auto px-8 pt-40 pb-32 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
          Error 404
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold text-on-surface tracking-tighter mb-6">
          Página no encontrada
        </h1>
        <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
          La dirección que buscas no existe o ha cambiado de lugar.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary text-white rounded-full font-bold text-lg shadow-lg hover:scale-105 transition-all"
          >
            Volver al inicio <ArrowRight size={20} />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center px-10 py-4 bg-surface-container text-on-surface rounded-full font-bold text-lg hover:bg-primary/10 transition-all"
          >
            Ver proyectos
          </Link>
        </div>
      </motion.div>
    </div>
  );
};
