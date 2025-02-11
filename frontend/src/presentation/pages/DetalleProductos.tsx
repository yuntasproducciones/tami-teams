import { useState } from "react";
import { useParams } from "react-router-dom"; // Añadir este import
import ProductsJSON from "../components/detallesProductos/articulos.json";
import Navbar from "../components/Navbar";
import Products from "./Products";

const ProductDetail = () => {  // Eliminar el parámetro {id}
  const { id } = useParams(); // Añadir esto para obtener el id de la URL
  const [selectedTab, setSelectedTab] = useState("details");
  const [mainImage, setMainImage] = useState(0);

  console.log('ID recibido:', id); // Para debugging

  // Convertir el id a número y buscar el producto
  const product = ProductsJSON.find((p) => p.id === parseInt(id || ''));

  if (!product) {
    return (
      <div className="max-w-6xl mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold text-red-500">
          Error: Producto no disponible
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-teal-400 to-teal-500 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-6 h-6">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-full h-full"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">{product.title}</h2>
          </div>
          <h1 className="text-4xl font-bold max-w-xl mb-8">
            {product.subtitle}
          </h1>
          <button className="bg-white text-teal-500 px-12 py-3 rounded-full font-bold text-xl hover:bg-opacity-90 transition">
            ¡COTÍZALO!
          </button>
        </div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-white rounded-bl-[40%]" />
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column - Gallery */}
          <div className="grid grid-cols-5 grid-rows-5 gap-2">
            {/* Miniaturas alineadas en columna */}
            <div className="col-span-1 row-span-5 flex flex-col gap-2">
              {/* Miniaturas alineadas en columna */}
              <div className="col-span-1 row-span-5 flex flex-col gap-2">
                {product.images?.map((image, index) => (
                  <div
                    key={index}
                    className="w-full aspect-square bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover cursor-pointer"
                      onClick={() => setMainImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Imagen principal grande */}
            <div className="col-span-4 row-span-5 h-min bg-black rounded-lg overflow-hidden relative">
              <img
                src={product.images?.[mainImage]}
                alt="Product"
                className="w-full max-h-full h-fit object-contain"
              />

              {/* Botones flotantes */}
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button className="bg-teal-500 text-white rounded-full p-2">
                  🔍
                </button>
                <button className="bg-teal-500 text-white rounded-full p-2">
                  ➕
                </button>
                <button className="bg-teal-500 text-white rounded-full p-2">
                  ➖
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">4.8</span>
              <div className="flex text-yellow-400">
                {"★".repeat(4)}
                {"☆".repeat(1)}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-bold mb-2">
                Información del producto:
              </h3>
              <p className="text-gray-700">
                {product.description}
              </p>
            </div>

            <div className="border rounded-lg mb-6">
              <div className="flex border-b">
                <button
                  className={`flex-1 p-4 font-bold ${
                    selectedTab === "details"
                      ? "text-teal-500 border-b-2 border-teal-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setSelectedTab("details")}
                >
                  Detalles del producto
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-bold mb-2">Descripción:</h3>
                <ul className="space-y-2 text-gray-700">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <li key={key}>{`${key}: ${value}`}</li>
                  ))}
                </ul>

                <h3 className="font-bold mt-4 mb-2">Dimensiones:</h3>
                <div className="flex items-start gap-8">
                  <div className="w-24">
                    <svg
                      viewBox="0 0 100 100"
                      className="w-full stroke-teal-500 fill-none"
                    >
                      <path d="M20 80 L20 20 L80 20 L80 80 L20 80 Z" />
                      <path d="M20 20 L80 20" strokeWidth="2" />
                      <path d="M80 20 L80 80" strokeWidth="2" />
                      <path d="M80 80 L20 80" strokeWidth="2" />
                    </svg>
                  </div>
                  <ul className="space-y-2">
                    {Object.entries(product.dimensions).map(([key, value]) => (
                      <li key={key} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                        {`${key}: ${value}`}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <button className="w-full bg-teal-500 text-white py-4 rounded-full font-bold text-xl hover:bg-teal-600 transition">
              COTIZACIÓN
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6 text-teal-500">
            ARTÍCULOS SIMILARES
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedId) => {
              const relatedProduct = ProductsJSON.find(p => p.id === relatedId);
              return relatedProduct ? (
                <div key={relatedId} className="group cursor-pointer">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="text-center font-bold text-sm">{relatedProduct.title}</h3>
                </div>
              ) : null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
