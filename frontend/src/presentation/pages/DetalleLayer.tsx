import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Botellas from "../../../public/assets/images/blog/BOTELLAS.webp";
//DetalleSelladora
import bannerSelladora from "../../../public/assets/images/blog/SELLADORA BANNER.jpg";
import imgSelladora1 from "../../../public/assets/images/blog/maquina de embalaje beneficios.jpg";
import selladora from "../../../public/assets/images/blog/Interior_decoration_panel_made_with_real_3.jpg";
//DetalleMaquina
import bannerMaquina from "../../../public/assets/images/blog/BANNER MAQUINA DE EMBALAJE.jpg";
import maquina from "../../../public/assets/images/blog/maquinaem.webp";
import imgMaquina1 from "../../../public/assets/images/blog/Interior_decoration_panel_made_with_real_3.jpg";

const DetalleLayer = () => {
  const { producto } = useParams();

  const productos = {
    selladora: {
      nombre: "Selladora de Botella",
      banner: bannerSelladora,
      img1: imgSelladora1,
      img2: selladora,
    },
    maquina: {
      nombre: "Maquina de Embalaje",
      banner: bannerMaquina,
      img1: imgMaquina1,
      img2: maquina,
    },
  };

  const detalle = productos[producto as keyof typeof productos];
  if (!detalle) {
    return <h1>Producto no encontrado</h1>;
  } else {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <section className="text-center">
            {/* Banner Section */}
            <div className="relative w-full max-w-6xl h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] mx-auto my-40">
              <img
                className="w-full h-full object-cover"
                src={detalle.banner}
                alt={detalle.nombre}
              />
            </div>

            {/* Article Content */}
            <div className="max-w-6xl mx-auto px-4 py text-left -mt-20">
              <p className="text-verde_turquesa text-3xl mb-6">
                En un mundo donde la logística y el transporte son pilares
                esenciales para muchas industrias, las máquinas de embalaje se
                han convertido en una herramienta indispensable. Estas máquinas
                no solo optimizan los procesos de empaque, sino que también
                garantizan la seguridad de los productos durante su traslado. En
                este artículo, explicaremos los diferentes tipos de máquinas de
                embalaje, sus beneficios y cómo elegir la adecuada para tu
                negocio.
              </p>
              <h2 className="text-5xl font-bold text-verde_turquesa mb-4">
                ¿Qué son las máquinas de embalajes?
              </h2>
              <p className="text-gray-700 text-3xl mb-6">
                Las máquinas de embalaje son equipos diseñados para automatizar
                y mejorar los procesos de empaque de productos. Pueden realizar
                tareas como envolver, sellar, etiquetar o incluso colocar
                productos en cajas. Gracias a ellas, las empresas pueden ahorrar
                tiempo, reducir costos y mejorar la presentación de sus
                productos.
              </p>
              <div className="flex justify-center">
                <img
                  className="w-1/2 h-full object-cover mb-10 rounded-xl"
                  src={detalle.img1}
                  alt="Panel de fibra de bambú"
                />
              </div>
              <div className="bg-teal-100 p-6 rounded-lg mb-6">
                <h2 className="text-5xl font-bold text-verde_turquesa mb-8">
                  Beneficios de usar máquinas de embalajes
                </h2>
                <ul className="list-disc list-inside text-teal-800 text-3xl mb-6">
                  <li className="mb-4">
                    <span className="text-mediumturquoise">Eficiencia:</span>
                    <span style={{ color: "black" }}>
                      {" "}
                      Aceleran los procesos de empaque, permitiendo mayor
                      producción en menos tiempo.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-mediumturquoise">
                      Reducción de costos:
                    </span>
                    :
                    <span style={{ color: "black" }}>
                      {" "}
                      Disminuyen la necesidad de mano de obra intensiva y
                      reducen el desperdicio de materiales.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-mediumturquoise">Seguridad</span>:
                    <span style={{ color: "black" }}>
                      Garantizan un empaque uniforme y seguro, minimizando el
                      riesgo de daños durante el transporte.
                    </span>
                  </li>
                  <li className="mb-4">
                    <span className="text-mediumturquoise">
                      Sostenibilidad:
                    </span>
                    :
                    <span style={{ color: "black" }}>
                      Muchas máquinas están diseñadas para utilizar materiales
                      reciclables o reducir el uso de plástico, contribuyendo al
                      cuidado del medio ambiente.
                    </span>
                  </li>
                </ul>
                <div className="flex justify-center">
                  <img
                    className="w-1/2 h-88 object-cover mb-6 rounded-2xl"
                    src={Botellas}
                    alt="Máquina de embalaje"
                  />
                </div>
                <p className="text-gray-700 text-3xl">
                  Las máquinas de embalaje son una inversión clave para
                  cualquier negocio que desee optimizar sus procesos logísticos
                  y garantizar la satisfacción del cliente. Analiza tus
                  necesidades, evalúa tus opciones y elige la máquina que mejor
                  se ajuste a tu operación. Recuerda que un buen embalaje no
                  solo protege tus productos, sino que también refuerza la
                  imagen de tu marca.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-verde_turquesa mt-20">
              <h2 className="text-5xl font-bold">
                ¡Explora el mundo del embalaje automatizado y lleva tu negocio
                al siguiente nivel!
              </h2>
            </div>

            {/* Other Articles Section */}
            <div className="py-10 px-4 mt-24">
              <h2 className="text-5xl font-bold text-verde_turquesa mb-6 ml-0">
                OTROS ARTÍCULOS
              </h2>
              <div className="flex justify-center items-center space-x-4">
                <button className="text-verde_turquesa text-2xl">{"<"}</button>
                <div className="flex space-x-4 overflow-x-auto">
                  <div className="min-w-[300px] bg-verde_turquesa shadow-lg rounded-lg overflow-hidden mb-6">
                    <img
                      className="w-full h-60 object-cover"
                      src={detalle.img2}
                      alt={detalle.nombre}
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">
                        PANEL DE FIBRA DE BAMBU
                      </h3>
                      <p className="text-white">
                        Sostenibilidad y estètica para la construcciòn moderna.{" "}
                      </p>
                    </div>
                  </div>
                  <div className="min-w-[300px] bg-verde_turquesa shadow-lg rounded-lg overflow-hidden h-96 mb-6">
                    <img
                      className="w-full h-60 object-cover"
                      src={Botellas}
                      alt="Panel de fibra de bambú"
                    />
                    <div className="p-4">
                      <h3 className="text-2xl font-bold text-white">
                        SELLADOR DE BOTELLAS
                      </h3>
                      <p className="text-white text-1xl">
                        La solución ideal para garantizar la calidad de tus
                        productos.
                      </p>
                    </div>
                  </div>
                  {/* Add more articles as needed */}
                </div>
                <button className="text-verde_turquesa text-2xl">{">"}</button>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
};

export default DetalleLayer;
