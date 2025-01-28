import Navbar from "../components/Navbar";
import Hero from "../components/Inicio/Hero";
import Footer from "../components/Footer";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="p-6 text-center">
        <h2 className="text-2xl font-bold mb-4">Productos destacados</h2>
        <p className="text-gray-700">Explora nuestra amplia gama de productos diseñados para facilitar tu vida diaria.</p>
        <p className="text-gray-700">Explora nuestra amplia gama de productos diseñados para facilitar tu vida diaria.</p>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
