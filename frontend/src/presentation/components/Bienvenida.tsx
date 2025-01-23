// Importación de imágenes
import manoIA from "../../../public/assets/images/MANO_IA.webp";
import tecnologia_fondo from "../../../public/assets/images/tecnologia_fondo.gif";
import circuitos from "../../../public/assets/images/VECTOR-03.webp";

/**
 * Componente Bienvenida
 *
 * Este componente renderiza la sección de bienvenida de la página,
 * que incluye un banner con texto superpuesto y una sección principal
 * con una imagen de una mano robótica y un mensaje de bienvenida.
 */
const Bienvenida = () => {
    return (
        <section className="w-full pb-12 2xl:pb-24">
            {/* Banner superior con texto superpuesto */}
            <div className="relative flex justify-center items-center h-20 md:h-32 2xl:h-40">
                {/* Texto superpuesto */}
                <h3 className="bg-verde2/50 w-full h-full z-10 text-white text-sm md:text-lg 2xl:text-2xl font-bold text-center content-center px-3">
                    Comprometidos con el
                    <br />
                    emprendedor peruano, ofreciendo
                    <br />
                    productos asequibles
                </h3>
                {/* Imagen de fondo del banner */}
                <img
                    src={tecnologia_fondo}
                    className="absolute w-full h-full object-cover z-0"
                    alt="Fondo tecnológico"
                />
            </div>

            {/* Sección principal con imagen de mano robótica y mensaje de bienvenida */}
            <div className="relative grid justify-center items-center w-full py-16">
                <div
                    style={{ backgroundColor: "#009f9d" }}
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 z-10 h-36 rounded-b-[60px]"
                ></div>
                <img
                    src={circuitos}
                    alt="circuitos"
                    className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-full object-cover"
                />
                {/* Imagen de mano robótica */}
                <img
                    src={manoIA}
                    className="hidden absolute bottom-0 left-0 top-40 sm:inline sm:w-4/12 lg:w-[37%] xl:w-[40%] 2xl:w-[36%] z-30"
                    alt="Mano robótica"
                />
                {/* Contenedor del mensaje de bienvenida */}
                <div
                    style={{ backgroundColor: "#168385" }}
                    className="place-self-center text-white rounded-[50px] py-6 px-10 text-center w-3/5 z-20"
                >
                    {/* Título de bienvenida */}
                    <h3 className="text-xs md:text-xl mb-2 font-light 2xl:text-3xl">
                        ¡Bienvenidos a <span className="font-bold">TAMI!</span>
                    </h3>
                    {/* Subtítulo principal */}
                    <div className="italic font-bold mb-3 text-2xl md:text-5xl 2xl:text-7xl">
                        Tecnología <span className="font-light text-2xl">e</span>
                        <br />
                        innovación <br />
                        <span className="font-light">para ti</span>
                    </div>
                    {/* Línea separadora */}
                    <hr className="place-self-center w-24 border-white border-[1px] mb-5" />
                    {/* Descripción */}
                    <p className="font-light place-self-center w-full md:w-2/4 text-xs md:text-base 2xl:text-3xl">
                        Ofrecemos calidad y soluciones avanzadas para mejorar y equipar tu
                        negocio y hogar de manera eficiente
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Bienvenida;
