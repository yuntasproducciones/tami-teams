/***
 * Componente que define la estructura de la vista principal de la aplicación.
 * Contiene el Header y el Footer, y renderiza las páginas de la aplicación.
 */

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../presentation/components/Navbar";
import Footer from "../presentation/components/Footer";
import ScrollToTop from "../routes/ScrollToTop";

const MainLayout: React.FC = () => {
  return (
    <>
    <ScrollToTop />
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;