import logoBlanco from "../../../public/assets/images/Logos/logo_blanco.webp";
import logoVerde from "../../../public/assets/images/Logos/logo_verde.webp";
import fondoMd from "../../../public/assets/images/SECCION COMENTARIO/fondo_nosotros.webp";
import fondo365 from "../../../public/assets/images/SECCION COMENTARIO/fondo_nosotros_2.webp";
import mascota from "../../../public/assets/images/Logos/mascota_tami.webp";

const PorQueNosotros = () => {
  return (
    <section className="relative w-full flex xs:grid xs:grid-cols-2 py-4 justify-center text-center items-center xs:justify-normal xs:text-start text-white h-52 xs:h-fit">
      <img
        src={fondoMd}
        alt="fondo de la sección por que TAMI"
        className="hidden md:block absolute w-full h-full z-0 object-cover object-center"
      />
      <img
        src={fondo365}
        alt="fondo de la sección por que TAMI"
        className="md:hidden absolute w-full h-full z-0 object-cover object-top"
      />
      <div className="ps-1 md:ps-4 place-self-center flex flex-col justify-center z-20">
        <h3 className="text-black md:text-white text-sm sm:text-base md:text-lg lg:text-2xl xl:text-4xl 2xl:text-5xl font-semibold">
          ¿POR QUÉ ELEGIR
        </h3>
        <h3 className="text-verde_turquesa md:text-white font-extrabold mb-4 sm:mb-3 text-5xl/7 lg:text-8xl/[3.5rem] xl:text-9xl/[5rem]  lg:mb-6 xl:mb-8">
          TAMI?
        </h3>
        <p className="text-black md:text-white font-semibold text-sm md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl px-2 xs:p-0">
          Calidad respaldada por nuestra garantía, mostrando nuestro compromiso
          con la satisfacción de nuestros clientes.
        </p>
      </div>
      <img
        src={logoBlanco}
        alt="Logo Blanco de Tami"
        className="hidden md:block w-1/2 place-self-center z-10"
      />
      <img
        src={mascota}
        alt="Mascota de Tami"
        className="hidden img-xs:block w-5/6 place-self-center z-10"
      />
      <img
        src={logoVerde}
        alt="Logo Verde de Tami"
        className="absolute w-48 xs:hidden z-10 opacity-25"
      />
    </section>
  );
};

export default PorQueNosotros;
