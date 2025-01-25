import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTami from "../../../public/assets/logos/logoprincipal.gif";
import menuHamburguesa from "../../../public/assets/icons/navigation-bar.png";
import usuarioIcono from "../../../public/assets/icons/USUARIO_Mesa_de_trabajo_1.png";
import whatsappIcon from "../../../public/assets/icons/WHATSAPP.svg";
import tiktokIcon from "../../../public/assets/icons/TIKTOK.svg";
import twitterIcon from "../../../public/assets/icons/TWITTER.svg";
import facebookIcon from "../../../public/assets/icons/FACEBOOK.svg";
import instagramIcon from "../../../public/assets/icons/INSTAGRAM.svg";
import emailIcon from "../../../public/assets/icons/EMAIL.svg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
    setIsSidebarOpen((x) => {
      return !x;
    });
  };

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 bg-top duration-1000 ${
        isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-[100px] py-2 h-full">
        <div className="max-[1024px]:block hidden" onClick={activarSidebar}>
          <img
            src={menuHamburguesa}
            alt="Menú hamburguesa"
            className="w-[50px]"
          />
        </div>
        <div
          className={`fixed top-[8rem] left-0 z-[1] h-[700px] w-[500px] bg-white px-[30px] py-[30px] max-w-[400px] rounded-tl-none rounded-tr-[50px] rounded-br-[50px] rounded-bl-none ${
            isSidebarOpen ? "" : "hidden"
          }`}
        >
          <div className="border-b-4 border-verde_turquesa pb-[20px]">
            <div className="flex pl-[20px]">
              <img
                src={usuarioIcono}
                className="max-w-[100px]"
                alt="Ícono de usuario"
              />
              <div className="flex flex-col justify-center">
                <p className="font-medium text-3xl">HOLA!</p>
                <p className="font-medium text-3xl">Usuario</p>
              </div>
            </div>
          </div>
          <div className="pl-[15px]">
            <Link
              to="/"
              className="text-verde_turquesa hover:underline font-bold text-3xl block pb-[20px] pt-[20px]"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-verde_turquesa hover:underline font-bold text-3xl block pb-[20px]"
            >
              Nosotros
            </Link>
            <Link
              to="/products"
              className="text-verde_turquesa hover:underline font-bold text-3xl block pb-[20px]"
            >
              Productos
            </Link>
            <Link
              to="/shipping-policies"
              className="text-verde_turquesa hover:underline font-bold text-3xl block pb-[20px]"
            >
              Políticas de envíos
            </Link>
            <Link
              to="/shipping-policies"
              className="text-verde_turquesa hover:underline font-bold text-3xl block pb-[20px]"
            >
              Blog
            </Link>
          </div>

          <div>
            <p className="border-t-4 border-verde_turquesa text-verde_turquesa font-medium text-center pt-[5px]">
              Síguenos en
            </p>
            <div className="mt-3 flex justify-around space-x-4 border-b-4 border-verde_turquesa pb-[10px]">
              <a href="#" className="w-8 h-8">
                <img
                  src={tiktokIcon}
                  alt="TikTok"
                  className="w-full h-full bg-verde_turquesa rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
                />
              </a>
              <a href="#" className="w-8 h-8">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="w-full h-full bg-verde_turquesa rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
                />
              </a>
              <a href="#" className="w-8 h-8">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="w-full h-full bg-verde_turquesa rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
                />
              </a>
              <a href="#" className="w-8 h-8">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="w-full h-full bg-verde_turquesa rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
                />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=51978883199"
                className="w-8 h-8"
              >
                <img
                  src={whatsappIcon}
                  alt="WhatsApp"
                  className="w-full h-full bg-verde_turquesa rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
                />
              </a>
            </div>
          </div>

          <p className="text-verde_turquesa font-medium pt-[2vh]">
            Horario de atención
          </p>
          <p>Lunes a Viernes</p>
          <p>9:00 am a 9:00 pm</p>
        </div>
        {/* Logo */}
        <div className="flex w-full justify-between pr-[10px] lg:w-[100px] lg:pr[0px]">
          <div className="flex items-center w-full">
            <img
              src={logoTami}
              alt="logo-tami"
              className="w-1/4 md:w-1/6 lg:w-2/3 2xl:w-4/5"
            />
          </div>
          <div className="flex items-center lg:hidden">
            <a
              href="https://api.whatsapp.com/send?phone=51978883199"
              className="w-14 h-14"
            >
              <img
                src={whatsappIcon}
                alt="WhatsApp"
                className="w-full h-full rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
              />
            </a>
            <a className="w-20 h-20">
              <img
                src={emailIcon}
                alt="Email"
                className="w-full h-full rounded-tl-[25px] rounded-tr-[25px] rounded-br-[25px] rounded-bl-[25px] p-[5px]"
              />
            </a>
          </div>
        </div>

        {/* Menú del topnav para desktop*/}
        <div className="w-3/5 max-[1024px]:hidden">
          <nav className="flex justify-around items-center">
            <Link
              to="/"
              className="text-white hover:underline font-medium lg:text-xl 2xl:text-3xl"
            >
              Inicio
            </Link>
            <Link
              to="/about"
              className="text-white hover:underline font-medium lg:text-xl 2xl:text-3xl"
            >
              Nosotros
            </Link>
            <Link
              to="/products"
              className="text-white hover:underline font-medium lg:text-xl 2xl:text-3xl"
            >
              Productos
            </Link>
            <Link
              to="/shipping-policies"
              className="text-white hover:underline font-medium lg:text-xl 2xl:text-3xl"
            >
              Políticas de envíos
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <span className="text-white cursor-pointer pt-1 px-5 font-medium lg:text-xl 2xl:text-3xl">
                Más
              </span>
              <div className="absolute hidden group-hover:block bg-teal-700 text-white shadow-md rounded-md">
                <Link
                  to="/blog"
                  className="block px-4 py-2 hover:text-white font-medium text-2xl"
                >
                  Blog
                </Link>
                <Link
                  to="/store"
                  className="block px-4 py-2 hover:text-white font-medium text-2xl"
                >
                  Tienda
                </Link>
                <Link
                  to="/login"
                  className="block px-4 py-2  hover:text-white font-medium text-2xl"
                >
                  Login
                </Link>
              </div>
            </div>
          </nav>
        </div>

        {/* Botón de contacto */}
        <div className="flex items-center bg-white border-2 py-3 px-6 rounded-2xl">
          <a
            href="https://api.whatsapp.com/send?phone=51978883199"
            className="flex items-center space-x-3 rounded-lg"
          >
            <div>
              <p className="text-verde_turquesa text-2xl font-medium">
                Contáctanos
              </p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
