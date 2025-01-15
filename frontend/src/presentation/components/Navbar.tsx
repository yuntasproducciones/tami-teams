import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-teal-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">TAMI</div>
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Inicio</Link></li>
        <li><Link to="/about" className="text-white">Nosotros</Link></li>
        <li><Link to="/products" className="text-white">Productos</Link></li>
        <li><Link to="/shipping-policies" className="text-white">Políticas de envíos</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
