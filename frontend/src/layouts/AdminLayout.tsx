/*
 * Componente que define la estructura de la vista del dashboard de administrador.
 * Contiene el Header y el Sidebar, y renderiza las páginas del dashboard.
*/

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../presentation/components/AdminDashboard/Header";
import Sidebar from "../presentation/components/AdminDashboard/Sidebar";
import ScrollToTop from "../routes/ScrollToTop";

const AdminLayout: React.FC = () => {
  return (
    <>
    <ScrollToTop />
    <div className="flex flex-col h-screen">
      {/* Header ocupando todo el ancho */}
      <Header />
      {/* Contenedor principal con Sidebar a la izquierda y Outlet a la derecha */}
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1 p-4">
          {/* Aquí se renderizan las páginas del dashboard */}
          <Outlet />
        </div>
      </div>
    </div>
    </>
  );
};

export default AdminLayout;
