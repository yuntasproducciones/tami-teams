import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTami from '../../../public/assets/logos/logoprincipal.gif';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 bg-top ${
        isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-[100px] py-2 h-full">
        {/* Logo */}
        <div className="flex items-center justify-start w-1/10 h-full">
          <img
            src={logoTami}
            alt="logo-tami"
            className="h-full w-auto scale-150"
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Menú */}
        <div className="w-3/5">
          <nav className="flex justify-around">
            <Link to="/" className="text-white hover:underline font-medium text-2xl">
              Inicio
            </Link>
            <Link to="/about" className="text-white hover:underline font-medium text-2xl">
              Nosotros
            </Link>
            <Link to="/products" className="text-white hover:underline font-medium text-2xl">
              Productos
            </Link>
            <Link to="/shipping-policies" className="text-white hover:underline font-medium text-2xl">
              Políticas de envíos
            </Link>

            {/* Dropdown */}
            <div className="relative group">
              <span className="text-white cursor-pointer pt-1 px-5 font-medium text-2xl">
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
