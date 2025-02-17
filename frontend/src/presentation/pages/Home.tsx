import Hero from "../components/Inicio/Hero.tsx";
import MainSeccion from "../components/MainSection";
import Bienvenida from "../components/Bienvenida";

import PorQueNosotros from "../components/PorQueNosotros";
import { Comentarios } from "../components/Comentarios.tsx";

const Home = () => {
  return (
    <>
      <Hero />
      <MainSeccion />
      <Bienvenida />
      <PorQueNosotros />
      <Comentarios />
    </>
  );
};

export default Home;
