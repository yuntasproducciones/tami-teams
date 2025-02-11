import circuitosFondo from "/Productos/circuitos_productos.webp";
import ProductCard from "./ProductCard";
import { Producto } from "./ProductosLayer";

export interface Seccion {
  nombreSeccion: string;
  productosDeLaSeccion: Producto[];
}

const SeccionLayer = ({ nombreSeccion, productosDeLaSeccion }: Seccion) => {
  return (
    <section
      className="relative bg-center bg-cover py-10"
      style={{ backgroundImage: `url(${circuitosFondo})` }}
    >
      <div className="relative w-4/5 place-self-center">
        <h2 className="text-white bg-verde_turquesa px-6 py-2 w-fit rounded-full text-3xl font-bold">
          {nombreSeccion}
        </h2>
        <div className={`flex flex-wrap justify-between`}>
          {productosDeLaSeccion.map((producto, index) => (
            <ProductCard key={`${nombreSeccion}-${index}`} {...producto} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SeccionLayer;
