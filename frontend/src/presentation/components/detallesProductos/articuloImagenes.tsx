const ArticuloImagenes = () => {
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
    
    return (
      <section>
        {variables.map((item) => (
          <article key={item.id}>
            <h2>Conjunto de imágenes {item.id}</h2>
            <figure>
              <img src={item.img1} alt={`Imagen ${item.id}-1`} />
            </figure>
            <figure>
              <img src={item.img2} alt={`Imagen ${item.id}-2`} />
            </figure>
            <figure>
              <img src={item.img3} alt={`Imagen ${item.id}-3`} />
            </figure>
            <figure>
              <img src={item.img4} alt={`Imagen ${item.id}-4`} />
            </figure>
            <figure>
              <img src={item.img5} alt={`Imagen ${item.id}-5`} />
            </figure>
          </article>
        ))}
      </section>
    );
  };
  
  export default ArticuloImagenes;
  