import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import bambu from "../../../../public/assets/images/blog/Bambu.jpg";
import maquina from "../../../../public/assets/images/blog/MaquinaEmbalaje.png";
import selladora from "../../../../public/assets/images/blog/Selladora.jpg";

const articles = [
  {
    title: "Panel de Fibra de Bambú: Sostenibilidad y Estética para la construcción moderna",
    description: "Futuro verde en la construcción. Beneficios del bambú.",
    image: bambu,
    category: "CATEGORÍA",
    link: "/blog/detalle/bambu",
  },
  {
    title: "Diseño Sostenible: Interiores Eco-Friendly para Oficinas Modernas",
    description: "Descubre cómo incorporar materiales reciclados y energías renovables.",
    image: maquina,
    category: "CATEGORÍA",
    link: "/blog/detalle/maquina",
  },
  {
    title: "Iluminación Inteligente: Optimizando Espacios de Trabajo",
    description: "Explora las últimas tendencias en iluminación LED y sistemas de control.",
    image: selladora,
    category: "CATEGORÍA",
    link: "/blog/detalle/selladora",
  },
];

const BlogContenido = () => {
  return (
    <div className="p-6 max-w-6xl mx-auto flex gap-8 my-10">
      <div className="w-3/4">
        <h2 className="text-2xl font-bold mb-4">Todos los artículos</h2>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <Link to={article.link} key={index} className="block">
              <div className="flex bg-teal-700 text-white rounded-lg overflow-hidden shadow-lg h-40">
                <div className="w-1/3 h-full flex-shrink-0">
                  <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-4 w-2/3 flex flex-col justify-center">
                  <h3 className="text-lg font-bold">{article.title}</h3>
                  <p className="text-sm mt-2">{article.description}</p>
                  <span className="text-xs bg-white text-teal-700 px-2 py-1 rounded mt-3 self-start">
                    {article.category}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-1/4">
        <div className="relative mb-6">
          <input 
            type="text" 
            placeholder="Buscar..." 
            className="w-full p-2 border border-gray-300 rounded-lg pl-10"
          />
          <FaSearch className="absolute left-3 top-3 text-gray-500" />
        </div>
        <h3 className="text-lg font-bold mb-3">CATEGORÍAS</h3>
        <ul className="text-sm space-y-2 text-teal-700">
          <li><Link to="#">SELLADOR DE BOTELLAS</Link></li>
          <li><Link to="#">MÁQUINA DE EMBALAJE</Link></li>
          <li><Link to="#">SELLADORA DE VASOS</Link></li>
          <li><Link to="#">SELLADORA DE BOLSAS</Link></li>
          <li><Link to="#">SOLDADORA LINGBA</Link></li>
          <li><Link to="#">SOLDADORA SPARK</Link></li>
          <li><Link to="#">PANEL DE FIBRA DE BAMBO</Link></li>
          <li><Link to="#">VENTILADOR HOLOGRÁFICO</Link></li>
          <li><Link to="#">WPC FENCE PANEL</Link></li>
          <li><Link to="#">WPC WALL PANEL</Link></li>
          <li><Link to="#">PURIFICADOR DE AGUA</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default BlogContenido;



