import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../presentation/pages/HomePage.tsx";
import ProductsPage from "../presentation/pages/ProductsPage.tsx";
import AboutPage from "../presentation/pages/AboutPage.tsx";
import ShippingPage from "../presentation/pages/ShippingPage.tsx";
import BlogPage from "../presentation/pages/BlogPage.tsx";


const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/shipping-policies" element={<ShippingPage />} />
          <Route path="/blog" element={<BlogPage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
