import React from 'react';
import Navbar from "./Navbar.tsx";
import Footer from "./Footer.tsx";
import styles from "../../styles/Blog.module.css";
import Blog1 from '../../../public/assets/images/Blog1.jpg';
import Blog2 from '../../../public/assets/images/Blog2.jpg';
import Blog3 from '../../../public/assets/images/Blog3.jpg';
import mascota from '../../../public/assets/logos/mascota_tami_3.webp';



const Blog: React.FC = () => {
  return (
      <div className={styles.pageContainer}>
        <Navbar />
        <main className={styles.mainContent}>
          <section className={styles.blogContainer}>
            <div className={styles.blogHeader}>
              <img src={mascota} alt="LOGO" className={styles.blogIcon} />
              <div className={styles.blogTitleContainer}>
                <h1 className={styles.blogTitle}>BLOG</h1>
                <h2 className={styles.blogSubtitle}>TAMI</h2>
              </div>
            </div>
            <p className={styles.blogDescription}>
              En esta sección encontrarás temas sobre diseño de interiores para entornos:
              <ul className={styles.topicsList}>
                <li>Profesionales</li>
                <li>Oficinas</li>
                <li>Restaurantes</li>
                <li>Hoteles</li>
                <li>Eventos especiales</li>
              </ul>
              Incluyendo tips, artículos, tendencias y consejos.
            </p>
            <div className={styles.imageGrid}>
              <div className={styles.imageContainer}>
                <img src={Blog1} alt="Interior Design" className={styles.blogImage2} />
              </div>
              <div className={styles.imageContainer}>
                <img src={Blog2} alt="Color Palette" className={styles.blogImage} />
              </div>
              <div className={styles.imageContainer}>
                <img src={Blog3} alt="Office Design" className={styles.blogImage3} />
              </div>
            </div>
          </section>

        </main>
        <Footer />
      </div>
  );
};



export default Blog;