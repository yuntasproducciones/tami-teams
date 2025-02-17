/**
 * @file AppRoutes.tsx
 * Este archivo contiene las rutas de la aplicación. 
 * Esta usando el componente de react-router-dom createBrowserRouter para definir las rutas 
 * y el componente RouterProvider para proveer las rutas a la aplicación.
 * Las rutas están definidas en un array de objetos, donde cada objeto representa una ruta. 
 * Esto ayuda a organizar las rutas de la aplicación como un árbol jerárquico.
 */

import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Load_main } from "../presentation/components/Load_main.tsx";
import Layout from "../layouts/Layout.tsx";
import AdminLayout from "../layouts/AdminLayout";

// Páginas
import Home from "../presentation/pages/Home";
import Products from "../presentation/pages/Products";
import About from "../presentation/pages/About";
import ShippingPolicies from "../presentation/pages/ShippingPolicies";
import Login from "../presentation/pages/Login";
import MainTable from "../presentation/pages/admin-pages/MainTable";
import DetalleLayer from "../presentation/pages/DetalleLayer";
import DetalleSelladora from "../presentation/pages/DetalleSelladora";
import DetalleMaquina from "../presentation/pages/DetalleMaquina";
import DetalleBambu from "../presentation/pages/DetalleBambu";
import Details from "../presentation/pages/DetalleProductos";
import Blog from "../presentation/components/Blog/Blog.tsx";

const AppRoutes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
        setTimeout(() => setIsHidden(true), 500);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  {/*
    * Existen dos layouts en la aplicación: Layout y AdminLayout. 
    * También hay una página de login que da acceso a la aplicación de administrador.
    */}

  const router = createBrowserRouter([ 
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "products", element: <Products /> },
        { path: "shipping-policies", element: <ShippingPolicies /> },
        { path: "blog", element: <Blog /> },
        { path: "blog/detalle/:producto", element: <DetalleLayer /> },
        { path: "selladora", element: <DetalleSelladora /> },
        { path: "maquina", element: <DetalleMaquina /> },
        { path: "bambu", element: <DetalleBambu /> },
        { path: "detalle-producto/:id", element: <Details /> },
      ],
    },
    {
      path: "/admin",
      element: <AdminLayout />,
      children: [
        { path: "", element: <MainTable /> }
      ],
    },
    {
      path: "/login", 
      element: <Login />,
    },
  ]);

  return (
    <>
      {isLoading && (
        <div
          className={`absolute top-0 left-0 w-full h-full bg-white z-10 transition-opacity duration-500 ${
            isHidden ? "hidden" : ""
          }`}
        >
          <Load_main />
        </div>
      )}
      <div className={`${isLoading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default AppRoutes;
