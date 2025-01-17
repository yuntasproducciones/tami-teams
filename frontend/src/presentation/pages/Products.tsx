import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Products = () => {
  return (
    <div>
      <Navbar />
      <section className="p-6 text-center">
        <h1 className="text-2xl font-bold">Productos</h1>
        <p className="text-gray-700 mt-4">Aquí encontrarás todos nuestros productos disponibles.</p>
      </section>
      <Footer />
    </div>
  );
};

export default Products;
