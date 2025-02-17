import { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import { config, getApiUrl } from "../../config/config";
import BoxSize from "../components/detallesProductos/box-size.svg";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [relatedProducts, setRelatedProducts] = useState<any[]>([]);

  const defaultProduct = {
    id: id || '0',
    title: "Producto no encontrado",
    subtitle: "Este producto no está disponible actualmente",
    tagline: "Lo sentimos, no pudimos encontrar el producto que buscas",
    description: "El producto que estás intentando ver no existe o no está disponible en este momento. Por favor, intenta con otro producto o contacta con soporte.",
    specs: {
      estado: "No disponible",
      mensaje: "Producto no encontrado en la base de datos"
    },
    dimensions: {
      alto: "N/A",
      largo: "N/A",
      ancho: "N/A"
    },
    relatedProducts: [],
    images: [
      "https://placehold.co/100x150/orange/white?text=noencontrado",
    ],
    image: "https://placehold.co/100x150/orange/white?text=noencontrado",
    nombreProducto: "Producto no encontrado",
    stockProducto: 0,
    precioProducto: "0.00",
    seccion: "No disponible"
  };

  const fetchProductData = useCallback(async (productId: string) => {
    try {
      const response = await fetch(getApiUrl(`${config.endpoints.productos}/${productId}`));
      if (!response.ok) return null;
      const contentType = response.headers.get("content-type");
      if (!contentType?.includes("application/json")) return null;
      return await response.json();
    } catch (error) {
      console.error(`Error fetching product ${productId}:`, error);
      return null;
    }
  }, []);

  useEffect(() => {
    let isMounted = true;

    const loadData = async () => {
      if (!id) return;
      setLoading(true);

      const productData = await fetchProductData(id);
      
      if (!isMounted) return;

      if (!productData) {
        setProduct(defaultProduct);
        setRelatedProducts([]);
        setLoading(false);
        return;
      }

      setProduct(productData);

      if (productData.relatedProducts?.length) {
        const relatedData = await Promise.all(
          productData.relatedProducts.map((relId: number) => fetchProductData(relId.toString()))
        );
        
        if (isMounted) {
          setRelatedProducts(relatedData.filter(Boolean));
        }
      }

      setLoading(false);
    };

    loadData();
    window.scrollTo({ top: 0, behavior: "smooth" });

    return () => {
      isMounted = false;
    };
  }, [id, fetchProductData]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Cargando producto...</h1>
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full">
        {/* Hero Banner */}
        <div className="pt-32 md:pt-40 pb-1 md:pb-16 bg-gradient-to-b from-[#15988f] to-[#1cdfd5] text-white relative overflow-hidden">
          <div className="max-w-6xl md:w-1/2 px-4 md:px-6 py-8 md:py-12 relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-5 md:w-6 h-5 md:h-6">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-full h-full"
                >
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl md:text-2xl font-bold">{product.title}</h2>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8">
              {product.subtitle}
            </h1>
            <button className="bg-white text-teal-500 px-8 md:px-12 py-2 md:py-3 rounded-full font-bold text-lg md:text-xl hover:bg-opacity-90 transition">
              ¡COTÍZALO!
            </button>
          </div>
          <div className="hidden md:block absolute right-0 top-32 w-full md:w-1/2 h-full bg-white rounded-bl-[30%] md:rounded-bl-[50%] rounded-tl-[40%] md:rounded-tl-[60%] rounded-tr-[15%] md:rounded-tr-[25%] flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="w-3/4 md:w-4/5 h-3/4 md:h-4/5 object-contain mx-auto my-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Left Column - Gallery */}
            <div className="space-y-4">
              {/* Imagen principal */}
              <div className=" md:max-w-[440px] aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src={product.image}
                  alt="Product"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Grid de miniaturas */}
              <div className="grid grid-cols-4 gap-2 w-full md:max-w-[440px]">
                {product.images?.slice(0, 4).map((image: string, index: number) => (
                  <div
                    key={index}
                    className=" aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition"
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl font-bold">4.8</span>
                <div className="flex text-yellow-400">
                  {"★".repeat(4)}
                  {"☆".repeat(1)}
                </div>
              </div> */}

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-2">
                  {/* Información del producto: */}
                  {product.title}
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              <div className="border rounded-lg mb-6">
                <div className="flex border-b">
                  <a
                    className={`flex-1 p-4 font-bold text-teal-500 border-b-2 border-teal-500`}
                  >
                    Detalles del producto
                  </a>
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
                      <img
                        src={BoxSize}
                        alt="Box Size"
                        className="w-full h-auto"
                      />
                    </div>
                    <ul className="space-y-2">
                      {Object.entries(product.dimensions).map(
                        ([key, value]) => (
                          <li key={key} className="flex items-center gap-2">
                            <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                              {key.charAt(0).toUpperCase()}
                            </span>
                            {`${key}: ${value}`}
                          </li>
                        )
                      )}
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
          <div className="mt-8 md:mt-12">
            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-teal-500">
              ARTÍCULOS SIMILARES
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/detalle-producto/${relatedProduct.id}`}
                  className="group cursor-pointer"
                >
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-2">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition"
                    />
                  </div>
                  <h3 className="text-center font-bold text-xs md:text-sm">
                    {relatedProduct.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
