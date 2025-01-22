import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSection from "../components/nosotros/ImageSection";
import PropositosSection from "../components/nosotros/PropositosSection";
import Mision from "../components/nosotros/Mision";

const AboutPage = () => {
  return (
    <div>
      <Navbar />
          <ImageSection />
          <PropositosSection />
          <Mision />
      <Footer />
    </div>
  );
};

export default AboutPage;
