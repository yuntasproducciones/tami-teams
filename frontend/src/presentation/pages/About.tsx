import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSection from "../components/nosotros/ImageSection";
import PropositosSection from "../components/nosotros/PropositosSection";
import Mision from "../components/nosotros/Mision";
import Valores from "../components/nosotros/Valores";

const About = () => {
  return (
    <>
      <Navbar />
      <ImageSection />
      <PropositosSection />
      <Mision />
      <Valores />
      <Footer />
    </>
  );
};

export default About;
