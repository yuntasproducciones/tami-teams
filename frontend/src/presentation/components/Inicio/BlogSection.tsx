import font from "../../../../public/assets/images/fondoo.jpg";
import pg1 from "../../../../public/assets/images/DECORACIÓN-01.jpg";
import pg2 from "../../../../public/assets/images/MÁQUINA-02.webp";
import pg3 from "../../../../public/assets/images/SELLADORA-03.webp";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "PANEL DE FIBRA DE BAMBÚ",
      subTitle: "SOSTENIBILIDAD Y ESTÉTICA PARA LA CONSTRUCCIÓN MODERNO",
      description:
        "El Panel de Fibra de Bambú es una solución innovadora y ecológica para quienes buscan materiales de construcción sostenibles sin...",
      image: pg1,
    },
    {
      id: 2,
      title: "Máquina de Embalaje ",
      subTitle: "EFICIENTE Y PROTECCIÓN EN CADA EMPAQUE",
      description:
        "En cualquier industria, el empaque de los productos es uno de los pasos más críticos para asegurar que lleguen en perfectas condiciones a...",
      image: pg2,
    },
    {
      id: 3,
      title: "SELLADOR DE BOTELLAS ",
      subTitle: "LA SOLUCIÓN IDEAL PARA GARANTIZAR LA CALIDAD DE TUS PRODUCTOS",
      description:
        "El sellador de botellas es una herramienta imprescindible para cualquier negocio que trabaje con líquidos, ya sea en la industria...",
      image: pg3,
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${font})` }}
      ></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <header className="mb-10 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold text-[#2d2d2d]">
            De nuestro BLOG
          </h2>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-[#009e9d] leading-tight">
            NOTICIAS Y ARTÍCULOS <br className="hidden md:inline" /> RECIENTES
          </h1>
        </header>

        {/* Grid Responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative shadow-lg flex flex-col bg-[#009e9d] rounded-[50px] overflow-hidden"
            >
              {/* Imagen */}
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 sm:h-72 object-cover"
              />

              {/* Contenido */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  {article.title}
                </h3>
                <h2 className="text-lg sm:text-xl font-semibold text-white mt-2">
                  {article.subTitle}
                </h2>
                <p className="text-sm sm:text-base text-white mt-4">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;




