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
      description:"El Panel de Fibra de Bambú es una solución innovadora y ecológica para quienes buscan materiales de construcción sostenibles sin...",
      image: pg1,
    },
    {
      id: 2,
      title: "Máquina de Embalaje ",
      subTitle: "EFICIENTE Y PROTECCIÓN EN CADA EMPAQUE",
      description:"En cualquier industria, el empaque de los productos es uno de los pasos más críticos para asegurar que lleguen en perfectas condiciones a...",
      image: pg2,
    },
    {
      id: 3,
      title: "SELLADOR DE BOTELLAS ",
      subTitle: "LA SOLUCIÓN IDEAL PARA GARANTIZAR LA CALIDAD DE TUS PRODUCTOS",
      description:"El sellador de botellas es una herramienta imprescindible para cualquier negocio que trabaje con líquidos, ya sea en la industria...",
      image: pg3,
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${font})` }}
      ></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-10">
          <h2 className="text-5xl font-bold text-[#2d2d2d]">De nuestro BLOG</h2>
          <h1 className="text-7xl font-extrabold text-[#009e9d]">
            NOTICIAS Y ARTÍCULOS <br /> RECIENTES
          </h1>
        </header>

        <div className="grid grid-cols-0 md:grid-cols-3 gap-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative shadow-lg min-h-[400px] flex flex-col bg-[#009e9d] rounded-[70px]"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-80 object-cover rounded-[70px]"
              />

              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-4xl font-bold text-white p-1">
                  {article.title}
                </h3>
                <h2 className="text-base font-bold text-white p-1">
                    {article.subTitle}
                </h2>
                <p className="text-base text-white p-1">
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



