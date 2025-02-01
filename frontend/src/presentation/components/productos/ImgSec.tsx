import { useState } from "react";
import img1 from "../../../../public/assets/images/Productos/imagen_productos.png";

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
      image: img1,
      title: "NUESTROS \n PRODUCTOS",
      items: [],
    },
    {
      image: img1,
      subTitulo1: "EMPRENDIMIENTO",
      title: "SELLADORA \n DE VASOS",
      subTitulo2: "Los derrames jamás volverán \n a ser un problema",
      items: [],
    },
    {
      image: img1,
      subTitulo1: "TRABAJO",
      title: "SOLDADORA \n SPARK",
      subTitulo2: "Potencia, versatilidad y resultados \n de calidad con la soldadura SPARK",
      items: [],
    },
    {
      image: img1,
      subTitulo1: "DECORACIÓN",
      title: "VENTILADOR \n HOLOGRÁFICO",
      subTitulo2: "Impulsa tu marca con \n nuestros hologramas",
      items: [],
    },
    {
      image: img1,
      subTitulo1: "EMPRENDIMIENTO",
      title: "SELLADORA \n DE BOTELLAS",
      subTitulo2: "Sella, protege y asegura \n cada botella con presión.",
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
    <section
      className="relative bg-cover bg-center h-[100vh] md:h-[930px] pt-12 headerprueba"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${slides[currentSlide].image})`,
      }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center md:justify-start text-center md:text-left px-6 md:px-40">
        <div className="text-white max-w-3xl mx-auto md:ml-16">
          <h2 className="sm:text-3xl md:text-4xl whitespace-pre-line">
            {slides[currentSlide].subTitulo1}
          </h2>
          <h1 className={`text-3xl sm:text-5xl md:text-8xl font-bold whitespace-pre-line ${currentSlide === 0 ? "text-center" : ""}`}>
            {slides[currentSlide].title}
          </h1>
          <h3 className="sm:text-3xl md:text-4xl font-bold whitespace-pre-line">
            {slides[currentSlide].subTitulo2}
          </h3>
          {slides[currentSlide].subTitulo2 && currentSlide !== 0 && (
            <button className="text-3xl mt-6 px-6 py-4 bg-white text-green-700 font-bold rounded-full shadow-md hover:bg-gray-100 transition">
              Saber más
            </button>
          )}
        </div>
      </div>

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L8 12L16 20" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4L16 12L8 20" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${index === currentSlide ? "bg-white scale-125" : "bg-gray-400 hover:bg-gray-300"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImgSect;

