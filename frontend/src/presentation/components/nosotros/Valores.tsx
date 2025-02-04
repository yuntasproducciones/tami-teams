import img11 from "../../../../public/assets/images/Nosotros/img1.png";
import img12 from "../../../../public/assets/images/Nosotros/img2.png";
import img13 from "../../../../public/assets/images/Nosotros/img3.png";
import img14 from "../../../../public/assets/images/Nosotros/img4.png";

type Valor = {
  titulo: string;
  descripcion: string;
  imagen: string;
};

const valores: Valor[] = [
  {
    titulo: "RESPONSABILIDAD",
    descripcion: "Con nuestros empleados y la sociedad.",
    imagen: img11,
  },
  {
    titulo: "CALIDAD DE SERVICIO",
    descripcion: "Nuestra característica principal.",
    imagen: img12,
  },
  {
    titulo: "TRANSPARENCIA",
    descripcion: "En nuestras acciones.",
    imagen: img13,
  },
  {
    titulo: "COMPROMISO",
    descripcion: "En ofrecer la máxima calidad en nuestros productos.",
    imagen: img14,
  },
];

function Valores() {
  return (
    <div className="bg-white py-12 px-6">
      <h2 className="text-left text-teal-600 text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10">
        VALORES
      </h2>
      <div className="grid grid-flow-row grid-rows-2 grid-cols-2 lg:grid-cols-4 lg:gap-4 lg:grid-rows-1 lg:h-96 justify-items-center">
        {valores.map((valor, index) => (
          <div
            key={index}
            className="relative w-11/12 bg-white shadow-lg rounded-xl overflow-hidden my-4"
          >
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
        ))}
      </div>
    </div>
  );
}

export default Valores;
