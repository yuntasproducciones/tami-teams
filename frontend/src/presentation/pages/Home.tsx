import Navbar from "../components/Navbar";
import Hero from "../components/Inicio/Hero.tsx";
import MainSeccion from "../components/MainSection";
import  Bienvenida  from "../components/Bienvenida";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <MainSeccion />
            <Bienvenida />
            <Footer />
        </div>
    );
};

export default Home;