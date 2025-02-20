import { useState, useEffect } from "react";
import imgT from "../../../../public/assets/images/home_carrusell_1.webp";
import imgA from "../../../../public/assets/images/home_carrusell_2.webp";
import imgD from "../../../../public/assets/images/home_carrusell_3.webp";

interface Slide {
  image: string;
  title: string;
  items?: string[];
}

const Hero = () => {
  const slides: Slide[] = [
    {
      image: imgT,
      title: "Innovación y\nsoluciones para\ncada proyecto",
      items: [],
    },
    {
      image: imgA,
      title: "Equipos de alta\ntecnología para\nimpulsar tu negocio",
      items: [],
    },
    {
      image: imgD,
      title: "Herramientas\ntecnología que\nmarcan la diferencia",
      items: [],
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [fade, setFade] = useState(true);

  const changeSlide = (next: boolean) => {
    setFade(false);
    setTimeout(() => {
      setCurrentSlide((prev) => (next ? (prev + 1) % slides.length : (prev - 1 + slides.length) % slides.length));
      setFade(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      changeSlide(true);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className={`relative bg-cover bg-center h-dvh pt-32 transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${slides[currentSlide].image})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center md:items-start px-4 md:px-[200px] text-center md:text-center lg:text-left">
        <div className="text-white">
          <h1 className="text-2xl md:text-5xl lg:text-7xl font-bold whitespace-pre-line">
            {slides[currentSlide].title}
          </h1>
          <ul className="mt-3 md:mt-8">
            {slides[currentSlide].items?.map((item: string, index: number) => (
              <li key={index} className="text-sm md:text-lg">
                {item}
              </li>
            ))}
          </ul>
          <button className="mt-4 md:mt-6 text-teal-600 text-lg md:text-2xl bg-white px-4 md:px-8 py-2 md:py-4 rounded-xl hover:bg-teal-800 font-bold">
            Descubre más
          </button>
        </div>
      </div>

      <button
        onClick={() => changeSlide(false)}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16 4L8 12L16 20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <button
        onClick={() => changeSlide(true)}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded hover:bg-opacity-75"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 4L16 12L8 20"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
};

export default Hero;


