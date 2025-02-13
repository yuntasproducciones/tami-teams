import Valor from "../../../core/entity/Valor.nosotros";

const ValorCard = (valor: Valor) => {
  return (
    <div className="relative w-11/12 bg-white shadow-lg rounded-xl overflow-hidden my-4">
      <img
        src={valor.imagen}
        alt={valor.titulo}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-teal-800 to-transparent opacity-75"></div>
      <div className="absolute bottom-4 left-0 w-full text-white text-center px-4 flex flex-col justify-center items-center h-[100px] sm:h-[120px] md:h-[150px]">
        <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold">
          {valor.titulo}
        </h3>
        <p className="text-sm sm:text-base md:text-lg font-bold">
          {valor.descripcion}
        </p>
      </div>
    </div>
  );
};

export default ValorCard;
