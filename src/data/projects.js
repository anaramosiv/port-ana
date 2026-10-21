//VIFLIP

import viflipVideo from '../assets/videos/viflip.mp4'
import viflipImg from '../assets/images/viflip/viflip-responsivo.png'
import viflipHero from '../assets/images/viflip/viflip-propiedades.webp'
import viflipListing from '../assets/images/viflip/listingviflip.webp'
import viflipDetail from  '../assets/images/viflip/detalleprop2.webp'
import viflipFAQ from  '../assets/images/viflip/faqvifl.webp'
import viflipForm from  '../assets/images/viflip/form.webp'

//ANIMALc
import animalVideo from '../assets/videos/animalc.mp4';
import animalCover from '../assets/images/animalC/animalResponsive.webp'
import homeAnimal from '../assets/images/animalC/homeAnimal.webp'
import tiendaAnimal from  '../assets/images/animalC/tiendaCat.webp'
import listingAnimal from  '../assets/images/animalC/listingAnimal.webp'
import detalleAnimal from  '../assets/images/animalC/detalleAnimal.webp'
import sidecartAnimal from  '../assets/images/animalC/sidecartAnimal.webp'
import checkoutAnimal from  '../assets/images/animalC/checkoutAnimal.webp'

//ANDARES
import andaresVideo from '../assets/videos/andaresg.mp4'
import andaresCover from  '../assets/images/andares/andares.webp'
import andaresHome from  '../assets/images/andares/homeAndares.webp'
import andaresListing from  '../assets/images/andares/listingAndares.webp'
import andaresDetalle from  '../assets/images/andares/detalleAndares.webp'
import andaresSidecart from  '../assets/images/andares/sidecartAndares.webp'
import andaresResponsive from  '../assets/images/andares/responsive.webp'
import andaresCheckout from  '../assets/images/andares/checkoutAndares.webp'


//Inverso
import inverVideo from '../assets/videos/INVERSORES.mp4'
import inversoCover from  '../assets/images/inverso-res/inversores.webp'
import inversoHome from  '../assets/images/inverso-res/homeinv.webp'
import inversoDetalle from  '../assets/images/inverso-res/detalleinver.webp'
import inversoContact from  '../assets/images/inverso-res/contactoinver.webp'
import inversoBlog from  '../assets/images/inverso-res/bloginver.webp'
import inversoCampus from  '../assets/images/inverso-res/campusinver.webp'


