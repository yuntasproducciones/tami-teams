import font from "../../../../public/assets/images/ARTICULOS-INICIO.jpg";
import pg1 from "../../../../public/assets/images/Imagen14.webp";
import pg2 from "../../../../public/assets/images/maquinaembalaje.webp";
import pg3 from "../../../../public/assets/images/sellador.webp";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Panel de Fibra de Bambú Sostenibilidad y Estética para la Construcciión Moderno",
      description:
        "El Panel de Fibra de Bambú es una solución innovadora y ecológica para quienes buscan materiales de construcción sostenibles sin...",
      image: pg1,
      label: "01",
    },
    {
      id: 2,
      title: "Máquina de Embalaje Eficiente y protección en cada empaque",
      description:
        "En cualquier industria, el empaque de los productos es uno de los pasos más críticos para asegurar que lleguen en perfectas condiciones a...",
      image: pg2,
      label: "02",
    },
    {
      id: 3,
      title: "SELLADOR DE BOTELLAS La solucion ideal para garantizar la calidad de tus productos",
      description:
        "El sellador de botellas es una herramienta imprescindible para cualquier negocio que trabaje con líquidos, ya sea en la industria...",
      image: pg3,
      label: "03",
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
          <h2 className="text-2xl font-semibold text-green-800">De nuestro blog</h2>
          <h1 className="text-4xl font-bold text-green-800">
            Noticias <br /> y artículos recientes
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <div
              key={article.id}
              className="relative bg-white shadow-lg overflow-hidden min-h-[400px] flex flex-col border-8 border-white-500"
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-60 object-cover"
              />
              <div className="p-4 flex-grow flex flex-col bg-teal-700">
                <span
                  className="absolute top-0 right-0 text-sm text-white bg-orange-500 px-2 py-1.5 font-bold"
                >
                  {article.label}
                </span>
                <h3 className="mt-1 text-xl font-bold text-white p-2 rounded">
                  {article.title}
                </h3>
                <p className="mt-2 text-base font-bold text-white p-2 rounded">
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


