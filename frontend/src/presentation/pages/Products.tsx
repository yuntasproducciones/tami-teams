import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgSec from "../components/productos/ImgSec";
import Emprendimiento from "../components/productos/Emprendimiento";
import Decoracion from "../components/productos/Decoracion";
import Trabajo from "../components/productos/Trabajo";

const Products = () => {
  return (
    <>
      <Navbar />
      <ImgSec />
      <Emprendimiento />
      <Decoracion />
      <Trabajo />
      <Footer />
    </>
  );
};

export default Products;
