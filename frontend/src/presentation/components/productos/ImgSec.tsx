import { useState } from "react";
import todosLosProductos from "../../../../public/assets/images/Productos/imagen_productos.png";
import fondoSlider from "../../../../public/assets/images/Productos/fondoProductoSlider.webp";
/* Productos */
import selladoraVasos from "../../../../public/assets/images/Productos/Selladora de Vasos.webp";
import soldadoraSpark from "../../../../public/assets/images/Productos/Soldadora Spark.webp";
import ventiladorHolografico from "../../../../public/assets/images/Productos/Ventilador Holografico.webp";
import selladoraBotellas from "../../../../public/assets/images/Productos/Selladora de Botellas.webp";

interface Slide {
  image: string;
  title: string;
  subTitulo1?: string;
  subTitulo2?: string;
  items?: string[];
}

const ImgSect = () => {
  const slides: Slide[] = [
    {
      image: todosLosProductos,
      title: "NUESTROS\nPRODUCTOS",
      items: [],
    },
    {
      image: selladoraVasos,
      subTitulo1: "EMPRENDIMIENTO",
      title: "SELLADORA\nDE VASOS",
      subTitulo2: "Los derrames jamás volverán\na ser un problema",
      items: [],
    },
    {
      image: soldadoraSpark,
      subTitulo1: "TRABAJO",
      title: "SOLDADORA\nSPARK",
      subTitulo2:
        "Potencia, versatilidad y resultados\nde calidad con la soldadura SPARK",
      items: [],
    },
    {
      image: ventiladorHolografico,
      subTitulo1: "DECORACIÓN",
      title: "VENTILADOR\nHOLOGRÁFICO",
      subTitulo2: "Impulsa tu marca con\nnuestros hologramas",
      items: [],
    },
    {
      image: selladoraBotellas,
      subTitulo1: "EMPRENDIMIENTO",
      title: "SELLADORA\nDE BOTELLAS",
      subTitulo2: "Sella, protege y asegura\ncada botella con presión.",
      items: [],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section
        className="relative bg-cover bg-top h-dvh w-full"
        style={{
          backgroundImage: `url(${
            currentSlide === 0 ? todosLosProductos : fondoSlider
          })`,
        }}
      >
        <div
          className={`absolute w-full h-full sm:px-10 lg:px-24 xl:px-28 2xl:px-52 pb-16 pt-32 grid grid-rows-1  ${
            currentSlide !== 0 ? "grid-cols-2" : "bg-black/35 grid-cols-1"
          }`}
        >
          <div
            className={`text-white place-content-center place-items-center ${
              currentSlide !== 0 ? "text-start" : "text-center"
            }`}
          >
            <div>
              <h2 className="sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-light">
                {slides[currentSlide].subTitulo1}
              </h2>
              <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-extrabold whitespace-pre-line">
                {slides[currentSlide].title}
              </h1>
              <h3 className="sm:text-2xl md:text-3xl xl:text-4xl 2xl:text-6xl font-semibold">
                {slides[currentSlide].subTitulo2}
              </h3>
            </div>
            {slides[currentSlide].subTitulo2 && currentSlide !== 0 && (
              <button className="sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl mt-8 xl:mt-16 2xl:mt-20 px-6 xl:px-10 2xl:px-20 py-2 xl:py-4 2xl:py-6 bg-white text-verde_turquesa font-bold rounded-full shadow-md hover:text-white hover:bg-verde2 transition-all">
                Saber más
              </button>
            )}
          </div>
          <img
            src={`${slides[currentSlide].image}`}
            alt={`Imagen de ${slides[currentSlide].title}`}
            className={`${
              currentSlide === 0 ? "hidden" : ""
            } place-self-center h-1/2 sm:h-full`}
          />
        </div>

        <button
          onClick={handlePrev}
          className="hidden sm:block absolute left-1 lg:left-4 2xl:left-14 top-1/2 transform -translate-y-1/2 text-slate-300 lg:hover:text-white transition-all w-9 lg:w-20 2xl:w-32"
        >
          <svg
            className="w-full h-full"
            style={{ filter: "drop-shadow(2px 1px 5px #000000)" }}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 4L8 12L16 20"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden sm:block absolute right-1 lg:right-4 2xl:right-14 top-1/2 transform -translate-y-1/2 text-slate-300 lg:hover:text-white transition-all w-9 lg:w-20 2xl:w-32"
        >
          <svg
            className="w-full h-full"
            style={{ filter: "drop-shadow(2px 1px 5px #000000)" }}
            width="50"
            height="50"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 4L16 12L8 20"
              stroke="currentColor"
              strokeWidth="0.65"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className="w-2 h-2 lg:w-3 lg:h-3 2xl:w-4 2xl:h-4 rounded-full transition-transform duration-300 disabled:bg-white disabled:scale-150 lg:disabled:scale-125 bg-gray-400 hover:bg-gray-300"
              disabled={index === currentSlide}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default ImgSect;
