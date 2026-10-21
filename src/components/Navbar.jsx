import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Proyectos', path: '/portfolio' },
    { name: 'Sobre mí', path: '/#about' },
    { name: 'Contacto', path: '/#contact' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    if (path === '/portfolio') return location.pathname.startsWith('/portfolio') || location.pathname.startsWith('/project');
    return false;
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <Link to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
          Ana Karina Ramos Sivira
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 items-center font-headline font-medium text-sm tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${isActive(link.path) ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'} transition-all`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:ramoss.anakarina@gmail.com"
            className="hidden md:block bg-primary text-white rounded-full px-6 py-2 text-sm font-semibold transition-all hover:scale-95 duration-150 ease-in-out"
          >
            Escríbeme
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-on-surface"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-surface-container overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4 font-headline font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={isActive(link.path) ? 'text-primary font-bold' : 'text-on-surface-variant'}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="mailto:ramoss.anakarina@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-primary text-white rounded-full py-3 text-sm font-semibold mt-2 text-center"
              >
                Escríbeme
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
