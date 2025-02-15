/**
 * Componente que muestra el hero de la sección de blog.
 * Usa tres contenedores: uno para el contenido, otro para la imagen y otro para el overlay de la imagen.
 */

import hero from "../../../../public/assets/images/blog/entrada-blog/IMAGENES_HERO.webp";

const BlogHeader: React.FC = () => (
  <div className="relative h-screen bg-gradient-to-r from-teal-600 to-cyan-300 text-white pt-28">
    {/* Contenedor central para el contenido */}
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center h-full">
      {/* Contenedor del texto: 100% en mobile y 45% en desktop */}
      <div className="w-full md:w-[45%] pl-8 flex flex-col justify-center h-full z-10 relative">
        <h2 className="text-8xl font-extrabold">TAMI</h2>
        <h1 className="text-8xl font-semibold">BLOG</h1>
        <p className="mt-4 text-lg">
          <span className="block font-semibold">
            En esta sección encontrarás temas sobre diseño de interiores para entornos:
          </span>
        </p>
        <ul className="list-disc list-inside mt-4 space-y-2 text-lg">
          <li>Profesionales</li>
          <li>Oficinas</li>
          <li>Restaurantes</li>
          <li>Hoteles</li>
          <li>Eventos especiales</li>
        </ul>
        <p className="mt-6 text-lg font-semibold">
          Incluyendo tips, artículos, tendencias y consejos.
        </p>
      </div>

      {/* Contenedor de la imagen: se muestra solo en md+ */}
      <div className="hidden md:block absolute top-[127px] left-1/2 right-0 bottom-0 overflow-hidden">
        <img
          src={hero}
          alt="Diseño de interiores"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </div>
  </div>
);

export default BlogHeader;

