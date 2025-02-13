import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import imgT from "../../../public/assets/images/Nosotros/Nosotros.jpg";
import imgfon from "../../../public/assets/images/Nosotros/productos.png";
import mision from "../../../public/assets/images/Nosotros/objetivo.webp";
import fondo from "../../../public/assets/images/Nosotros/mision.jpeg";
import vision from "../../../public/assets/images/Nosotros/vision.webp";
import Valores from "../components/nosotros/Valores";

const About = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-auto min-h-dvh pt-12 rounded-b-3xl"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${imgT})`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center md:pt-32 sm:pl-10">
          <div className="text-white w-full sm:w-auto text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold whitespace-pre-line">
              SOBRE
              <br />
              NOSOTROS
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl xl:text-4xl mt-6 lg:mt-10 whitespace-normal md:whitespace-pre-line">
              Buscamos ayudar en tu negocio, mediante la
              <br />
              comercialización de productos para
              <br />
              emprendimiento, trabajo y decoración,
              <br />
              cumpliendo con los estándares de calidad
              <br />
            </p>
          </div>
        </div>
      </section>
      <section
        className="relative bg-cover bg-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-b-3xl flex justify-center items-center"
        style={{
          backgroundImage: `url(${imgfon})`,
        }}
      >
        <div className="bg-verde_turquesa text-white text-2xl sm:text-3xl md:text-4xl py-6 sm:py-8 px-8 sm:px-14 rounded-full shadow-lg text-center">
          Acerca de nuestros
          <br />
          <span className="font-bold">propósitos y metas</span>
        </div>
      </section>
      <div
        className="relative flex items-center justify-center h-auto min-h-[570px] bg-cover bg-center py-8 px-4"
        style={{ backgroundImage: `url(${fondo})` }}
      >
        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Contenido */}
        <div className="relative flex flex-col md:flex-row w-full max-w-6xl space-y-8 md:space-y-0 md:space-x-8">
          {/* Bloque de Misión */}
          <div className="text-white text-center md:w-1/2 place-items-center flex flex-row-reverse justify-evenly md:block">
            <img
              src={mision}
              alt="imagen de mision"
              className="w-20 md:w-24 md:mb-4"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Misión
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                Entregar soluciones a <br /> emprendedores peruanos <br /> que
                compartan nuestro <br />
                deseo de crecer
              </p>
            </div>
          </div>

          {/* Bloque de Visión */}
          <div className="text-white text-center md:w-1/2 place-items-center flex flex-row justify-evenly md:block">
            <img
              src={vision}
              alt="imagen de vision"
              className="w-20 md:w-24 md:mb-4"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                Visión
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                Aspiramos a ser la <br /> solución confiable más <br /> valorada
                por nuestros <br />
                clientes
              </p>
            </div>
          </div>
        </div>
      </div>
      <Valores />
      <Footer />
    </>
  );
};

export default About;
