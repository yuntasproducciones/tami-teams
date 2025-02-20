import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTami from "../../../public/assets/images/Logos/logo_movil-02.webp";
import logoTami2 from "../../../public/assets/images/Logos/logoprincipal.gif";
import menuHamburguesa from "../../../public/assets/icons/navigation-bar.png";
import usuarioIcono from "../../../public/assets/icons/USUARIO_Mesa_de_trabajo_1.png";
import whatsappIcon from "../../../public/assets/icons/WHATSAPP.svg";
import tiktokIcon from "../../../public/assets/icons/TIKTOK.svg";
import twitterIcon from "../../../public/assets/icons/TWITTER.svg";
import facebookIcon from "../../../public/assets/icons/FACEBOOK.svg";
import instagramIcon from "../../../public/assets/icons/INSTAGRAM.svg";
// import "../../styles/estilos.css"

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 1024);


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activarSidebar = () => {
    setIsSidebarOpen((x) => !x);
  };
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 1023);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 bg-top duration-1000 ${isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"}`}
    >
      <div className="flex items-center justify-between h-full w-full px-4">
        {/* Contenido del Menú hamburguesa desplegable solo para celulares (menor que lg 64rem (1024px)) -------------INCIO------------- */}
        <div
          className={`fixed top-[8rem] left-0 z-[1] min-h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)] bg-white px-[5px] xs:px-[30px] py-[30px] w-full xs:max-w-[425px] rounded-tl-none rounded-tr-[50px] rounded-br-[50px] rounded-bl-none overflow-scroll ${isSidebarOpen ? "" : "hidden"}`}
        >
          <div className="border-b-4 border-verde_turquesa pb-[20px]">
            <div className="flex pl-[20px]">
              <img
                src={usuarioIcono}
                className="max-w-[50px] xs:max-w-[100px]"
                alt="Ícono de usuario" />
              <div className="flex flex-col justify-center">
                <p className="font-semibold xs:text-4xl">HOLA!</p>
                <p className="font-semibold xs:text-4xl">Usuario</p>
              </div>
            </div>
          </div>
          <div className="pl-[15px]">
            <Link
              to="/"
              className="text-verde_turquesa hover:underline xs:text-4xl block xs:pb-[20px] pt-[20px] md:font-normal"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-verde_turquesa hover:underline xs:text-4xl block xs:pb-[20px] md:font-normal"
            >
              Nosotros
            </Link>
            <Link
              to="/products"
              className="text-verde_turquesa hover:underline xs:text-4xl block xs:pb-[20px] md:font-normal"
            >
              Productos
            </Link>
            <Link
              to="/shipping-policies"
              className="text-verde_turquesa hover:underline xs:text-4xl block xs:pb-[20px] md:font-normal"
            >
              Políticas de envíos
            </Link>
            <Link
              to="/shipping-policies"
              className="text-verde_turquesa hover:underline xs:text-4xl block pb-[20px] md:font-normal"
            >
              Blog
            </Link>
          </div>

          <div>
            <p className="border-t-4 border-verde_turquesa text-verde_turquesa font-bold text-center pt-[5px]">
              Síguenos en
            </p>
            <div className="mt-3 flex flex-wrap justify-around space-x-4 border-b-4 border-verde_turquesa pb-[10px]">
              <a href="#" className="w-4 h-4 xs:w-8 xs:h-8">
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="w-full h-full bg-verde_turquesa rounded-full p-[5px]" />
              </a>
              <a href="#" className="w-4 h-4 xs:w-8 xs:h-8">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full bg-verde_turquesa rounded-full p-[5px]" />
              </a>
              <a href="#" className="w-4 h-4 xs:w-8 xs:h-8">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-full h-full bg-verde_turquesa rounded-full p-[5px]" />
              </a>
              <a href="#" className="w-4 h-4 xs:w-8 xs:h-8">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-full h-full bg-verde_turquesa rounded-full p-[5px]" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=51978883199"
                className="w-4 h-4 xs:w-8 xs:h-8"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-full h-full bg-verde_turquesa rounded-full p-[5px]" />
              </a>
            </div>
          </div>
          <div className="pl-[15px]">
            <p className="text-verde_turquesa font-bold pt-[2vh]">
              Horario de atención
            </p>
            <p className="font-semibold xs:text-xl">Lunes a Viernes</p>
            <p className="font-semibold xs:text-xl">9:00 am a 9:00 pm</p>
          </div>
        </div>
        {/* Contenido del Menú hamburguesa desplegable solo para celulares (menor que lg 64rem (1024px)) -------------FIN------------- */}

        {/* Íconos tami y menú hamburguesa -------------INICIO------------- */}
        <div className="flex items-center justify-evenly xs:justify-between w-full lg:max-w-[100px] xs:mx-[20px] sm:mx-[40px] lg:mx-[0px]">
          <img
            src={menuHamburguesa}
            alt="Menú hamburguesa"
            className="w-[25px] xs:w-[50px] block lg:hidden"
            onClick={activarSidebar} />
          <img
            src={isLargeScreen ? logoTami2 : logoTami}
            alt="logo-tami"
            className="h-20 transition-all duration-300" />
        </div>
        {/* Íconos tami y menú hamburguesa -------------FIN------------- */}

        {/* Links de navegación solo para computadora (mayor que lg 64rem (1024px)) -------------INICIO------------- */}
        <div className="w-full hidden lg:block">
          <nav className="flex flex-wrap justify-around items-center">
            <Link
              to="/"
              className="text-white hover:text-teal-300 transition-colors duration-500 text-lg font-bold relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              to="/about"
              className="text-white hover:text-teal-300 transition-colors duration-500 text-lg font-bold relative group"
            >
              Nosotros
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              to="/products"
              className="text-white hover:text-teal-300 transition-colors duration-500 text-lg font-bold relative group"
            >
              Productos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <Link
              to="/shipping-policies"
              className="text-white hover:text-teal-300 transition-colors duration-500 text-lg font-bold relative group"
            >
              Políticas de envíos
              <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
            </Link>
            <div className="relative group">
              <span className="text-white hover:text-teal-300 cursor-pointer pt-1 px-1 font-bold text-lg relative group">
                Más
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </span>
              <div className="absolute hidden group-hover:block bg-teal-700 text-white shadow-md rounded-md hover:bg-opacity-75">
                <Link
                  to="/blog"
                  className="block px-4 py-2 hover:text-white font-bold text-2xl"
                >
                  Blog
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:text-white font-bold text-2xl"
                >
                  Login
                </Link>
              </div>
            </div>
          </nav>
        </div>
        {/* Links de navegación solo para computadora (mayor que lg 64rem (1024px)) -------------FIN------------- */}

        {/* Botón contáctanos -------------INICIO------------- */}
        <div
          className={"flex items-center bg-white rounded-2xl lg:block"}
        >

          <div className={"items-center bg-white border-2 py-3 px-6 rounded-2xl hidden custom:block"}>
            <a
              href="https://api.whatsapp.com/send?phone=51978883199"
              className="flex items-center space-x-3 rounded-lg"
            >
              <div>
                <p className="text-verde_turquesa text-2xl font-bold">
                  Contáctanos
                </p>
              </div>
            </a>
          </div>
          {/* Botón contáctanos -------------FIN------------- */}
        </div>
      </div></header>
  );
}

export default Navbar;
