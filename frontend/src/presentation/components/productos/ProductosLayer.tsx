import { lazy, Suspense } from "react";
import { Seccion } from "./SeccionLayer";
const LazySeccionLayer = lazy(() => import("./SeccionLayer"));

export interface Producto {
  nombreProducto: string;
  stockProducto: number;
  precioProducto: number;
}

const seccionesArray: Seccion[] = [
  {
    nombreSeccion: "Trabajo",
    productosDeLaSeccion: [
      {
        nombreProducto: "Selladora de Vasos",
        stockProducto: 12,
        precioProducto: 5,
      },
      {
        nombreProducto: "Selladora de Botellas",
        stockProducto: 3,
        precioProducto: 10,
      },
      {
        nombreProducto: "imagen_2",
        stockProducto: 3,
        precioProducto: 5,
      },
      {
        nombreProducto: "imagen_5",
        stockProducto: 12,
        precioProducto: 10,
      },
    ],
  },

  {
    nombreSeccion: "Decoración",
    productosDeLaSeccion: [
      {
        nombreProducto: "Loza 1",
        stockProducto: 12,
        precioProducto: 2,
      },
      {
        nombreProducto: "Loza 2",
        stockProducto: 12,
        precioProducto: 2,
      },
      {
        nombreProducto: "Loza 3",
        stockProducto: 12,
        precioProducto: 2,
      },
    ],
  },
];

const ProductosLayer = () => {
  return (
    <section className="w-full grid grid-flow-row auto-rows-auto ">
      {seccionesArray.map((seccion, index) => {
        return (
          <>
            <Suspense>
              <LazySeccionLayer key={index} {...seccion} />
            </Suspense>
          </>
        );
      })}
    </section>
  );
};

export default ProductosLayer;
