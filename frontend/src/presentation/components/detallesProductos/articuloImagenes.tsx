

type ArticuloImagenesProps = {
  id: string;  
};

const ArticuloImagenes = ({ id }: ArticuloImagenesProps) => {
    const variables = [
      {
        id: 1,
        img1: "https://via.placeholder.com/150?text=Imagen+1",
        img2: "https://via.placeholder.com/150?text=Imagen+2",
        img3: "https://via.placeholder.com/150?text=Imagen+3",
        img4: "https://via.placeholder.com/150?text=Imagen+4",
        img5: "https://via.placeholder.com/150?text=Imagen+5",
      },
      {
        id: 2,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 3,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 4,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 5,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 6,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 7,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 8,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 9,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 10,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
      {
        id: 11,
        img1: "https://via.placeholder.com/150?text=Imagen+A",
        img2: "https://via.placeholder.com/150?text=Imagen+B",
        img3: "https://via.placeholder.com/150?text=Imagen+C",
        img4: "https://via.placeholder.com/150?text=Imagen+D",
        img5: "https://via.placeholder.com/150?text=Imagen+E",
      },
    ];
    
  const producto = variables.find((item) => item.id === parseInt(id));

  if (!producto) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <section>
      <h2>Conjunto de imágenes {producto.id}</h2>
      <figure>
        <img src={producto.img1} alt={`Imagen ${producto.id}-1`} />
      </figure>
      <figure>
        <img src={producto.img2} alt={`Imagen ${producto.id}-2`} />
      </figure>
      <figure>
        <img src={producto.img3} alt={`Imagen ${producto.id}-3`} />
      </figure>
      <figure>
        <img src={producto.img4} alt={`Imagen ${producto.id}-4`} />
      </figure>
      <figure>
        <img src={producto.img5} alt={`Imagen ${producto.id}-5`} />
      </figure>
    </section>
  );
};

export default ArticuloImagenes;
  