export const projects = [
  {
    id: 'viflip',
    title: 'Viflip servicios inmobiliarios',
    subtitle: 'Página de viflip, una empresa de servicios inmobiliarios con conexión al CRM propio de la empresa',
    heroImageUrl: viflipImg,
    heroVideoUrl: viflipVideo,
    overview: 'Sitio para una empresa de servicios inmobiliarios que necesitaba una imagen a la altura de su trabajo de reformas y, a la vez, una web operativa. Los inmuebles se gestionan como contenido dinámico (CPT con JetEngine), con listados y fichas diseñados en Elementor. El formulario de contacto se integra con el controlador del CRM de la empresa (desarrollado en Laravel), que asigna cada contacto a la oficina correspondiente según su código postal. Un mapa conectado a la API de Google Maps muestra las sucursales según el clic del usuario.',
    features: [
      { icon: 'Palette', title: 'Diseño a medida', description: 'Estética cuidada y coherente con la marca en cada pantalla.' },
      { icon: 'Database', title: 'Inmuebles dinámicos', description: 'Listados y fichas gestionables desde el panel con CPT, JetEngine y plantillas Elementor.' },
      { icon: 'Plug', title: 'Integración con CRM', description: 'Formulario conectado al CRM de la empresa (Laravel): cada contacto llega a la oficina que le corresponde según su código postal.' },
      { icon: 'MapPin', title: 'Mapa de sucursales', description: 'Integración con Google Maps API: el usuario hace clic y ve la sucursal correspondiente.' },
      { icon: 'Search', title: 'Pensada para SEO', description: 'Estructura de contenidos y sección de preguntas frecuentes orientadas al posicionamiento.' },
    ],
    gallery: [
      { url: viflipHero, title: 'Primera impresión', description: 'Portada que transmite la imagen de marca desde el primer vistazo.' },
      { url: viflipListing, title: 'Listado de inmuebles', description: 'Catálogo dinámico con CPT y JetEngine, con diseño propio.' },
      { url: viflipDetail, title: 'Ficha de inmueble', description: 'Una única plantilla que se rellena con los datos de cada propiedad.' },
      { url: viflipFAQ, title: 'FAQ orientada a SEO', description: 'Preguntas frecuentes estructuradas para posicionar y resolver dudas antes del contacto.' },
      { url: viflipForm, title: 'Formulario de contacto', description: 'Formulario conectado al CRM de la empresa: cada solicitud se asigna a la oficina que le corresponde según el código postal.' },
    ],
    category: 'Inmobiliario'
  },
 {
  id: 'animalcenter',
  title: 'Animal Center',
  subtitle: 'Tienda online para un negocio especialista en animales exóticos, con más de 25 años de historia.',
  heroImageUrl: animalCover,
  heroVideoUrl: animalVideo,
  overview: 'Desarrollo de tienda online sobre WordPress con WooCommerce para un negocio especializado en mascotas y animales exóticos. El reto principal era manejar un catálogo amplio y heterogéneo de forma que cualquier usuario encontrara lo que necesita sin fricciones. Se implementó un megamenú con categorías organizadas por especie y rubro, personalización de plantillas y páginas por defecto de WooCommerce, integración de pasarela de pago Redsys y configuración completa adaptada a las necesidades del negocio.',
  features: [
    { icon: 'ShoppingBag', title: 'WooCommerce', description: 'Tienda completa con gestión de catálogo, pedidos y pagos.' },
    { icon: 'CreditCard', title: 'Redsys', description: 'Integración de pasarela de pago bancaria española.' },
    { icon: 'Grid', title: 'Megamenú', description: 'Navegación estructurada por especie y categoría para facilitar la búsqueda de productos.' },
    { icon: 'PenLine', title: 'Personalización WooCommerce', description: 'Modificación de plantillas y páginas por defecto para adaptarlas a la identidad del negocio.' },
    { icon: 'Layout', title: 'WordPress + Elementor', description: 'Maquetación y personalización visual del sitio.' },
  ],
  gallery: [ 
      { url: homeAnimal, title: 'Página de Inicio', description: 'Landing de la tienda con diseño corporativo' },
      { url: tiendaAnimal, title: 'Página de tienda', description: 'Acceso directo a las categorías principales en la página de tienda' },
      { url: listingAnimal, title: 'Listado de productos en cada categoría', description: 'Listado de productos en cada categoría distinguiendo si el producto se debe agragar directamente al carrito o si se debe hacer una seleccion adicional' },
      { url: detalleAnimal, title: 'Detalle de producto', description: 'Detalle del producto con información variable según selección'},
      { url: sidecartAnimal, title: 'carrito lateral', description: 'Integración de carrito lateral para facilitar la vista del mismo mientras se continua la compra' },
      { url: checkoutAnimal, title: 'Checkout', description: 'Checkout diseñado a medida e independiente de los estilos nativos de woocommerce con Medios de pago conectados con Resdys' }
    ],
  category: 'E-commerce'
},
  {
    id: 'inversores',
    title: 'Inverso-Res',
    subtitle: 'Web corporativa con identidad visual propia y un área privada de e-learning con buscador de formaciones.',
    heroImageUrl: inversoCover,
    heroVideoUrl: inverVideo,
    overview: 'Sitio corporativo con mucho contenido, vídeo y animaciones Lottie que refuerzan la imagen de marca. El contenido se gestiona como CPT con JetEngine, y el área privada de e-learning (acceso con usuario y contraseña) incluye un buscador de formaciones con JetSearch. El blog se migró desde la versión anterior de la marca, también en WordPress.',
    features: [
      {icon: 'Palette', title: 'Diseño de marca', description: 'Identidad visual trasladada a toda la web con coherencia.' },
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
    category: 'Website- E-Learning'
  },
  {
    id: 'andaresgourmet',
    title: 'Andares Gourmet',
    subtitle:  'Tienda online con variantes de producto, carrito lateral y envíos configurados con precisión.',
    heroImageUrl: andaresCover,
    heroVideoUrl: andaresVideo,
    overview: 'E-commerce en WordPress y WooCommerce con una portada visual basada en vídeo corporativo. Los productos tienen variantes de precio y presentación: la web muestra el rango de precios hasta que el usuario elige ambas opciones y entonces calcula el precio final. El checkout admite pagos con Redsys y tarifas de envío diferenciadas, porque dependen de varios factores.',
    features: [
      { icon: 'Layers', title: 'Variantes de producto', description: 'Precio y presentación combinables; muestra el rango hasta completar ambas selecciones.' },
      { icon: 'Truck', title: 'Envíos diversificados', description: 'Tarifas configuradas según los distintos factores que condicionan cada pedido.' },
      { icon: 'CreditCard', title: 'Pagos con Redsys', description: 'Pasarela bancaria integrada en el checkout.' },
      { icon: 'ShoppingBag', title: 'Carrito lateral', description: 'Resumen de compra visible sin salir de la página.' },
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
    category: 'E-commerce'
  }
];
