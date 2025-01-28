import { useState } from "react";
import imgT from "../../../../public/assets/images/imagen_productos.png";

interface Slide {
  image: string;
  title: string;
  items?: string[];
}

const ImgSect = () => {
  const slides: Slide[] = [
    {
      image: imgT,
      title: "NUESTROS \n PRODUCTOS",
      items: [],
    },
    {
      image: imgT,
      title: "Equipos de alta \n tecnología para \n impulsar tu negocio",
      items: [],
    },
    {
      image: imgT,
      title: "Herramientas \n tecnología que \n marcan la diferencia",
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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center px-5">
        <div className="text-white max-w-3xl">
          <h1 className="text-3xl md:text-8xl sm:text-4xl font-bold whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <ul className="mt-5 text-xl md:text-lg sm:text-base">
            {slides[currentSlide].items?.map((item: string, index: number) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>  
      </div>

      <button onClick={handlePrev} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 4L8 12L16 20" stroke="white" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button onClick={handleNext} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75">
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 4L16 12L8 20" stroke="white"  strokeWidth="0.5"  strokeLinecap="round"  strokeLinejoin="round" />
        </svg>
      </button>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-transform duration-300 ${
              index === currentSlide
                ? "bg-white scale-125"
                : "bg-gray-400 hover:bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default ImgSect;
