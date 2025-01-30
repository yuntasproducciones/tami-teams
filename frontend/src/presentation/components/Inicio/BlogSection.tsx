import font from "../../../../public/assets/images/ARTICULOS-INICIO.jpg";
import pg1 from "../../../../public/assets/images/Imagen14.webp";
import pg2 from "../../../../public/assets/images/maquinaembalaje.webp";
import pg3 from "../../../../public/assets/images/sellador.webp";

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
    <section className="relative bg-white py-10">
      <div
        className="absolute inset-0 bg-no-repeat bg-cover opacity-10"
        style={{ backgroundImage: `url(${font})` }}
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h2 className="text-4xl font-semibold text-black">De nuestro BLOG</h2>
          <h1 className="text-6xl font-extrabold text-green-800">
            NOTICIAS Y ARTÍCULOS <br /> RECIENTES
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative  bg-white shadow-lg overflow-hidden rounded-2xl min-h-[400px] flex flex-col"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover rounded-t-3xl"
              />

              <div className="p-4 flex-grow flex flex-col bg-teal-700 rounded-b-3xl">
                <h3 className="mt-1 text-4xl font-bold text-white p-2">
                  {article.title}
                </h3>
                <h2 className="text-xl font-bold text-white p-2">
                    {article.subTitle}
                </h2>
                <p className="mt-2 text-base font-bold text-white p-2">
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



