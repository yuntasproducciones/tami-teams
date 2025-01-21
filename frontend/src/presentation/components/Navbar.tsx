import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTami from '../../../public/assets/logos/logoprincipal.gif';
import menuHamburguesa from "../../../public/assets/icons/navigation-bar.png";
import usuarioIcono from "../../../public/assets/icons/USUARIO_Mesa_de_trabajo_1.png"

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
    setIsSidebarOpen((x) => {return !x});
  }

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 bg-top duration-1000 ${isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"
        }`}
    >
      <div className="mx-auto flex items-center justify-between px-[100px] py-2 h-full">
        <div className="max-[1000px]:block hidden" onClick={activarSidebar}>
          <img src={menuHamburguesa} alt="Menú hamburguesa" className="w-[50px]" />
        </div>
        <div
          className={`fixed top-[8rem] left-0 z-[1] h-full w-[80vw] bg-white px-[5vw] py-[5vw] max-w-[400px] rounded-tl-none rounded-tr-[50px] rounded-br-[50px] rounded-bl-none ${
            isSidebarOpen ? "" : "hidden"
          }`}
        >
          <div className="flex border-b-4 border-verde_turquesa pb-[5vh]">
            <img src={usuarioIcono} className="max-w-[100px]" alt="Ícono de usuario" />
            <div className="flex flex-col justify-center">
              <p className="font-medium text-3xl">HOLA!</p>
              <p className="font-medium text-3xl">Usuario</p>
            </div>
          </div>
          <Link to="/" className="text-verde_turquesa hover:underline font-medium text-3xl block pb-[5vh] pt-[5vh]">
            Inicio
          </Link>
          <Link to="/about" className="text-verde_turquesa hover:underline font-medium text-3xl block pb-[5vh]">
            Nosotros
          </Link>
          <Link to="/products" className="text-verde_turquesa hover:underline font-medium text-3xl block pb-[5vh]">
            Productos
          </Link>
          <Link to="/shipping-policies" className="text-verde_turquesa hover:underline font-medium text-3xl block pb-[5vh]">
            Políticas de envíos
          </Link>
          <Link to="/shipping-policies" className="text-verde_turquesa hover:underline font-medium text-3xl block pb-[5vh]">
            Blog
          </Link>
          <p className="border-t-4 border-b-4 border-verde_turquesa text-verde_turquesa font-medium text-center pb-[1vh] pt-[1vh]">Síguenos en</p>
          <p className="text-verde_turquesa font-medium pt-[2vh]">Horario de atención</p>
          <p>Lunes a Viernes</p>
          <p>9:00 am a 9:00 pm</p>
        </div>
        {/* Logo */}
        <div className="flex items-center justify-start w-1/10 h-full">
          <img
            src={logoTami}
            alt="logo-tami"
            className="h-full w-auto scale-[2] lg:scale-[1.7] -mt-6"
            style={{ objectFit: "contain" }}
          />


        </div>

        {/* Menú */}
        <div className="w-3/5 max-[1000px]:hidden">
          <nav className="flex justify-around">
            <Link to="/" className="text-white hover:underline font-medium text-3xl">
              Inicio
            </Link>
            <Link to="/about" className="text-white hover:underline font-medium text-3xl">
              Nosotros
            </Link>
            <Link to="/products" className="text-white hover:underline font-medium text-3xl">
              Productos
            </Link>
            <Link to="/shipping-policies" className="text-white hover:underline font-medium text-3xl">
              Políticas de envíos
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <span className="text-white cursor-pointer pt-1 px-5 font-medium text-3xl">
                Más
              </span>
              <div className="absolute hidden group-hover:block bg-teal-700 text-white shadow-md rounded-md">
                <Link to="/blog" className="block px-4 py-2 hover:text-white font-medium text-2xl">
                  Blog
                </Link>
                <Link to="/store" className="block px-4 py-2 hover:text-white font-medium text-2xl">
                  Tienda
                </Link>
                <Link to="/login" className="block px-4 py-2  hover:text-white font-medium text-2xl">
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
