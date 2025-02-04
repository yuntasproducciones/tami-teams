import Navbar from "../components/Navbar";
import Hero from "../components/Inicio/Hero.tsx";
import MainSeccion from "../components/MainSection";
import Bienvenida from "../components/Bienvenida";
import Footer from "../components/Footer";
import PorQueNosotros from "../components/PorQueNosotros";
import { Comentarios } from "../components/Comentarios.tsx";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <MainSeccion />
      <Bienvenida />
      <PorQueNosotros />
      <Comentarios />
      <Footer />
    </>
  );
};

export default Home;
