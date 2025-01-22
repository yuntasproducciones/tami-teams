import Navbar from "../components/Navbar";
import Hero from "../components/Inicio/Hero";
import Footer from "../components/Footer";
import { MainSeccion } from "../components/MainSection";

<<<<<<< HEAD:frontend/src/presentation/pages/HomePage.tsx
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
=======
const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MainSeccion />
            <Footer />
        </div>
    );
};

export default Home;
>>>>>>> cf431c7d1bbd628edd0e6ce0ad1b0025e33a8a4f:frontend/src/presentation/pages/Home.tsx
