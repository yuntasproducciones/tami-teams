import mision from "../../../../public/assets/images/Nosotros/objetivo.webp";
import fondo from "../../../../public/assets/images/Nosotros/mision.jpeg";
import vision from "../../../../public/assets/images/Nosotros/vision.webp";

const Mision = () => {
  return (
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
  );
};

export default Mision;
