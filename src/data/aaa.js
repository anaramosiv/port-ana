// Textos comunes a todas las páginas de proyecto
export const commonCopy = {
  gallery: {
    title: 'Detalles de la interfaz',
    subtitle:
      'Las pantallas donde se nota el trabajo: las decisiones de diseño, estructura y funcionalidad detrás de cada proyecto.',
  },
  cta: {
    title: '¿Trabajamos juntos?',
    subtitle:
      'Si buscas a alguien que cuide el diseño, la experiencia de usuario y los detalles que hacen que una web funcione de verdad, escríbeme.',
    button: 'Contactar',
  },
  footer: {
    title: 'Ana Karina Ramos',
    subtitle:
      'Desarrollo web frontend con foco en experiencia de usuario y accesibilidad.',
  },
};

export const projects = [
  {
    id: 'viflip',
    title: 'Viflip',
    subtitle:
      'Web inmobiliaria con identidad visual cuidada y formulario integrado con el CRM de la empresa.',
    heroImageUrl: viflipImg,
    heroVideoUrl: viflipVideo,
    overview:
      'Sitio para una empresa de servicios inmobiliarios que necesitaba una imagen a la altura de su trabajo de reformas y, a la vez, una web operativa. Los inmuebles se gestionan como contenido dinámico (CPT con JetEngine), con listados y fichas diseñados en Elementor. El formulario de contacto se integra con el controlador del CRM de la empresa (desarrollado en Laravel), que asigna cada contacto a la oficina correspondiente según su código postal. Un mapa conectado a la API de Google Maps muestra las sucursales según el clic del usuario.',
    features: [
      { icon: 'Palette', title: 'Diseño a medida', description: 'Estética cuidada y coherente con la marca en cada pantalla.' },
      { icon: 'Database', title: 'Inmuebles dinámicos', description: 'Listados y fichas gestionables desde el panel con CPT, JetEngine y plantillas Elementor.' },
      { icon: 'Plug', title: 'Integración con CRM', description: 'Formulario conectado al CRM de la empresa (Laravel): cada contacto llega a la oficina que le corresponde según su código postal.' },
      { icon: 'MapPin', title: 'Mapa de sucursales', description: 'Integración con Google Maps API: el usuario hace clic y ve la ubicación de lasucursal correspondiente.' },
      { icon: 'Search', title: 'Pensada para SEO', description: 'Estructura de contenidos y sección de preguntas frecuentes orientadas al posicionamiento.' },
    ],
    gallery: [
      { url: viflipHero, title: 'Primera impresión', description: 'Portada que transmite la imagen de marca desde el primer vistazo.' },
      { url: viflipListing, title: 'Listado de inmuebles', description: 'Catálogo dinámico con CPT y JetEngine, con diseño propio.' },
      { url: viflipDetail, title: 'Ficha de inmueble', description: 'Una única plantilla que se rellena con los datos de cada propiedad.' },
      { url: viflipFAQ, title: 'FAQ orientada a SEO', description: 'Preguntas frecuentes estructuradas para posicionar y resolver dudas antes del contacto.' },
    ],
    category: 'Inmobiliario · Integración CRM',
    listingDescription:
      'Web inmobiliaria con formulario integrado en el CRM de la empresa, que deriva cada contacto a su oficina por código postal, y fichas de inmuebles dinámicas.',
  },
  {
    id: 'animalcenter',
    title: 'Animal Center',
    subtitle:
      'Tienda online para un especialista en animales exóticos con más de 25 años de historia.',
    heroImageUrl: animalCover,
    heroVideoUrl: animalVideo,
    overview:
      'Tienda online en WordPress y WooCommerce para un negocio de mascotas y animales exóticos. El reto era un catálogo amplio y heterogéneo que cualquier usuario pudiera recorrer sin fricción. La solución: un megamenú organizado por especie y rubro, plantillas de WooCommerce rediseñadas, un checkout a medida y pagos con Redsys.',
    features: [
      { icon: 'Grid', title: 'Megamenú por especie', description: 'Navegación estructurada por especie y categoría para encontrar cualquier producto rápido.' },
      { icon: 'PenLine', title: 'WooCommerce a medida', description: 'Plantillas y páginas por defecto rediseñadas con la identidad del negocio.' },
      { icon: 'CreditCard', title: 'Pagos con Redsys', description: 'Pasarela de pago bancaria española integrada y configurada.' },
      { icon: 'ShoppingBag', title: 'Gestión completa', description: 'Catálogo, pedidos y pagos configurados según las necesidades del negocio.' },
      { icon: 'Layout', title: 'WordPress + Elementor', description: 'Maquetación visual con código personalizado donde hizo falta.' },
    ],
    gallery: [
      { url: homeAnimal, title: 'Página de inicio', description: 'Portada con diseño corporativo y acceso claro a la tienda.' },
      { url: tiendaAnimal, title: 'Página de tienda', description: 'Acceso directo a las categorías principales.' },
      { url: listingAnimal, title: 'Listado por categoría', description: 'Cada producto indica si se añade directo al carrito o requiere elegir una opción antes.' },
      { url: detalleAnimal, title: 'Detalle de producto', description: 'La información cambia según la variante seleccionada.' },
      { url: sidecartAnimal, title: 'Carrito lateral', description: 'El carrito siempre a la vista mientras el usuario sigue comprando.' },
      { url: checkoutAnimal, title: 'Checkout a medida', description: 'Diseñado de forma independiente a los estilos nativos de WooCommerce, con pago Redsys.' },
    ],
    category: 'E-commerce · WooCommerce',
    listingDescription:
      'Tienda WooCommerce con catálogo amplio, megamenú por especie y checkout a medida con pago Redsys.',
  },
  {
    id: 'inversores',
    title: 'Inverso-Res',
    subtitle:
      'Web corporativa con identidad visual propia y un área privada de e-learning con buscador de formaciones.',
    heroImageUrl: inversoCover,
    heroVideoUrl: inverVideo,
    overview:
      'Sitio corporativo con mucho contenido, vídeo y animaciones Lottie (creadas por un animador e integradas por mí) que refuerzan la imagen de marca. El contenido se gestiona como CPT con JetEngine, y el área privada de e-learning (acceso con usuario y contraseña) incluye un buscador de formaciones con JetSearch. El blog se migró desde la versión anterior de la marca, también en WordPress.',
    features: [
      { icon: 'Palette', title: 'Diseño de marca', description: 'Identidad visual trasladada a toda la web con coherencia.' },
      { icon: 'Database', title: 'Contenido dinámico', description: 'Formaciones y fichas gestionadas con CPT de JetEngine.' },
      { icon: 'GraduationCap', title: 'Área e-learning privada', description: 'Zona de acceso restringido con usuario y contraseña.' },
      { icon: 'Search', title: 'Buscador de formaciones', description: 'Búsqueda de información sobre formaciones con JetSearch.' },
      { icon: 'Film', title: 'Vídeo y animación', description: 'Vídeo corporativo y animaciones Lottie integradas en el diseño de la web.' },
      { icon: 'Layout', title: 'Blog migrado', description: 'Contenido de la versión anterior importado y adaptado al nuevo diseño.' },
    ],
    gallery: [
      { url: inversoHome, title: 'Home', description: 'La estética de la marca desde la portada.' },
      { url: inversoDetalle, title: 'Detalle de diseño', description: 'Cuidado de la imagen corporativa hasta en los elementos pequeños.' },
      { url: inversoContact, title: 'Información del campus', description: 'Ubicación en mapa y enlace directo a Calendly para reservar.' },
      { url: inversoBlog, title: 'Blog', description: 'Contenido migrado desde la versión anterior de la marca.' },
      { url: inversoCampus, title: 'Área de cliente', description: 'Acceso con usuario y contraseña a la zona privada de e-learning.' },
    ],
    category: 'Corporativa · E-learning',
    listingDescription:
      'Web corporativa con área privada de e-learning, buscador de formaciones y contenido dinámico con JetEngine.',
  },
  {
    id: 'andaresgourmet',
    title: 'Andares Gourmet',
    subtitle:
      'Tienda online con variantes de producto, carrito lateral y envíos configurados con precisión.',
    heroImageUrl: andaresCover,
    heroVideoUrl: andaresVideo,
    overview:
      'E-commerce en WordPress y WooCommerce con una portada visual basada en vídeo corporativo. Los productos tienen variantes de precio y presentación: la web muestra el rango de precios hasta que el usuario elige ambas opciones y entonces calcula el precio final. El checkout admite pagos con Redsys y tarifas de envío diferenciadas, porque dependen de varios factores.',
    features: [
      { icon: 'Layers', title: 'Variantes de producto', description: 'Precio y presentación combinables; muestra el rango hasta completar ambas selecciones.' },
      { icon: 'Truck', title: 'Envíos diversificados', description: 'Tarifas configuradas según los distintos factores que condicionan cada pedido.' },
      { icon: 'CreditCard', title: 'Pagos con Redsys', description: 'Pasarela bancaria integrada en el checkout.' },
      { icon: 'ShoppingBag', title: 'Carrito lateral', description: 'Resumen de compra visible sin salir de la página.' },
      { icon: 'Film', title: 'Portada con vídeo', description: 'Vídeo corporativo que da identidad a la marca desde el primer momento.' },
      { icon: 'Smartphone', title: 'Diseño responsive', description: 'Experiencia de compra cuidada en móvil, tablet y escritorio.' },
    ],
    gallery: [
      { url: andaresHome, title: 'Portada', description: 'Diseño de portada con vídeo corporativo y acceso a las categorías.' },
      { url: andaresListing, title: 'Listado de productos', description: 'Catálogo organizado por categorías para explorar sin perderse.' },
      { url: andaresDetalle, title: 'Selección de variantes', description: 'El precio se muestra como rango hasta elegir precio y presentación; después, el importe final.' },
      { url: andaresSidecart, title: 'Carrito lateral', description: 'Acceso inmediato al carrito mientras se continúa la compra.' },
      { url: andaresResponsive, title: 'Diseño responsive', description: 'La tienda se adapta a cualquier dispositivo sin perder usabilidad.' },
      { url: andaresCheckout, title: 'Checkout y envíos', description: 'Pago con Redsys y opciones de envío diferenciadas según cada pedido.' },
    ],
    category: 'E-commerce · Gourmet',
    listingDescription:
      'Tienda online con variantes de precio y presentación, carrito lateral y envíos configurados según múltiples condiciones.',
  },
];