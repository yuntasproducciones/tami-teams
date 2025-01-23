import imgT from "../../../../public/assets/images/imagen_productos.png";

const ImgSec = () => {
  return (
    <section
      className="relative bg-cover bg-center h-auto min-h-[1024px] pt-12 rounded-b-3xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${imgT})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-4 lg:pl-[200px]">
        <div className="text-white w-full sm:w-auto text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold whitespace-pre-line">
            NUESTROS {'\n'}PRODUCTOS
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mt-6 lg:mt-10 whitespace-pre-line">
            Buscamos ayudar en tu negocio, mediante la {'\n'}
            comercialización de productos para {'\n'}
            emprendimiento, trabajo y decoración, {'\n'}
            cumpliendo con los estándares de calidad y {'\n'}
            satisfacción del cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ImgSec;