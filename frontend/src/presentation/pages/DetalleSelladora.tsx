import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BANNERB from "../../../public/assets/images/blog/SELLADORA BANNER.jpg";
import Mpanel from "../../../public/assets/images/blog/maquina de embalaje beneficios.jpg";
// import Botellas from "../../../public/assets/images/blog/BOTELLAS.webp";
import bambu from "../../../public/assets/images/blog/Interior_decoration_panel_made_with_real_3.jpg";
import imagenGrande from "../../../public/assets/images/Productos/SBotellas 3-Photoroom.png"
import imagenpequeña1 from "../../../public/assets/images/Productos/Filtrador_de_Agua.png"
import imagenpequeña2 from "../../../public/assets/images/Productos/imagen_2.png"
import imagenpequeña3 from "../../../public/assets/images/Productos/imagen_3.png"
import iconoMas from "../../../public/assets/icons/icono_mas.png"
import iconoMenos from "../../../public/assets/icons/icono_menos.png"
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { IoIosStarOutline } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import cubo from "../../../public/assets/icons/cube_svgrepo_com.svg"
import { RiArrowDropDownLine } from "react-icons/ri";

const DetalleSelladora = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="">
                <section className="text-center">
                    {/* Banner Section */}
                    <div className="relative w-full max-w-6xl h-[20rem] md:h-[30rem] lg:h-[40rem] xl:h-[50rem] mx-auto my-40">
                        <img className="w-full h-full object-cover" src={BANNERB} alt="Máquina de embalaje" />
                        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center "></div>
                    </div>

                    {/* Detalle de producto ------------------------------------INICIO--------------------------------- Section*/}
                    <div className="flex flex-col items-center lg:justify-between lg:w-full">
                        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-evenly mb-[100px] lg:w-full">
                            {/* contenedor izquierdo */}
                            <div className="max-w-[350px] mx-[20px] sm:mx-[0px] sm:max-w-[500px] lg:max-w-[450px] lg:max-h-[450px] mb-[40px] xl:max-w-[500px] 2xl:max-w-[600px]">
                                {/* imagenes de la izquierda */}
                                <div className="max-w-full max-h-full lg:flex flex-row-reverse">
                                    {/* imagen grande */}
                                    <div className="lg:max-h-[375px] lg:max-w-[375px]">
                                        <img className="lg:max-w-full lg:max-h-full" src={imagenGrande} />
                                    </div>

                                    {/* imagenes pequeñas */}
                                    <div className="flex flex-row lg:flex-col lg:max-w-[125px]">
                                        <div className="">
                                            <img className="" src={imagenpequeña1} />
                                        </div>
                                        <div className="">
                                            <img className="" src={imagenpequeña2} />
                                        </div>
                                        <div className="">
                                            <img className="" src={imagenpequeña3} />
                                        </div>
                                    </div>

                                </div>
                                {/* iconos de zoom */}
                                <div className="flex row justify-end max-w-full max-h-full">
                                    <div>
                                        <IoMdSearch className="w-[35px] h-[35px]" />
                                    </div>
                                    <div>
                                        <img className="w-[35px]" src={iconoMas} />
                                    </div>
                                    <div>
                                        <img className="w-[35px]" src={iconoMenos} />
                                    </div>
                                </div>
                            </div>

                            {/* contenedor derecho */}
                            <div className="flex flex-col w-full max-w-[375px] sm:max-w-[550px] lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[600px]">

                                <div className="flex justify-start text-verde_turquesa font-bold mb-[30px] lg:hidden">
                                    <h1 className="text-3xl sm:text-4xl">SELLADORA DE BOTELLAS</h1>
                                </div>
                                {/* rating de estrellas */}
                                <div className="flex items-center justify-start text-xl sm:text-2xl lg:mb-[20px]">
                                    <span>3.8</span>
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStar />
                                    <IoIosStarHalf />
                                    <IoIosStarOutline />
                                </div>
                                {/* subtitulo */}
                                <div className="flex flex-col items-start text-start mb-[40px]">
                                    <h2 className="font-bold text-lg sm:text-xl">Información del producto</h2>
                                    <p>Utiliza el principio de inducción electromagnética para producir un alto calor instantáneo para derretir el papel de aluminio que luego se adhiere al agujero de la Botella</p>
                                </div>
                                {/* botones */}
                                <div className="flex justify-between font-bold">
                                    <button className="bg-gray-200 rounded-tl-2xl rounded-tr-2xl py-[10px] px-[15px] sm:px-[20px] flex flex-row items-center">
                                        <span>Detalles del producto</span>
                                        <RiArrowDropDownLine className="text-3xl pt-[4px]" />
                                    </button>
                                    <button className="flex flex-row items-center">
                                        <span>Cotización</span>
                                        <RiArrowDropDownLine className="text-3xl pt-[4px]" />
                                    </button>
                                </div>
                                {/* descripcion adicional del producto */}
                                <div className="flex flex-col items-start text-start bg-gray-200 rounded-tr-2xl px-[15px] sm:px-[20px]">
                                    <p className="font-bold">Descripción:</p>
                                    <p>Modelo: DCGY-F200</p>
                                    <p>Potencia: AC220V/50HZ-80HZ</p>
                                    <p>Temperatura ambiente: 10 - 400 °C</p>
                                    <p>Diámetro del sello: 2 - 8 (cm)</p>
                                    <p>Flujo de trabajo: 25 Botellas/min</p>
                                </div>
                                {/* dimensiones */}
                                <div className="flex flex-col items-start text-start bg-gray-200 px-[15px] sm:px-[20px]">
                                    <p className="font-bold">Dimensiones:</p>
                                </div>
                                <div className="flex flex-row items-start text-start bg-gray-200 rounded-bl-2xl rounded-br-2xl p-[15px] sm:p-[20px]">
                                    <div className="mr-[20px]">
                                        <img src={cubo} className="w-[75px]" />
                                    </div>
                                    <div>
                                        <p>
                                            <span className="bg-verde_turquesa text-white text-[8px] px-[8px] py-[5px] rounded-2xl">H</span> Altura: 11.5 cm
                                        </p>
                                        <p>
                                            <span className="bg-verde_turquesa text-white text-[8px] px-[9px] py-[5px] rounded-2xl">L</span> Longitud: 28 cm
                                        </p>
                                        <p>
                                            <span className="bg-verde_turquesa text-white text-[8px] px-[8px] py-[5px] rounded-2xl">A</span> Ancho: 23 cm
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Detalle de producto ------------------------------------FIN--------------------------------- Section*/}
                    

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