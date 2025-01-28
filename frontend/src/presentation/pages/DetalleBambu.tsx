import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Blog from "../components/Blog/Blog";
import Footer from "../components/Footer";
import Bambu from "../../../public/assets/images/blog/Bambu.jpg";
import Maquina from "../../../public/assets/images/blog/MaquinaEmbalaje.png";
import selladora from "../../../public/assets/images/blog/Selladora.jpg";

const BlogContenido = () => {
    return (
        <div>
            <Navbar />
            <Blog />
            <section className="p-6 text-center mt-56">
                <h1 className="text-5xl mb-4 mt-44 italic text-left ml-52 text-verde_turquesa"> Blog </h1>
                <h2 className="text-5xl font-bold mt-4 text-left ml-52 text-verde_turquesa">NOTICIAS Y ARTICULOS RECIENTES</h2>
                <div className="flex justify-center mt-6 space-x-52">
                    <Link to="/bambu" className="max-w-3xl rounded overflow-hidden shadow-lg m-24 transform transition-transform duration-300 hover:scale-105">
                        <div className="border-4 border-verde_turquesa overflow-hidden h-[35rem] rounded-3xl">
                            <img className="w-full h-full object-cover" src={Bambu} alt="Bambu"/>
                        </div>
                        <div className="px-20 py-16">
                            <div className="font-bold text-2xl mb-2 text-verde_turquesa">Panel de fibra de bambú</div>
                            <p className="text-gray-700 text-lg">Sostenibilidad y estética para la construcción moderna.</p>
                        </div>
                    </Link>
                    <Link to="/maquina" className="max-w-3xl rounded overflow-hidden shadow-lg m-24 transform transition-transform duration-300 hover:scale-105">
                        <div className="border-4 border-verde_turquesa overflow-hidden h-[35rem] rounded-3xl">
                            <img className="w-full h-full object-cover" src={Maquina} alt="Maquina" />
                        </div>
                        <div className="px-20 py-16">
                            <div className="font-bold text-2xl mb-2 text-verde_turquesa">Máquina de embalaje</div>
                            <p className="text-gray-700 text-lg">Eficiencia y protección en cada empaque.</p>
                        </div>
                    </Link>
                    <Link to="/selladora" className="max-w-3xl rounded overflow-hidden shadow-lg m-24 transform transition-transform duration-300 hover:scale-105">
                        <div className="border-4 border-verde_turquesa overflow-hidden h-[35rem] rounded-3xl">
                            <img className="w-full h-full object-cover" src={selladora} alt="Selladora" />
                        </div>
                        <div className="px-20 py-16">
                            <div className="font-bold text-2xl mb-2 text-verde_turquesa">Sellador de botellas</div>
                            <p className="text-gray-700 text-lg">La solución ideal para garantizar la calidad de tus productos.</p>
                        </div>
                    </Link>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default BlogContenido;
