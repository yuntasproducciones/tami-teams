import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../presentation/pages/Home";
import Products from "../presentation/pages/Products";
import About from "../presentation/pages/About";
import ShippingPolicies from "../presentation/pages/ShippingPolicies";
import Login from "../presentation/pages/Login.tsx";


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/shipping-policies" element={<ShippingPolicies />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
