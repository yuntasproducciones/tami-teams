import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logoTami from "../../../public/assets/logos/logoprincipal.gif";

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

  // Definir el menú en un array
  const menuItems = [
    { to: "/", label: "Inicio" },
    { to: "/about", label: "Nosotros" },
    { to: "/products", label: "Productos" },
    { to: "/shipping-policies", label: "Políticas de envíos" },
  ];

  // Definir el dropdown de "Más"
  const dropdownItems = [
    { to: "/blog", label: "Blog" },
    { to: "/store", label: "Tienda" },
    { to: "/login", label: "Login" },
  ];

  return (
    <header
      className={`fixed w-full h-32 transition-all z-50 bg-top duration-1000 ${
        isScrolled ? "bg-teal-700 shadow-lg" : "border-b border-white"
      }`}
    >
      <div className="mx-auto flex items-center justify-between px-[100px] py-2 h-full">
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
        <div className="w-3/5 flex justify-between">
          <nav className="flex justify-around gap-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-white hover:underline font-medium text-3xl tracking-wider"
              >
                {item.label}
              </Link>
            ))}
            {/* Dropdown */}
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
        </div>

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


