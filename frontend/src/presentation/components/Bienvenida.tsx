// Importación de imágenes
import manoIA from "../../../public/assets/images/MANO_IA.png";
import tecnologia_fondo from "../../../public/assets/images/tecnologia_fondo.gif";

/**
 * Componente Bienvenida
 *
 * Este componente renderiza la sección de bienvenida de la página,
 * que incluye un banner con texto superpuesto y una sección principal
 * con una imagen de una mano robótica y un mensaje de bienvenida.
 */
const Bienvenida = () => {
    return (
        <>
            <section className="w-full py-12">
                {/* Banner superior con texto superpuesto */}
                <div className="relative flex justify-center items-center h-32">
                    {/* Texto superpuesto */}
                    <h3
                        style={{ backgroundColor: "rgba(24, 132, 132, .6)" }}
                        className="w-full h-full z-10 text-white text-xl font-bold text-center content-center px-3"
                    >
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
                <div className="relative flex justify-center items-center w-full py-16">
                    {/* Imagen de mano robótica */}
                    <img
                        src={manoIA}
                        className="hidden sm:block absolute left-0 sm:w-44 md:w-64 lg:w-96 xl:w-[32.2rem] top-1/2 transform -translate-y-1/2"
                        alt="Mano robótica"
                    />
                    {/* Contenedor del mensaje de bienvenida */}
                    <div
                        style={{ backgroundColor: "#168385" }}
                        className="w-96 text-white rounded-[50px] py-6 px-10 text-center"
                    >
                        {/* Título de bienvenida */}
                        <h3 className="text-xl mb-2 font-light">
                            ¡Bienvenidos a <span className="font-bold">TAMI!</span>
                        </h3>
                        {/* Subtítulo principal */}
                        <div className="text-5xl italic font-bold mb-3">
                            Tecnología <span className="font-light text-2xl">e</span> innovación{" "}
                            <br />
                            <span className="font-light">para ti</span>
                        </div>
                        {/* Línea separadora */}
                        <hr className="place-self-center w-24 border-white border-[1px] mb-5" />
                        {/* Descripción */}
                        <p className="font-light">
                            Ofrecemos calidad y soluciones avanzadas para mejorar y equipar tu
                            negocio y hogar de manera eficiente
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Bienvenida;