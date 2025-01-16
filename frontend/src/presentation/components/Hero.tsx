import { useState } from "react";
import imgT from '../../../public/assets/images/home_carrusell_1.webp';

const Hero = () => {
  const slides = [
    {
      image: {imgT},
      title: "Herramientas tecnología que marcan la diferencia",
      items: ["✅ Ventilador holográfico", "✅ Purificador de agua"],
    },
    {
      image: "../assets/images/HOME_Carrusel_1.webp",
      title: "Innovación en tu hogar",
      items: ["✅ Aspiradora inteligente", "✅ Sistema de seguridad avanzado"],
    },
    {
      image: "/assets/images/HOME_Carrusel_1.webp",
      title: "Soluciones sostenibles",
      items: ["✅ Panel solar", "✅ Purificador de aire"],
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
      className="relative bg-cover bg-center h-[860px]"
      style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold">{slides[currentSlide].title}</h1>
          <ul className="mt-4">
            {slides[currentSlide].items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <button className="mt-6 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
            Descubre más
          </button>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
      >
        ❮
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded hover:bg-opacity-75"
      >
        ❯
      </button>
    </section>
  );
};

export default Hero;
