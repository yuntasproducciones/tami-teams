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

    const handleNext = () => {
        setCurrentCard((prevIndex) =>
            prevIndex !== cardsList.length - 1 ? prevIndex + 1 : prevIndex
        );
    };

    const handlePrev = () => {
        setCurrentCard((prevIndex) =>
            prevIndex === 0 ? prevIndex : prevIndex - 1
        );
    };

    return (
        <section className="w-full h-[65vh] px-10 my-10 place-items-center">
            {/* Carrusel para pantallas más pequeñas */}

            <div className="w-full h-full flex flex-col items-center justify-center md:hidden relative">
                {/* Botón superior */}
                <button
                    onClick={handlePrev}
                    disabled={currentCard === 0}
                    className="z-10 absolute top-0 left-1/2 transform -translate-x-1/2 p-1 w-10 h-10 flex items-center justify-center bg-verde_turquesa/75 text-white rounded-full shadow-lg hover:bg-verde_turquesa transition-all disabled:opacity-50"
                >
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 16L12 8L20 16"
                            stroke="white"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
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
                {/* Botón inferior */}
                <button
                    onClick={handleNext}
                    disabled={currentCard === cardsList.length - 1}
                    className="absolute bottom-0 left-1/2 p-1 transform -translate-x-1/2 w-10 h-10 flex items-center justify-center bg-verde_turquesa/75 text-white rounded-full shadow-lg hover:bg-verde_turquesa transition-all disabled:opacity-50"
                >
                    <svg
                        width="50"
                        height="50"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4 8L12 16L20 8"
                            stroke="white"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </button>
            </div>
            {/* Vista normal para pantallas medianas o más grandes */}
            <div className="hidden md:grid md:grid-flow-row md:auto-rows-auto lg:grid-flow-col md:auto-cols-auto w-full h-full items-center justify-items-center">
                {cardsList.map((card, index) => (
                    <Card key={index} {...card} />
                ))}
            </div>
        </section>
    );
}

export default MainSection;