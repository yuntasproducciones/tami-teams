import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Load_main } from "../presentation/components/Load_main.tsx";
import ScrollToTop from "./ScrollToTop.tsx";
import Home from "../presentation/pages/Home";
import Products from "../presentation/pages/Products";
import About from "../presentation/pages/About";
import ShippingPolicies from "../presentation/pages/ShippingPolicies";
import Login from "../presentation/pages/Login.tsx";
import BlogContenido from "../presentation/pages/BlogContenido";
import DetalleLayer from "../presentation/pages/DetalleLayer.tsx";

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => {
          setIsHidden(true);
        }, 500);
      }, 2000); // Tiempo de espera adicional si es necesario
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className={`relative ${isLoading ? "overflow-hidden" : ""}`}>
        {isLoading && (
          <div
            className={`absolute top-0 left-0 w-full h-full bg-white z-10 transition-opacity duration-500 ${
              !isLoading ? "opacity-0" : "opacity-100"
            } ${isHidden ? "hidden" : ""}`}
          >
            <Load_main />
          </div>
        )}

        <div
          className={`${
            isLoading ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/shipping-policies" element={<ShippingPolicies />} />
            <Route path="/login" element={<Login />} />
            <Route path="/blog" element={<BlogContenido />} />
            <Route path="/blog/detalle/:producto" element={<DetalleLayer />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRoutes;
