import { useState } from "react";
import { FaRegFolder } from "react-icons/fa";

const Sidebar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <aside className="bg-gray-200 w-64 p-4 space-y-4 min-h-screen text-gray-800">
      <nav>
        <ul className="space-y-1">
          <li className="font-bold text-lg">★ Administracion</li>
          {["Seguimiento", "Ventas"].map((item, index) => (
            <li key={index} className="flex items-center gap-2 text-sm text-gray-700 hover:text-gray-900">
              <FaRegFolder className="text-gray-500" />
              {item}
            </li>
          ))}
        </ul>
      </nav>

      {/* Switch animado */}
      <div className="border-t border-gray-400 pt-4 flex items-center justify-between">
        <span className="text-sm font-medium">Dark Mode</span>
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" checked={darkMode} onChange={toggleDarkMode} />
          <div className={`w-10 h-5 rounded-full transition-colors duration-300 ${darkMode ? "bg-gray-700" : "bg-gray-400"}`}>
            <div
              className={`absolute w-4 h-4 bg-white rounded-full shadow-md transition-transform duration-300 ${darkMode ? "translate-x-5" : "translate-x-1"}`}
            ></div>
          </div>
        </label>
      </div>

      <div className="border-t border-gray-400 pt-4 text-center">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white text-lg">👤</div>
          <p className="font-semibold">Bienvenido</p>
          <p className="text-sm text-gray-600">Administrador</p>
          <button className="mt-2 w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 transition">Cerrar sesión</button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

