import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-surface-container bg-white">
      <div className="flex flex-col md:flex-row justify-between items-center px-8 py-12 max-w-7xl mx-auto gap-6">
        <div className="text-lg font-black text-primary font-headline">
         Ana Karina Ramos Sivira
        </div>
        <div className="text-xs font-normal text-on-surface-variant font-sans">
          © 2026 Todos los derechos reservados
        </div>
        <div className="flex gap-6">
          <a className="text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all text-xs" href="https://github.com/anaramosiv"   aria-label="GitHub (se abre en una pestaña nueva)" target='_blank'>Github</a>
          <a className="text-on-surface-variant hover:text-primary hover:underline underline-offset-4 transition-all text-xs" href="https://www.linkedin.com/in/anakarinaramoss/"   aria-label="LinkedIn (se abre en una pestaña nueva)"  target='_blank'>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};
