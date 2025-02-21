import Hero from "../components/Inicio/Hero.tsx";
import MainSeccion from "../components/MainSection";
import Bienvenida from "../components/Bienvenida";

import PorQueNosotros from "../components/PorQueNosotros";
import { Comentarios } from "../components/Comentarios.tsx";
import BlogSection from "../components/Inicio/BlogSection.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <MainSeccion />
      <Bienvenida />
      <PorQueNosotros />
      <Comentarios />
      <BlogSection />
    </>
  );
};

export default Home;
