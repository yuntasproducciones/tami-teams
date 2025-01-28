import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoTami from "../../../public/assets/logos/logoprincipal.gif";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Nosotros" },
    { to: "/products", label: "Productos" },
    { to: "/shipping-policies", label: "Políticas de envíos" },
  ];

  const dropdownItems = [
    { to: "/blog", label: "Blog" },
    { to: "/store", label: "Tienda" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 ${
        isScrolled ? "bg-teal-700 shadow-lg" : "bg-transparent border-b border-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="flex items-center justify-center lg:justify-start w-1/10 h-full lg:ml-0">
          <img
            src={logoTami}
            alt="logo-tami"
            className="h-full w-auto scale-[0.9] lg:scale-[0.9] -mt-2"
            style={{ objectFit: "contain" }}
          />
        </div>



        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-8 justify-center w-full">
          {menuItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white hover:underline font-medium text-3xl tracking-wider"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative group">
            <span className="text-white cursor-pointer pt-1 px-5 font-medium text-3xl tracking-wider">
              Más
            </span>
            <div className="absolute hidden group-hover:block bg-teal-700 text-white shadow-md rounded-md">
              {dropdownItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 hover:text-white font-medium text-2xl tracking-wider"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-4xl"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-screen bg-teal-700 text-white flex flex-col items-center justify-center z-50">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-2xl font-medium mb-6 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="relative">
              <span className="text-2xl font-medium text-center">Más</span>
              <div className="mt-4 text-center">
                {dropdownItems.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="block text-xl font-medium mb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

