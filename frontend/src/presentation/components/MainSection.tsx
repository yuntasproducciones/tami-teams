import bg_2 from "../../../public/assets/images/home_carrusell_4.webp";
import bg_1 from "../../../public/assets/images/home_carrusell_5.webp";
import bg_3 from "../../../public/assets/images/home_carrusell_6.webp";
import { Card, iCard } from "./ui/cards-inicio/Card";
import CardSlider from "./ui/cards-inicio/CardSlider";

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
  return (
    <section className="w-full h-96 lg:px-10 my-8 place-items-center">
      {/* Carrusel para pantallas más pequeñas */}
      <CardSlider cardList={cardsList} />
      {/* Vista normal para pantallas medianas o más grandes */}
      <div className="hidden lg:grid lg:grid-flow-col lg:auto-cols-auto w-full h-full items-center justify-items-center">
        {cardsList.map((card) => (
          <Card
            title={card.title}
            image={card.image}
            paragraph={card.paragraph}
          />
        ))}
      </div>
    </section>
  );
}

export default MainSection;
