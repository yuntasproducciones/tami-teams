import responsabilidadImg from "../../../../public/assets/images/Nosotros/img1.png";
import calidadServicioImg from "../../../../public/assets/images/Nosotros/img2.png";
import transparenciaImg from "../../../../public/assets/images/Nosotros/img3.png";
import compromisoImg from "../../../../public/assets/images/Nosotros/img4.png";
import Valor from "../../../core/entity/Valor.nosotros";
import ValorCard from "./ValorCard";

const valores: Valor[] = [
  {
    titulo: "RESPONSABILIDAD",
    descripcion: "Con nuestros empleados y la sociedad.",
    imagen: responsabilidadImg,
  },
  {
    titulo: "CALIDAD DE SERVICIO",
    descripcion: "Nuestra característica principal.",
    imagen: calidadServicioImg,
  },
  {
    titulo: "TRANSPARENCIA",
    descripcion: "En nuestras acciones.",
    imagen: transparenciaImg,
  },
  {
    titulo: "COMPROMISO",
    descripcion: "En ofrecer la máxima calidad en nuestros productos.",
    imagen: compromisoImg,
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
          <ValorCard key={index} {...valor} />
        ))}
      </div>
    </div>
  );
}

export default Valores;
