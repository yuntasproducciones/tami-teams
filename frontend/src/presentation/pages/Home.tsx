import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { MainSeccion } from "../components/MainSection";

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