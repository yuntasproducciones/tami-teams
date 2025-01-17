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
    <nav
      className={`fixed top-0 left-0 w-full h-16 p-4 flex items-center z-50 transition-all duration-700 ${
        isScrolled ? "bg-teal-600 shadow-lg" : "bg-teal-600/50"
      }`}
      style={{ minHeight: '6rem' }} // Altura mínima fija
    >
      {/* Logo */}
      <div className="flex items-center justify-start w-1/3">
        <img
          src={logoTami}
          alt="logo-tami"
          className="h-32 w-auto" // Aumenta la altura a 32 (o cualquier tamaño) y ajusta el ancho automáticamente
          style={{ objectFit: "contain" }}
        />
      </div>


      {/* Menú */}
      <div className="flex items-center justify-center w-1/3">
        <ul className="flex space-x-9">
          <li>
            <Link to="/" className="text-white hover:underline font-bold">
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:underline font-bold">
              Nosotros
            </Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:underline font-bold">
              Productos
            </Link>
          </li>
          <li>
            <Link to="/shipping-policies" className="text-white hover:underline font-bold">
              Políticas de envíos
            </Link>
          </li>
          <li className="relative group">
            <button className="text-white hover:underline font-bold">
              Más
            </button>
            <ul className="absolute left-0 hidden mt-2 space-y-2 bg-teal-600 p-2 rounded group-hover:block">
              <li>
                <Link to="/blog" className="text-white hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/store" className="text-white hover:underline">
                  Tienda
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:underline">
                  Login
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <button className="ml-20 mt-0 text-teal-700 bg-white px-4 py-2 rounded hover:bg-teal-600 font-bold">
          Contáctanos
        </button>
      </div>
      {/* Espaciador (opcional) */}
      <div className="w-1/3"></div>
    </nav>
  );
};

export default Navbar;
