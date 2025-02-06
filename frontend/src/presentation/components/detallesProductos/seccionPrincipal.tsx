

const SeccionPrincipal = () => {
    const variables = [
      {
        id: 1,
        title: "SELLADORA DE BOTELLAS",
        paragraph: "Protege, conserva y destaca con cada botella",
        image: "/path/to/your/image.jpg", 
      },

      {
        id: 2,
        title: "MÁQUINA DE EMBALAJE",
        paragraph: "Protege, conserva y destaca EN CADA EMBALAJE",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 3,
        title: "SELLADORA DE BOLSAS",
        paragraph: "Protege, conserva y destaca EN CADA SELLADO DE BOLSAS",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 4,
        title: "SELLADORA DE BOLSAS de CHIFLES",
        paragraph: "¡MANTEN LOS CHIFLES FRESCOS Y CROCANTES!",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 5,
        title: "SOLDADORA LINGBA",
        paragraph: "TUS SOLDADURAS SON MEJORES CON LA NUESTRA LINBGA",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 6,
        title: "PURIFICADOR DE AGUA POR HOSMOSIS",
        paragraph: "Mejora la calidad del agua con nuestra purificadora de agua",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 7,
        title: "VENTILADOR HOLOGRÁFICO",
        paragraph: "Proyecta sus imágenes y disfruta esta NUEVA experiencia",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 8,
        title: "PANEL DE FIBRA DE BAMBO",
        paragraph: "Remodela tus espacio de manera fácil y sencilla",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 9,
        title: "WPC FENCE PANEL",
        paragraph: "La revolución en la decoración de nuestro hogar",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 10,
        title: "WPC FENCE PANEL",
        paragraph: "Una revolución en la decoración de nuestros espacios",
        image: "/path/to/your/image.jpg",
      },

      {
        id: 11,
        title: "SELLADORA DE VASOS",
        paragraph: "Los derrames jamas volveran a ser un problema",
        image: "/path/to/your/image.jpg",
      },
    ];
  
    return (
      <section className="p-8 bg-gray-100">
        {variables.map((variable) => (

          <div key={variable.id} className="text-center">
            <h1 className="text-4xl font-bold text-teal-600 mb-4">
              {variable.title}
            </h1>

            <p className="text-lg text-gray-700 mb-6">{variable.paragraph}</p>
            
            <figure className="flex justify-center mb-6">
              <img
                src={variable.image}
                alt={variable.title}
                className="w-64 h-64 object-cover rounded-lg"
              />
            </figure>

            <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-bold text-lg">
              ¡COTÍZALO!
            </button>
            
          </div>
        ))}
      </section>
    );
  };
  
  export default SeccionPrincipal;
  