import Navbar from "../components/Navbar";
import Hero from "../components/Inicio/Hero";
import Footer from "../components/Footer";
import MainSeccion from "../components/MainSection";
import  Bienvenida  from "../components/Bienvenida";
import BlogSection from "../components/Inicio/BlogSection";


const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <MainSeccion />
      <Bienvenida />
      <BlogSection />
      <Footer />
    </div>
  );
};

export default HomePage;
