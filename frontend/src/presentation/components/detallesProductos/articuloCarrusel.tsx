const ArticuloCarrusel = () => {
    const variables = [
      {
        id: 1,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 2,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 3,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 4,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 5,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 6,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 7,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 8,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 9,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 10,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },

      {
        id: 11,
        img1: "/assets/images/productos/selladora-vasos.jpg",
        p1: "SELLADORA DE VASOS",
        img2: "/assets/images/productos/selladora-botellas.jpg",
        p2: "SELLADORA DE BOTELLAS",
        img3: "/assets/images/productos/selladora-bolsas.jpg",
        p3: "SELLADORA DE BOLSA",
        img4: "/assets/images/productos/purificador-agua.jpg",
        p4: "PURIFICADOR DE AGUA",
      },
    ];
  
    return (
      <article className="p-8 bg-gray-50">
        <h2 className="text-2xl font-bold text-teal-600 mb-6">Artículos Similares</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {variables.map((variable) => (
            <>
              <figure key={`${variable.id}-1`} className="flex flex-col items-center">
                <img
                  src={variable.img1}
                  alt={variable.p1}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-center text-gray-700 mt-2">{variable.p1}</p>
              </figure>

              <figure key={`${variable.id}-2`} className="flex flex-col items-center">
                <img
                  src={variable.img2}
                  alt={variable.p2}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-center text-gray-700 mt-2">{variable.p2}</p>
              </figure>

              <figure key={`${variable.id}-3`} className="flex flex-col items-center">
                <img
                  src={variable.img3}
                  alt={variable.p3}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-center text-gray-700 mt-2">{variable.p3}</p>
              </figure>

              <figure key={`${variable.id}-4`} className="flex flex-col items-center">
                <img
                  src={variable.img4}
                  alt={variable.p4}
                  className="w-32 h-32 object-cover rounded-xl"
                />
                <p className="text-center text-gray-700 mt-2">{variable.p4}</p>
              </figure>
            </>
          ))}
        </div>
      </article>
    );
  };
  
  export default ArticuloCarrusel;
  