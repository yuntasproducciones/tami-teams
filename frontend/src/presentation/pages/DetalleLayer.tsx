import React from "react";

// Tipos de datos (opcional, para TypeScript)
interface ContentBlock {
  type: string;
  layout: "imageLeft" | "textLeft";
  image: string;
  text: string;
  imageCredits: string;
}

interface VideoBlock {
  title: string;
  videoThumbnail: string;
  videoDescription: string;
}

interface CTA {
  title: string;
  description: string;
  buttonText: string;
}

interface ContentData {
  hero: {
    bannerImage: string;
    title: string;
    subtitle: string;
  };
  publicationDate: string;
  title: string;
  subtitle: string;
  contentBlocks: ContentBlock[];
  videoBlock: VideoBlock;
  cta: CTA;
}

// JSON de datos falsos
const contentData: ContentData = {
  hero: {
    bannerImage: "/assets/images/blog/Bambu.jpg",
    title: "Panel de fibra de bambú",
    subtitle: "Sostenibilidad y estética para la construcción moderna."
  },
  publicationDate: "12 de marzo, 2025 - 10:00 AM",
  title: "Panel Fibra de Bambú",
  subtitle: "La clave para una construcción sostenible y eficiente",
  contentBlocks: [
    {
      type: "textImage",
      layout: "imageLeft",
      image: "/assets/images/blog/Bambu.jpg",
      text: "El bambú ha revolucionado la industria de la arquitectura y el diseño sostenible, destacando por su gran resistencia, estabilidad estructural y bajo impacto ambiental. A diferencia de la madera tradicional, el bambú es un material renovable y crece hasta cuatro veces más rápido que los árboles comunes, lo que lo convierte en una opción ideal para proyectos que buscan reducir su huella de carbono.",
      imageCredits: "Banco de imágenes / Fotografía de referencia"
    },
    {
      type: "textImage",
      layout: "textLeft",
      image: "/assets/images/blog/Bambu.jpg",
      text: "Los paneles de fibra de bambú son la opción perfecta para quienes buscan la combinación ideal entre sostenibilidad, resistencia y diseño elegante. Su fabricación con materiales ecológicos garantiza un bajo impacto ambiental, sin comprometer la durabilidad y las prestaciones técnicas requeridas en diferentes entornos. Compatibles en revestimientos interiores y exteriores, estos paneles ofrecen aislamiento térmico y acústico superior, manteniendo la estética natural del bambú.",
      imageCredits: "Banco de imágenes / Fotografía de referencia"
    }
  ],
  videoBlock: {
    title: "CÓMO UTILIZAR NUESTRO PRODUCTO",
    videoThumbnail: "/assets/images/blog/Bambu.jpg",
    videoDescription: "Una correcta instalación maximiza el desempeño y la vida útil de los paneles. Si deseas profundizar en detalles técnicos o resolver dudas, contáctanos para recibir asesoría especializada."
  },
  cta: {
    title: "¡Transforma tus espacios de manera sostenible!",
    description: "Descubre por qué el bambú es la alternativa ecológica más versátil para proyectos de construcción y decoración.",
    buttonText: "Contáctanos"
  }
};

const PanelFibraBambuCMS: React.FC = () => {
  return (
    <div className="bg-teal-50 flex flex-col min-h-screen">
      {/* SECCIÓN HERO */}
      <header className="relative w-full h-[30rem]">
        <img
          src={contentData.hero.bannerImage}
          alt="Fondo de construcción con bambú"
          className="w-full h-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 flex flex-col items-start justify-center">
          <div className="max-w-6xl mx-auto px-4">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              {contentData.hero.title}
            </h1>
            <p className="text-white text-xl md:text-2xl">
              {contentData.hero.subtitle}
            </p>
          </div>
        </div>
      </header>

      {/* CONTENEDOR UNIFICADO (Contenido + Video) */}
      <main className="relative z-10 -mt-24 flex-grow max-w-6xl mx-auto px-4 py-10 bg-white rounded-lg shadow-lg mb-10">
        {/* Fecha / Hora de publicación */}
        <div className="inline-block px-3 py-1 bg-teal-600 text-white text-sm rounded-full mb-4">
          {contentData.publicationDate}
        </div>

        {/* Título y Subtítulo */}
        <h2 className="text-3xl md:text-4xl font-bold text-teal-600 mb-2">
          {contentData.title}
        </h2>
        <p className="text-xl md:text-2xl text-gray-700 mb-6">
          {contentData.subtitle}
        </p>

        {/* Bloques de contenido */}
        {contentData.contentBlocks.map((block, index) => (
          <section className="mb-10" key={index}>
            {block.layout === "imageLeft" ? (
              <div className="flex flex-col md:flex-row items-start">
                <img
                  src={block.image}
                  alt="Imagen del bloque"
                  className="w-full md:w-1/2 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-6"
                />
                <div className="md:w-1/2">
                  <p className="text-gray-700 text-lg md:text-xl mb-4">
                    {block.text}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    <strong>Créditos de imagen:</strong> {block.imageCredits}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col md:flex-row items-start">
                <div className="md:w-1/2 md:pr-6 mb-6 md:mb-0">
                  <p className="text-gray-700 text-lg md:text-xl mb-4">
                    {block.text}
                  </p>
                  <p className="text-gray-500 text-sm italic">
                    <strong>Créditos de imagen:</strong> {block.imageCredits}
                  </p>
                </div>
                <img
                  src={block.image}
                  alt="Imagen del bloque"
                  className="w-full md:w-1/2 h-auto rounded-lg object-cover"
                />
              </div>
            )}
          </section>
        ))}

        {/* Bloque de video */}
        <section className="bg-teal-700 p-6 rounded-lg mb-10">
          <h1 className="text-white md:text-xl font-bold mb-4">
            {contentData.videoBlock.title}
          </h1>
          <div className="relative w-full h-[30rem]">
            <img
              src={contentData.videoBlock.videoThumbnail}
              alt="Miniatura de video"
              className="w-full h-full object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white bg-opacity-70 rounded-full p-4">
                <span className="text-2xl text-gray-800">▶</span>
              </div>
            </div>
          </div>
          <p className="text-white text-lg md:text-xl mt-4">
            {contentData.videoBlock.videoDescription}
          </p>
        </section>
      </main>

      {/* SECCIÓN CTA */}
      <section className="max-w-6xl mx-auto px-4 py-10 text-center">
        <h3 className="text-2xl md:text-3xl font-bold text-teal-600 mb-4">
          {contentData.cta.title}
        </h3>
        <p className="text-gray-700 text-lg md:text-xl mb-6">
          {contentData.cta.description}
        </p>
        <button className="bg-teal-600 text-white px-6 py-3 rounded-full hover:bg-teal-700 transition">
          {contentData.cta.buttonText}
        </button>
      </section>
    </div>
  );
};

export default PanelFibraBambuCMS;
