import { useState } from "react";
import bg_2 from "../../../public/assets/images/home_carrusell_4.webp";
import bg_1 from "../../../public/assets/images/home_carrusell_5.webp";
import bg_3 from "../../../public/assets/images/home_carrusell_6.webp";
import { Card, iCard } from "./Card";

const cardsList: iCard[] = [
  {
    title: "TRABAJO",
    paragraph:
      "Equipos diseñados para\n optimizar y agilizar tus\n procesos laborales.",
    image: bg_1,
  },
  {
    title: "DECORACIÓN Y HOGAR",
    paragraph:
      "Productos que combinan\n funcionalidad y estilo para\n tu espacio.",
    image: bg_2,
  },
  {
    title: "NEGOCIO",
    paragraph:
      "Herramientas innovadoras\n que impulsan el crecimiento\n de tu negocio.",
    image: bg_3,
  },
];

function MainSection() {
  const [currentCard, setCurrentCard] = useState(0);

  return (
    <section className="w-full h-[65vh] px-10 my-10 place-items-center">
      {/* Carrusel para pantallas más pequeñas */}
      <div className="w-full h-full flex flex-col items-center justify-center md:hidden">
        {/* Contenedor de las tarjetas */}
        <div className="relative h-full w-full overflow-hidden">
          {cardsList.map((card, index) => (
            <div
              key={index}
              className={`absolute top-0 w-full h-full  flex items-center justify-center transition-transform duration-500 ${
                index === currentCard ? "translate-y-0" : "translate-y-full"
              } ${index < currentCard ? "-translate-y-full" : ""}`}
            >
              <Card {...card} />
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center gap-3">
          {cardsList.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentCard(index)}
              className="w-4 h-4 rounded-full transition-transform duration-300 bg-verde2/50 hover:bg-verde2 disabled:bg-verde_turquesa disabled:scale-125"
              disabled={index === currentCard}
            />
          ))}
        </div>
      </div>
      {/* Vista normal para pantallas medianas o más grandes */}
      <div className="hidden md:grid md:grid-flow-col md:auto-cols-auto w-full h-full items-center justify-items-center">
        {cardsList.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </section>
  );
}

export default MainSection;
