import imgfon from "../../../../public/assets/images/productos.png";

function PropositosYMetas() {
  return (
    <section
      className="relative bg-cover bg-center h-[350px] rounded-b-3xl flex justify-center items-center"
      style={{
        backgroundImage: `url(${imgfon})`,
      }}
    >
      <div className="bg-teal-400 text-white text-4xl py-8 px-14 rounded-full shadow-lg">
        Acerca de nuestros <br/><span className="font-bold">propósitos y metas</span>
      </div>
    </section>
  );
}

export default PropositosYMetas;



  