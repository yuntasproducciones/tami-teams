import logo from "../../../public/assets/logos/logo_blanco.webp";
import fondo from "../../../public/assets/images/SECCION COMENTARIO/fondo_nosotros.webp";

const PorQueNosotros = () => {
    return (
        <section className="relative w-full grid grid-cols-2 py-4 text-white">
            <img
                src={fondo}
                alt="fondo de la sección por que TAMI"
                className="absolute w-full h-full z-0 object-cover object-center"
            />
            <div className="w-11/12 place-self-center flex flex-col justify-center z-10">
                <h3 className="text-xs sm:text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl font-semibold">
                    ¿POR QUÉ ELEGIR
                </h3>
                <h3 className="font-extrabold text-4xl/6 sm:text-5xl/7 sm:mb-3 lg:text-8xl/[3.5rem] xl:text-9xl/[5rem] mb-2 lg:mb-6 xl:mb-8">
                    TAMI?
                </h3>
                <p className="font-semibold text-[0.55rem] lg:text-sm xl:text-xl 2xl:text-3xl">
                    Calidad respaldada por nuestra garantía, mostrando nuestro compromiso
                    con la satisfacción de nuestros clientes.
                </p>
            </div>
            <img
                src={logo}
                alt="Logo Verde de Tami"
                className="w-1/2 place-self-center z-10"
            />
        </section>
    );
};

export default PorQueNosotros;

