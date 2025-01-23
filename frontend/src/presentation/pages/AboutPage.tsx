import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImageSection from "../components/nosotros/ImageSection";
import PropositosSection from "../components/nosotros/PropositosSection";
import Mision from "../components/nosotros/Mision";
import Valores from "../components/nosotros/Valores";

const AboutPage = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      
      <main>
        <section >
          <ImageSection />
        </section>
        
        <section>
          <PropositosSection />
        </section>
        
        <section>
          <Mision />
        </section>
        
        <section>
          <Valores />
        </section>
      </main>
      
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default AboutPage;

