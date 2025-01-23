import imgfon from "../../../../public/assets/images/productos.png";

function PropositosYMetas() {
  return (
    <section
      className="relative bg-cover bg-center h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-b-3xl flex justify-center items-center"
      style={{
        backgroundImage: `url(${imgfon})`,
      }}
    >
      <div className="bg-teal-400 text-white text-2xl sm:text-3xl md:text-4xl py-6 sm:py-8 px-8 sm:px-14 rounded-full shadow-lg text-center">
        Acerca de nuestros <br /><span className="font-bold">propósitos y metas</span>
      </div>
    </section>
  );
}

export default PropositosYMetas;



  