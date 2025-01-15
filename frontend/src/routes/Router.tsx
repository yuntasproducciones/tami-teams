import { createBrowserRouter } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Products from "../presentation/pages/Products";
import About from "../presentation/pages/About";
import ShippingPolicies from "../presentation/pages/ShippingPolicies";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/products", element: <Products /> },
  { path: "/about", element: <About /> },
  { path: "/shipping-policies", element: <ShippingPolicies /> },
]);
