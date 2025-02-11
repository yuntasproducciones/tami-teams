import { lazy, Suspense, useMemo } from "react";
import productos from "../detallesProductos/articulos.json";
const LazySeccionLayer = lazy(() => import("./SeccionLayer"));

export interface Producto {
  id: number;         // Añadido id
  nombreProducto: string;
  stockProducto: number;
  precioProducto: number;
  image: string;     // Añadida la propiedad image
}

const ProductosLayer = () => {
  const seccionesArray = useMemo(() => {
    const secciones = productos.reduce((acc: { [key: string]: Producto[] }, producto) => {
      if (!acc[producto.seccion]) {
        acc[producto.seccion] = [];
      }
      acc[producto.seccion].push({
        id: producto.id,  // Añadido id
        nombreProducto: producto.nombreProducto,
        stockProducto: producto.stockProducto,
        precioProducto: producto.precioProducto,
        image: producto.image
      });
      return acc;
    }, {});

    return Object.entries(secciones).map(([nombreSeccion, productosDeLaSeccion]) => ({
      nombreSeccion,
      productosDeLaSeccion
    }));
  }, []);

  return (
    <section className="w-full grid grid-flow-row auto-rows-auto">
      {seccionesArray.map((seccion, index) => (
        <Suspense key={index}>
          <LazySeccionLayer {...seccion} />
        </Suspense>
      ))}
    </section>
  );
};

export default ProductosLayer;
