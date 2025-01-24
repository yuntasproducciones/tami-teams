import imgT from "../../../../public/assets/images/imagen_productos.png";

const ImgSec = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen md:h-[1024px] pt-12 rounded-b-3xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${imgT})`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-pre-line leading-tight">
          NUESTROS {'\n'}PRODUCTOS
        </h1>
      </div>
    </section>
  );
};

export default ImgSec;
