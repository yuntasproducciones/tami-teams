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
    ],
  },
  {
    nombreSeccion: "Emprendimiento",
    productosDeLaSeccion: [
      {
        nombreProducto: "Ventilador 45",
        stockProducto: 3,
        precioProducto: 5,
      },
      {
        nombreProducto: "Tanque de Gas",
        stockProducto: 12,
        precioProducto: 10,
      },
      {
        nombreProducto: "Ventilador 45",
        stockProducto: 15,
        precioProducto: 21.55,
      },
      {
        nombreProducto: "Tanque de Gas",
        stockProducto: 24,
        precioProducto: 20,
      },
    ],
  },
  {
    nombreSeccion: "Decoración",
    productosDeLaSeccion: [
      {
        nombreProducto: "Loza",
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
