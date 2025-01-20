// BlogContenido.tsx
import Navbar from "../components/Navbar";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import styles from "../styles/Blog.module.css";

const BlogContenido = () => {
  return (
    <div>
      <Navbar />
      <Blog />
      <section className={`p-6 text-center ${styles.customSection}`}>
        <h2 className={`${styles.sectionTitle} text-2xl font-bold mb-4`}>BUENASSSSSSSSSSSSSSSSS</h2>
        <p className="text-gray-700">Explora nuestra amplia gama de productos diseñados para facilitar tu vida diaria.</p>
        {/* Additional repeated product descriptions */}
      </section>
      <Footer />
    </div>
  );
};

export default BlogContenido;