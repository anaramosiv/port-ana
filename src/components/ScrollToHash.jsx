import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToHash() {
  const { hash, key } = useLocation();

  useEffect(() => {
    // Sin hash: al cambiar de página, empezar arriba.
    // (la primera carga tiene key 'default'; ahí no tocamos nada)
    if (!hash) {
      if (key !== 'default') window.scrollTo(0, 0);
      return;
    }

    const id = decodeURIComponent(hash.slice(1));
    const goToSection = () => document.getElementById(id)?.scrollIntoView();

    // 1) ir ya, 2) volver a alinear cuando las imágenes/carrusel
    //    terminan de cargar y la altura de la página cambia
    goToSection();
    const timers = [100, 400].map((ms) => setTimeout(goToSection, ms));
    return () => timers.forEach(clearTimeout);
  }, [hash, key]);

  return null;
}
