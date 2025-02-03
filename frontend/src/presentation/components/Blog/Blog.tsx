import React from 'react';
import Navbar from "../Navbar.tsx";
import styles from "../../../styles/Blog.module.css";
import Blog1 from '../../../../public/assets/images/blog/Blog1.jpg';
import Blog2 from '../../../../public/assets/images/blog/Blog2.jpg';
import Blog3 from '../../../../public/assets/images/blog/Blog3.jpg';
import mascota from '../../../../public/assets/images/blog/LOGO.png';
import rayos from '../../../../public/assets/images/blog/BLOG PORTDADA.png';

{/* Comentario */}
const Blog: React.FC = () => {
    return (
        <div className={styles.pageContainer}>
            <Navbar />
            <main className={styles.mainContent}>
                <section className={styles.blogContainer}>
                    <BlogHeader />
                    <BlogDescription />
                    <BlogImageGrid />
                </section>
            </main>
        </div>
    );
};

const BlogHeader: React.FC = () => (
    <div className={styles.blogHeader}>
        <img src={rayos} alt="rayos" className={styles.rayos}/>
        <img src={mascota} alt="LOGO" className={styles.blogIcon}/>
        <div className={styles.blogTitleContainer}>
            <h1 className={styles.blogTitle}>BLOG</h1>
            <h2 className={styles.blogSubtitle}>TAMI</h2>
        </div>
    </div>
);

const BlogDescription: React.FC = () => (
    <div className={`${styles.blogDescription} space-y-2`}>
        <p>
            En esta sección encontrarás temas
            <span className="block">sobre diseño de interiores para entornos:</span>
        </p>
        <ul className="list-disc list-inside">
            <li>Profesionales</li>
            <li>Oficinas</li>
            <li>Restaurantes</li>
            <li>Hoteles</li>
            <li>Eventos especiales</li>
        </ul>
        <p>Incluyendo tips, artículos, tendencias y consejos.</p>
    </div>
);

const BlogImageGrid: React.FC = () => (
    <div className={styles.imageGrid}>
        <BlogImage src={Blog1} alt="Interior Design" className={styles.blogImage2} />
        <BlogImage src={Blog2} alt="Color Palette" className={styles.blogImage} />
        <BlogImage src={Blog3} alt="Office Design" className={styles.blogImage3} />
    </div>
);

const BlogImage: React.FC<{ src: string; alt: string; className: string }> = ({ src, alt, className }) => (
    <div className={styles.imageContainer}>
        <img src={src} alt={alt} className={className} />
    </div>
);

export default Blog;
