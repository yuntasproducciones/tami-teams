import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImgSec from "../components/productos/ImgSec";
import Emprendimiento from "../components/productos/Emprendimiento";

const ProductsPage = () => {
  return (
    <div>
      <Navbar />
      <section>
        <ImgSec />
      </section>
      <section>
        <Emprendimiento />
      </section>
      <Footer />
    </div>
  );
};

export default ProductsPage;
