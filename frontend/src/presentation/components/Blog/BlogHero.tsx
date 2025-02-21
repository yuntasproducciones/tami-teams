/**
 * Componente que muestra la imagen de fondo y el título de la sección de blog.
 * Esta sección contiene un degradado sobre la imagen y un texto desplazado.
 */
import React from "react";
import heroImage from "../../../../public/assets/images/blog/entrada-blog/IMAGENES_HERO.webp";

const BlogHero: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Degradado sobre la imagen */}
      <div className="absolute inset-0 bg-gradient-to-b from-teal-700 via-teal-700/80 via-10% to-transparent to-60%" />

      {/* Contenedor para posicionar el contenido */}
      <div className="relative h-full flex flex-col items-start justify-end pb-16">
        {/* Título */}
        <h1 className="pl-40 text-7xl font-extrabold text-white">
          TAMI BLOG
        </h1>

        {/* Pestaña con texto adicional*/}
        <div className="mt-4 bg-teal-600/70 text-white w-6/12 p-4 rounded-r-full">
          <p className="pl-36 pr-12 text-base font-semibold">
          En esta sección encontrarás temas sobre diseño de interiores 
          para entornos profesionales, como oficinas, restaurantes, hoteles y eventos especiales, 
          incluyendo tips, artículos, tendencias y 
          consejos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogHero;

