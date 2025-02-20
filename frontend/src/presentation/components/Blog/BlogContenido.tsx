/** 
 * Componente que muestra el contenido de la sección de blog.
 * Muestra una imagen superior, una lista de artículos y una imagen inferior.
 * Cada artículo tiene una imagen, un título, una descripción y un contador de likes
 *  comentarios y compartidos.
 */

import { Link } from "react-router-dom";
import { FaHeart, FaComment, FaShare, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import bambu from "../../../../public/assets/images/blog/Bambu.jpg";
import maquina from "../../../../public/assets/images/blog/MaquinaEmbalaje.png";
import selladora from "../../../../public/assets/images/blog/Selladora.jpg";
import imagen_superior from "../../../../public/assets/images/blog/entrada-blog/IMAGEN_SUPERIOR_TAMI.webp";
import imagen_inferior from "../../../../public/assets/images/blog/entrada-blog/IMAGEN_INFERIOR_TAMI.webp";

const BlogContenido = () => {
  return (
    <div className="w-full">
      {/* Contenedor 1: Imagen superior con barra lateral y texto en color verde turquesa */}
      <div className="relative w-full">
        <img
          src={imagen_superior}
          alt="Imagen Superior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center">
            {/* Barra lateral */}
            <span className="block w-1 h-12 bg-verde_turquesa mr-4"></span>
            {/* Texto */}
            <h2 className="text-3xl md:text-5xl font-bold text-verde_turquesa text-center">
              NOTICIAS Y ARTICULOS RECIENTES
            </h2>
          </div>
        </div>
      </div>

      {/* Contenedor 2: Artículos en bloque horizontal, apilados verticalmente */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Artículo 1 */}
          <Link
            to="/blog/detalle/bambu"
            className="w-full max-w-5xl border-4 border-verde_turquesa rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            {/* Bloque horizontal */}
            <div className="flex h-[300px]">
              {/* Imagen a la izquierda */}
              <div className="w-1/2 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={bambu}
                  alt="Bambu"
                />
              </div>
              {/* Texto a la derecha */}
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="font-bold text-2xl mb-2 text-verde_turquesa">
                  Panel de fibra de bambú
                </div>
                <p className="text-gray-700 text-lg">
                  Sostenibilidad y estética para la construcción moderna.
                </p>
                <div className="flex items-center space-x-6 mt-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaHeart size={20} />
                    <span>20</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaComment size={20} />
                    <span>5</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShare size={20} />
                    <span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Artículo 2 */}
          <Link
            to="/blog/detalle/maquina"
            className="w-full max-w-5xl border-4 border-verde_turquesa rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-[300px]">
              <div className="w-1/2 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={maquina}
                  alt="Maquina"
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="font-bold text-2xl mb-2 text-verde_turquesa">
                  Máquina de embalaje
                </div>
                <p className="text-gray-700 text-lg">
                  Eficiencia y protección en cada empaque.
                </p>
                <div className="flex items-center space-x-6 mt-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaHeart size={20} />
                    <span>15</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaComment size={20} />
                    <span>2</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShare size={20} />
                    <span>1</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          {/* Artículo 3 */}
          <Link
            to="/blog/detalle/selladora"
            className="w-full max-w-5xl border-4 border-verde_turquesa rounded-3xl overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="flex h-[300px]">
              <div className="w-1/2 h-full">
                <img
                  className="w-full h-full object-cover"
                  src={selladora}
                  alt="Selladora"
                />
              </div>
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="font-bold text-2xl mb-2 text-verde_turquesa">
                  Sellador de botellas
                </div>
                <p className="text-gray-700 text-lg">
                  La solución ideal para garantizar la calidad de tus productos.
                </p>
                <div className="flex items-center space-x-6 mt-4 text-gray-600">
                  <div className="flex items-center space-x-1">
                    <FaHeart size={20} />
                    <span>30</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaComment size={20} />
                    <span>8</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <FaShare size={20} />
                    <span>4</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Paginador: "Página X" con dos flechas */}
        <div className="flex justify-center items-center space-x-6 mt-8 text-black">
          {/* Flecha Izquierda */}
          <button className="text-black">
            <FaArrowLeft size={24} />
          </button>

          {/* Texto de la página */}
          <span className="text-lg font-semibold">
            Página 1
          </span>

          {/* Flecha Derecha */}
          <button className="text-black">
            <FaArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Contenedor 3: Imagen inferior */}
      <div className="w-full">
        <img
          src={imagen_inferior}
          alt="Imagen Inferior"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default BlogContenido;





