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
    <header className={`fixed top-0 left-0 w-full h-24 backdrop-blur-md transition-all z-50 bg-top ${isScrolled ? "bg-teal-600 shadow-lg" : "bg-teal-600/50"}`}>
      <div className="mx-auto flex items-center justify-between px-[50px] py-1 h-full ">
        {/* Logo */}
        <div className="flex items-center justify-start w-1/10 h-full">
          <img
            src={logoTami}
            alt="logo-tami"
            className="h-full w-auto" // Aumenta la altura a 32 (o cualquier tamaño) y ajusta el ancho automáticamente
            style={{ objectFit: "contain" }}
          />
        </div>

        {/* Menú */}
        <div className="w-3/5">
          <div className="">
            <nav className="flex justify-around">
              <Link to="/" className="text-white hover:underline font-black">
                Inicio
              </Link>
              <Link to="/about" className="text-white hover:underline font-black">
                Nosotros
              </Link>
              <Link to="/products" className="text-white hover:underline font-black">
                Productos
              </Link>
              <Link to="/shipping-policies" className="text-white hover:underline font-black">
                Políticas de envíos
              </Link>

              {/* Dropdown */}
              <div className="relative group">
                <span className="text-white cursor-pointer pt-1 px-5 font-black">Más</span>
                <div className="absolute hidden group-hover:block bg-teal-700 text-white shadow-md rounded-md">
                  <Link to="/blog" className="block px-4 py-2 hover:text-white">
                    Blog
                  </Link>
                  <Link to="/store" className="block px-4 py-2 hover:text-white">
                    Tienda
                  </Link>
                  <Link to="/login" className="block px-4 py-2 hover:text-white">
                    Login
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex items-center bg-white h-3/6 border-2 py-2 px-5 rounded-2xl">
          <a
            href="https://api.whatsapp.com/send?phone=51978883199"
            className="flex items-center space-x-3  p-full rounded-lg"
          >
            <div>
              <p className="text-verde_turquesa text-lg font-extrabold">Contáctanos</p>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
