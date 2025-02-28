import { Link } from "react-router-dom";
import NavLink from "./NavLink";
import NavSocialMediaLink from "./NavSocialMediaLink";
import { useState, useEffect, useCallback } from "react";
import logoTami from "../../../../../public/assets/images/Logos/logo_movil-02.webp";
import logoTami2 from "../../../../../public/assets/images/Logos/logoprincipal.gif";
import menuHamburguesa from "../../../../../public/assets/icons/navigation-bar.png";
import usuarioIcono from "../../../../../public/assets/icons/USUARIO_Mesa_de_trabajo_1.png";
import whatsappIcon from "../../../../../public/assets/icons/WHATSAPP.svg";
import tiktokIcon from "../../../../../public/assets/icons/TIKTOK.svg";
import twitterIcon from "../../../../../public/assets/icons/TWITTER.svg";
import facebookIcon from "../../../../../public/assets/icons/FACEBOOK.svg";
import instagramIcon from "../../../../../public/assets/icons/INSTAGRAM.svg";
const links = [
  { to: "/", texto: "Inicio" },
  {
    to: "/about",
    texto: "Nosotros",
  },
  {
    to: "/products",
    texto: "Productos",
  },
  {
    to: "/shipping-policies",
    texto: "Politicas de Envio",
  },
];
const socialMediaLinks = [
  {
    social: "Tiktok",
    image: tiktokIcon,
    link: "#",
  },
  {
    social: "Instagram",
    image: instagramIcon,
    link: "#",
  },
  {
    social: "Twitter",
    image: twitterIcon,
    link: "#",
  },
  {
    social: "Facebook",
    image: facebookIcon,
    link: "#",
  },
  {
    social: "Whatsapp",
    image: whatsappIcon,
    link: "https://api.whatsapp.com/send?phone=51978883199",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const debounce = <T extends (...args: any[]) => void>(
    func: T,
    delay: number
  ): T => {
    let timer: ReturnType<typeof setTimeout>;
    return ((...args: Parameters<T>) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    }) as T;
  };

  const handleScroll = useCallback(
    debounce(() => {
      setIsScrolled(window.scrollY > 0);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const activarSidebar = () => {
    setIsSidebarOpen((x) => !x);
  };

  return (
    <header
      className={`fixed w-full py-4 transition-all z-50 bg-top duration-1000 px-4 ${
        isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"
      }`}
    >
      <div className="grid grid-cols-2 lg:grid-cols-12 h-full w-full items-center">
        {/* Contenido del Menú hamburguesa desplegable solo para celulares (menor que lg 64rem (1024px)) -------------INCIO------------- */}
        {isSidebarOpen && (
          <div className="fixed top-32 left-0 z-[1] min-h-[calc(100vh-8rem)] max-h-[calc(100vh-8rem)] bg-white px-1 xs:px-8 py-8 w-full xs:max-w-[425px] rounded-l-none rounded-r-[50px] overflow-scroll">
            <div className="border-b-4 border-verde_turquesa pb-5">
              <div className="flex pl-5">
                <img
                  src={usuarioIcono}
                  className="max-w-[50px] xs:max-w-[100px]"
                  alt="Ícono de usuario"
                />
                <div className="flex flex-col justify-center font-semibold xs:text-4xl">
                  <p>HOLA!</p>
                  <p>Usuario</p>
                </div>
              </div>
            </div>
            <div className="pl-4">
              {links.map((item, index) => (
                <NavLink key={index} isForNavBar={false} to={item.to}>
                  {item.texto}
                </NavLink>
              ))}
            </div>
            <div>
              <p className="border-t-4 border-verde_turquesa text-verde_turquesa font-bold text-center pt-1">
                Síguenos en
              </p>
              <div className="mt-2 flex flex-wrap justify-around space-x-4 border-b-4 border-verde_turquesa pb-2">
                {socialMediaLinks.map((item, index) => (
                  <NavSocialMediaLink key={index} {...item} />
                ))}
              </div>
            </div>
            <div className="pl-4">
              <p className="text-verde_turquesa font-bold pt-2">
                Horario de atención
              </p>
              <div className="font-semibold">
                <p>Lunes a Viernes</p>
                <p>9:00 am a 9:00 pm</p>
              </div>
            </div>
          </div>
        )}
        {/* Contenido del Menú hamburguesa desplegable solo para celulares (menor que lg 64rem (1024px)) -------------FIN------------- */}

        {/* Íconos tami y menú hamburguesa -------------INICIO------------- */}
        <img
          src={menuHamburguesa}
          alt="Menú hamburguesa"
          className="w-9 block lg:hidden"
          onClick={activarSidebar}
        />
        {/* en pantallas menores a 1024px aparece este icono*/}
        <img
          src={logoTami2}
          alt="logo TAMI"
          className=" h-14 transition-all duration-300 hidden lg:block"
        />
        {/* en pantallas mayores a 1024px aparece este icono */}
        <img
          src={logoTami}
          alt="logo TAMI"
          className="place-self-end h-14 transition-all duration-300 block lg:hidden"
        />
        {/* Íconos tami y menú hamburguesa -------------FIN------------- */}

        {/* Links de navegación solo para computadora (mayor que lg 64rem (1024px)) -------------INICIO------------- */}
        <div className="w-full col-span-11 hidden lg:block">
          <nav className="flex flex-wrap justify-around items-center">
            {links.map((item, index) => (
              <NavLink key={index} isForNavBar={true} to={item.to}>
                {item.texto}
              </NavLink>
            ))}
            <div className="relative group">
              <span className="text-white hover:text-teal-300 cursor-pointer pt-1 px-1 font-bold text-lg relative group">
                Más
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-teal-300 transition-all duration-500 group-hover:w-full group-hover:left-0"></span>
              </span>
              <div className="absolute w-24 hidden group-hover:block bg-teal-700 text-white shadow-md rounded-ss-none rounded-md font-semibold text-xl">
                <Link
                  to="/blog"
                  className="block px-4 py-2 hover:bg-teal-900 hover:rounded-tr-md"
                >
                  Blog
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2 hover:bg-teal-900 hover:rounded-b-md"
                >
                  Login
                </Link>
              </div>
            </div>
            {/* Botón contáctanos -------------INICIO------------- */}
            <a
              href="https://api.whatsapp.com/send?phone=51978883199"
              className="bg-white rounded-2xl border-2 py-2 px-5 text-verde_turquesa font-bold hover:bg-gradient-to-b hover:from-verde2 hover:to-verde_turquesa hover:text-white transition-all ease-in-out duration-500"
            >
              Contáctanos
            </a>
            {/* Botón contáctanos -------------FIN------------- */}
          </nav>
        </div>
        {/* Links de navegación solo para computadora (mayor que lg 64rem (1024px)) -------------FIN------------- */}
      </div>
    </header>
  );
}

export default Navbar;
