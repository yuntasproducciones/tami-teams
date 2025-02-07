import { useState } from "react";
import { Producto } from "./ProductosLayer";

const BtnSaberMas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-between text-verde2">
      <svg
        width="50"
        height="50"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-in-out ${
          isHovered ? "scale-75" : ""
        }`}
      >
        <path
          d="M16 4L8 12L16 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(-2, 0)"
        />
        <path
          d="M16 4L8 12L16 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(5, 0)"
        />
      </svg>
      <button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
        className={`rounded-full bg-white px-6 font-bold text-xl border-4 border-gray-300  transition-transform duration-300 ease-in-out ${
          isHovered ? "scale-110" : ""
        }`}
      >
        Saber Más
      </button>
      <svg
        width="50"
        height="50"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 ease-in-out ${
          isHovered ? "scale-75" : ""
        }`}
      >
        <path
          d="M8 4L16 12L8 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(2, 0)"
        />
        <path
          d="M8 4L16 12L8 20"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          transform="translate(-5, 0)"
        />
      </svg>
    </div>
  );
};

const ProductCard = (producto: Producto) => {
  return (
    <div className="my-10">
      <div className="bg-gray-300 rounded-[15%] place-self-center h-56 w-56 px-3 py-3 mb-6">
        <img
          src={`/Productos/${producto.nombreProducto}.webp`}
          alt={producto.nombreProducto}
          className="h-full place-self-center"
        />
      </div>
      <BtnSaberMas />
    </div>
  );
};

export default ProductCard;
