import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BANNERB from "../../../public/assets/images/blog/SELLADORA BANNER.jpg";
import Mpanel from "../../../public/assets/images/blog/maquina de embalaje beneficios.jpg";
import Botellas from "../../../public/assets/images/blog/BOTELLAS.webp";
import bambu from "../../../public/assets/images/blog/Interior_decoration_panel_made_with_real_3.jpg";

const DetalleSelladora = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
                <section className="text-center">
                    {/* Banner Section */}
                    <div className="relative w-full max-w-6xl h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] mx-auto my-40">
                        <img className="w-full h-full object-cover" src={BANNERB} alt="Máquina de embalaje" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center "></div>
                    </div>

                    {/* Article Content */}
                    <div className="max-w-6xl mx-auto px-4 py text-left -mt-20">
                        <p className="text-verde_turquesa text-3xl mb-6">
                            En un mundo donde la calidad y la seguridad de los productos son esenciales, los selladores de botellas juegan un papel fundamental. Estos dispositivos garantizan que los contenidos permanezcan frescos,
                            seguros y libres de contaminantes. En este artículo, explicaremos qué son los selladores de botellas, sus beneficios y cómo pueden mejorar los procesos de envasado en distintas industrias.
                        </p>
                        <h2 className="text-5xl font-bold text-verde_turquesa mb-4">¿Qué son los selladores de botellas?</h2>
                        <p className="text-gray-700 text-3xl mb-6">
                            Los selladores de botellas son máquinas diseñadas para cerrar herméticamente botellas de diversos materiales, como vidrio o plástico.
                            Este proceso asegura que el contenido se conserve en óptimas condiciones, evitando derrames, fugas o contaminación externa. Los selladores se utilizan ampliamente en sectores como alimentos,
                            bebidas, productos farmacéuticos y cosméticos.

                        </p>
                        <div className="flex justify-center">
                            <img className="w-1/2 h-full object-cover mb-10 rounded-xl" src={Mpanel} alt="Panel de fibra de bambú" />
                        </div>
                        <div className="bg-teal-100 p-6 rounded-lg mb-6">
                            <h2 className="text-5xl font-bold text-verde_turquesa mb-8">Beneficios de usar selladores de botellas</h2>
                            <ul className="list-disc list-inside text-teal-800 text-3xl mb-6">
                                <li className="mb-4">
                                    <span className="text-mediumturquoise">Conservación:</span>
                                    <span style={{color: 'black'}}>Garantizan que el producto se mantenga fresco y seguro durante más tiempo.
                                    </span>
                                </li>
                                <li className="mb-4">
                                    <span className="text-mediumturquoise">Protección:</span>:
                                    <span style={{color: 'black'}}> Previenen la entrada de contaminantes, como polvo, bacterias o humedad.</span>
                                </li>
                                <li className="mb-4">
                                    <span className="text-mediumturquoise">Eficiencia:</span>:
                                    <span style={{color: 'black'}}> Automatizan el proceso de sellado, reduciendo tiempos y costos operativos.</span>
                                </li>
                                <li className="mb-4">
                                    <span className="text-mediumturquoise">Versatilidad:</span>:
                                    <span style={{color: 'black'}}>Puede adaptarse a diferentes tipos y tamaños de botellas, según las necesidades del negocio.</span>
                                </li>
                                <li className="mb-4">
                                    <span className="text-mediumturquoise">Presentación profesional:</span>
                                    <span style={{color: 'black'}}>Mejoran la apariencia del producto al proporcionar un acabado limpio y uniforme.</span>
                                </li>

                            </ul>
                            <div className="flex justify-center">
                                <img className="w-1/2 h-88 object-cover mb-6 rounded-2xl" src={Botellas}
                                     alt="Máquina de embalaje"/>
                            </div>
                            <p className="text-gray-700 text-3xl">
                                Los selladores de botellas son una herramienta esencial para cualquier negocio que busque garantizar la calidad y seguridad de sus productos.
                                Invertir en esta tecnología no solo optimiza los procesos de envasado, sino que también refuerza la confianza de los consumidores.

                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-verde_turquesa mt-20">
                        <h2 className="text-5xl font-bold">¡Asegura el éxito de tus productos con selladores de botellas y lleva tu negocio al siguiente nivel!
                        </h2>
                    </div>

                    {/* Other Articles Section */}
                    <div className="py-10 px-4 mt-24">
                        <h2 className="text-5xl font-bold text-verde_turquesa mb-6 ml-0">OTROS ARTÍCULOS</h2>
                        <div className="flex justify-center items-center space-x-4">
                            <button className="text-verde_turquesa text-2xl">{"<"}</button>
                            <div className="flex space-x-4 overflow-x-auto">
                                <div className="min-w-[300px] bg-verde_turquesa shadow-lg rounded-lg overflow-hidden mb-6">
                                    <img className="w-full h-60 object-cover" src={Mpanel} alt="Máquina de embalaje" />
                                    <div className="p-4">
                                        <h3 className="text-2xl font-bold text-white">MAQUINA DE EMBALAJES</h3>
                                        <p className="text-white">Eficiencia y protección en cada empaque</p>
                                    </div>
                                </div>
                                <div className="min-w-[300px] bg-verde_turquesa shadow-lg rounded-lg overflow-hidden h-96 mb-6">
                                    <img className="w-full h-60 object-cover" src={bambu} alt="Panel de fibra de bambú" />
                                    <div className="p-4">
                                        <h3 className="text-2xl font-bold text-white">PANEL DE FIBRA DE BAMBU</h3>
                                        <p className="text-white text-1xl">Sostenibilidad y estética para la construcción moderna</p>
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
};
export default DetalleSelladora;

