import mision from "../../../../public/assets/images/mision.jpeg";

const Mision = () => {
    return (
        <div
            className="relative flex items-center justify-center h-[570px] bg-cover bg-center"
            style={{ backgroundImage: `url(${mision})` }}>

            {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Contenido */}
      <div className="relative flex  w-full max-w-6xl">

        {/* Bloque de Misión */}
        <div className="text-white text-center md:w-1/2">
          <h2 className="text-5xl font-bold mb-4">Misión</h2>
          <p className="text-lg text-4xl leading-tight">
            Entregar soluciones a <br /> emprendedores peruanos <br /> que compartan nuestro <br />
            deseo de crecer
          </p>
        </div>

        {/* Bloque de Visión */}
            <div className="text-white text-center md:w-1/2">
                <h2 className="text-5xl font-bold mb-4">Visión</h2>
                <p className="text-lg text-4xl leading-tight">
                    Aspiramos a ser la <br /> solución confiable más <br /> valorada por nuestros <br />
                    clientes
                </p>
            </div>
        </div>
</div>
);
};

export default Mision;
