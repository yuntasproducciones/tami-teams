import React from "react";

// Ajusta aquí las rutas de tus imágenes
import BANNER from "../../../public/assets/images/blog/Bambu.jpg";
import PANEL_BAMBU from "../../../public/assets/images/blog/Bambu.jpg";
import VIDEO_THUMB from "../../../public/assets/images/blog/Bambu.jpg";

const PanelFibraBambu: React.FC = () => {
  return (
    // Fondo general en tono claro
    <div className="bg-teal-50 flex flex-col min-h-screen">

      {/* =========================================
          SECCIÓN HERO
      ========================================== */}
      <header className="relative w-full h-[30rem]">
        <img
          src={BANNER}
          alt="Fondo de construcción con bambú"
          className="w-full h-full object-cover"
        />
        {/* Overlay para oscurecer la imagen y alinear texto a la izquierda */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-start justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              Panel de fibra de bambú
            </h1>
            <p className="text-white text-xl md:text-2xl">
              Sostenibilidad y estética para la construcción moderna.
            </p>
          </div>
        </div>
      </header>

      {/* =========================================
          CONTENEDOR UNIFICADO (Contenido + Video)
      ========================================== */}
      <main className="relative z-10 -mt-24 flex-grow max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-lg">

        {/* Fecha / Hora de publicación */}
        <div className="inline-block px-3 py-1 bg-teal-600 text-white text-sm rounded-full mb-4">
          Fecha / Hora de publicación
        </div>

        {/* Título principal */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
          Panel Fibra de Bambú
        </h2>

        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          La clave para una construcción sostenible y eficiente
        </p>

        {/* Primer bloque: imagen + texto */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-start">
            <img
              src={PANEL_BAMBU}
              alt="Panel de Fibra de Bambú"
              className="w-full md:w-1/2 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-6"
            />
            <div className="md:w-1/2">
              <p className="text-gray-700 text-lg md:text-xl mb-4">
                El bambú ha revolucionado la industria de la arquitectura y el
                diseño sostenible, destacando por su gran resistencia,
                estabilidad estructural y bajo impacto ambiental. A diferencia
                de la madera tradicional, el bambú es un material renovable y
                crece hasta cuatro veces más rápido que los árboles comunes, lo
                que lo convierte en una opción ideal para proyectos que buscan
                reducir su huella de carbono.
              </p>
              <p className="text-gray-500 text-sm italic">
                <strong>Créditos de imagen:</strong> Banco de imágenes /
                Fotografía de referencia
              </p>
            </div>
          </div>
        </section>

        {/* Segundo bloque: texto + imagen (invertido) */}
        <section className="mb-10">
          <div className="flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
              <p className="text-gray-700 text-lg md:text-xl mb-4">
                Los paneles de fibra de bambú son la opción perfecta para
                quienes buscan la combinación ideal entre sostenibilidad,
                resistencia y diseño elegante. Su fabricación con materiales
                ecológicos garantiza un bajo impacto ambiental, sin comprometer
                la durabilidad y las prestaciones técnicas requeridas en
                diferentes entornos.
              </p>
              <p className="text-gray-700 text-lg md:text-xl mb-4">
                Compatibles en revestimientos interiores y exteriores, estos
                paneles ofrecen aislamiento térmico y acústico superior,
                manteniendo la estética natural del bambú. Son la alternativa
                ideal para arquitectos, diseñadores y proyectos de arquitectura
                sostenible.
              </p>
              <p className="text-gray-500 text-sm italic">
                <strong>Créditos de imagen:</strong> Banco de imágenes /
                Fotografía de referencia
              </p>
            </div>

            {/* Imagen */}
            <img
              src={PANEL_BAMBU}
              alt="Panel de Fibra de Bambú"
              className="w-full md:w-1/2 h-auto rounded-lg object-cover"
            />
          </div>
        </section>

        {/* =========================================
            BLOQUE DE VIDEO DENTRO DEL MAIN
        ========================================== */}
        <section className="bg-teal-700 p-6 rounded-lg mb-10 text-center">
          <h1 className="text-white md:text-xl font-bold mb-4" >
            CÓMO UTILIZAR NUESTRO PRODUCTO
          </h1>
          <div className="relative w-full h-[30rem]">
            <img
              src={VIDEO_THUMB}
              alt="Miniatura de video"
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Ícono de Play centrado */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 rounded-full p-4">
                <span className="text-2xl text-gray-800">▶</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* =========================================
          SECCIÓN DE CONCLUSIÓN / CTA
      ========================================== */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-teal-600 mb-4">
          ¡Transforma tus espacios de manera sostenible!
        </h3>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          Descubre por qué el bambú es la alternativa ecológica más versátil
          para proyectos de construcción y decoración.
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
          Contáctanos
        </button>
      </section>
    </div>
  );
};

export default PanelFibraBambu;
