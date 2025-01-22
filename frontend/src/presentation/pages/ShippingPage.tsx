import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ShippingPage = () => {
  return (
    <div>
      <Navbar />
      <section className="p-6 text-center">
        <h1 className="text-2xl font-bold">Políticas de envíos</h1>
        <p className="text-gray-700 mt-4">Conoce nuestras políticas y tiempos de envío.</p>
      </section>
      <Footer />
    </div>
  );
};

export default ShippingPage;
