import { useEffect, useState } from "react";

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

type Producto = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
};

// Propiedades que espera recibir el componente
type SeccionPrincipalProps = {
  id: string; 
};

// Función para obtener el producto según el ID
const getProductById = (id: string | undefined): Producto | undefined => {
  if (!id) return undefined; 
  return variables.find((product) => product.id === parseInt(id)); 
};

const SeccionPrincipal = ({ id }: SeccionPrincipalProps) => { 
  const [producto, setProducto] = useState<Producto | null>(null); 

  useEffect(() => {
    if (id) { 
      const productData = getProductById(id); 
      setProducto(productData || null); 
    }
  }, [id]);

  if (!producto) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <section className="p-8 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-teal-600 mb-4">
          {producto.title}
        </h1>

        <p className="text-lg text-gray-700 mb-6">{producto.paragraph}</p>

        <figure className="flex justify-center mb-6">
          <img
            src={producto.image}
            alt={producto.title}
            className="w-64 h-64 object-cover rounded-lg"
          />
        </figure>

        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-bold text-lg">
          ¡COTÍZALO!
        </button>
      </div>
    </section>
  );
};

export default SeccionPrincipal;
