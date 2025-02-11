


type ArticuloInfoProductosProps = {
  id: string;  
};

const ArticuloInfoProductos = ({ id }: ArticuloInfoProductosProps) => {
    const variables = [
      {
        id: 1,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph: 
            "Utiliza el principio de inducción electromagnética para producir un alto calor instantáneo para derretir el papel de aluminio que luego se adhiere al agujero de la Botella",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
        "Modelo: DCGY-F200 Potencia: AC220V/50HZ-80HZ Temperatura ambiente: 10 - 400 °C Diámetro del sello: 2 - 8 (cm) Flujo de trabajo: 25 Botellas/min",
        proportions: "Dimensiones:",
        alt: "Altura: 11.5 cm",
        long: "Longitud: 28 cm",
        width: "Ancho: 23 cm",
      },

      {
        id: 2,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "El motor escalonado controla el papel de sellado exterior, garantizando una longitud estable y posición precisa. Toda la máquina es gestionada por un PLC, con una interfaz hombre-máquina que facilita su uso.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: "Modelo: KN-TH169 Potencia: 220V, 50Hz Capacidad de llenado: 1-5 g/bolsa Flujo de trabajo: 30-50 bolsas/min",
        proportions: "Dimensiones:",
        alt: "Altura: 130 cm",
        long: "Longitud: 105 cm",
        width: "Ancho: 70 cm",
      },

      {
        id: 3,
        title: "¡Conserva y mantén tus alimentos frescos por más tiempo!",
        subtitle: "Información del producto:",
        paragraph:
            "Empaca de manera eficiente al rellenar bolsas con chifles, harinas o líquidos con tres modelos de máquina. Se pueden sellar film de aluminio, papel de filtrante, film de plástico impreso.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Potencia: 220-240V/50Hz Capacidad de llenado: 1-100g (Según el modelo) Anchura de película de plástico: 3-20cm (Según el modelo) Flujo de trabajo: 10-20 bolsas/min",
        proportions: "Dimensiones:",
        alt: "Altura: 150 cm",
        long: "Longitud: 55 cm",
        width: "Ancho: 56 cm",
      },

      {
        id: 4,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "Empaca de manera eficiente al rellenar bolsas con chifles, harinas o líquidos con tres modelos de máquina. Se pueden sellar film de aluminio, papel de filtrante, film de plástico impreso.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Potencia: 220-240V/50Hz Capacidad de llenado: 1-100g (Según el modelo) Anchura de película de plástico: 3-20cm (Según el modelo) Flujo de trabajo: 10-20 bolsas/min",
        proportions: "Dimensiones:",
        alt: "Altura: 150 cm",
        long: "Longitud: 55 cm",
        width: "Ancho: 56 cm",
      },

      {
        id: 5,
        title: "¡Sella con precisión y eleva la calidad con Lingba!",
        subtitle: "Información del producto:",
        paragraph:
            "Incorpora tecnología de inversor de alta frecuencia, con diseño optimizado, efecto de luz eficiente y ahorro de energía. Permite un sellado continuo y constante con alta eficiencia y corriente elevada.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Modelo: MIG-225 Potencia de soldadura/rango de tensión: 5-160A/220V Ciclo de trabajo nominal: 60% Tipos de Soldadura: MIG MAG/MMA/ TIG 3 en 1 Eficiencia: 85%",
        proportions: "Dimensiones:",
        alt: "Altura: 17.5 cm",
        long: "Longitud:  29 cm",
        width: "Ancho: 14.5 cm",
      },

      {
        id: 6,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "El purificador de agua por ósmosis inversa funciona al pasar el agua a través de una membrana semipermeable que elimina impurezas, produciendo agua limpia y segura para beber y cocinar.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Vida del filtro:1-2 años, según la calidad del agua Entrada y salida: 1/2 (pulgadas) Rosca de tubería externa Instalación: Baño, cocina, etc. Flujo de trabajo: 60L/H Material del filtro: PAN de grado alimenticio",
        proportions: "Dimensiones:",
        alt: "Altura: 41 cm",
        long: "Longitud: 37.5 cm",
        width: "Ancho: 14.5 cm",
      },

      {
        id: 7,
        title: "¡Impulsa tu marca con hologramas!",
        subtitle: "Información del producto:",
        paragraph:
            "El ventilador holográfico es un dispositivo que combina la tecnología de proyección y el movimiento rotatorio para crear la ilusión de un holograma en 3D flotando en el aire.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Modelo: Z7H Formato de soporte: MP4/AVI/RMVB/MKV/GIF/JPG/PNG Resolución física: 1600x616 px Potencia nominal: 15W ~ 24W Velocidad de rotación: 670 RPM",
        proportions: "Dimensiones:",
        alt: "Altura: 8 cm",
        long: "Longitud: 48 cm",
        width: "Ancho: 22 cm",
      },

      {
        id: 8,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "La HCB pared de fondo adopta el material de base sólida APA, que tiene alta resistencia, buena estabilidad, resistencia al agua y a la corrosión. La tecnología de ranurado de alta precisión permite un correcto empalme de las piezas.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Materiales: APA sólido Material de Base Longitud: 2,4 m 2,8 m / personalizado Aplicación: Hotel, hogar, apartamento, etc. Resistente al: Agua, fuego, polvo Tipo de decoración: Interiores",
        proportions: "Dimensiones:",
        alt: "Altura: 0.8 cm",
        long: " Longitud: 280 cm",
        width: "Ancho: 360 cm",
      },

      {
        id: 9,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "El WPC fence panel es un material compuesto de madera y plástico diseñado para fabricar paneles de cercas resistentes y de bajo mantenimiento. Combina las ventajas de ambos materiales: la apariencia natural de la madera y la durabilidad del plástico.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Modelo: JG13 Material: Compuesto de madera y plástico reciclado, resistente y ecológico. Resistencia: Resistente al agua, rayos UV y plagas. Color:Personalizado  Mantenimiento: Fácil de limpiar, no requiere pintura ni sellado.",
        proportions: "Dimensiones:",
        alt: "Altura: 160",
        long: "Longitud: 195*20MM",
        width: "Ancho: 23",
      },

      {
        id: 10,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "La Tecnología WPC es ideal para la decoración de interiores ya que cuenta con la resistencia al fuego y agua, además de que se limpia fácil, existen una amplia variedad de combinaciones en colores y estilos.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Paquete: 10 pcs/ctn Aplicación: Hotel, hogar, apartamento, etc. Resistente al: Agua, fuego, polvo Tipo de decoración: Interiores",
        proportions: "Dimensiones:",
        alt: "Altura: 2.5 cm",
        long: "Longitud: 15.9 cm",
        width: "Ancho: 290 cm",
      },

      {
        id: 11,
        title: "¡Empaca más rápido y mejor!",
        subtitle: "Información del producto:",
        paragraph:
            "El vaso de plástico se colocará en la parte inferior del molde, después de haber precalentado la máquina, para luego sellarlo con el film de plástico y luego retirar el vaso.",
        details: "Detalles del producto",
        description: "Descripción:",
        data: 
            "Modelo: ET-A9 Potencia: 220V / 110V Temperatura de sellado: 160 – 200°C Diámetro de sellado: 9.5 y 7.5 cm Flujo de trabajo: 300 - 400 vasos/h",
        proportions: "Dimensiones:",
        alt: "Altura: 50 cm",
        long: "Longitud: 23 cm",
        width: "Ancho: 32 cm",
      },
    ];

    const informacion = variables.find((item) => item.id === parseInt(id));

  if (!informacion) {
    return <div>Producto no encontrado</div>; 
  }
  
    return (
      <article className="p-8 bg-gray-50">
          <div key={informacion.id}>

            <h2 className="text-3xl font-bold text-teal-600">{informacion.title}</h2>
            <h2 className="text-xl font-semibold text-gray-800 mt-2">{informacion.subtitle}</h2>
            <p className="mt-4 text-gray-600">{informacion.paragraph}</p>
  
            <div className="mt-6">
              <h3 className="text-lg font-bold">{informacion.details}</h3>

              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 mt-2">
                Cotiza aquí
              </button>
  
              <h3 className="text-lg font-bold mt-6">{informacion.description}</h3>

              <p className="mt-2 text-gray-600">{informacion.data}</p>
  
              <h3 className="text-lg font-bold mt-6">{informacion.proportions}</h3>
  
              <div className="flex gap-4 mt-4">

                <figure>
                  <img src="/path/to/image1.jpg" alt="" className="w-32 h-32 object-cover" />
                </figure>
                <figure>
                  <img src="/path/to/image2.jpg" alt="" className="w-32 h-32 object-cover" />
                </figure>
                <figure>
                  <img src="/path/to/image3.jpg" alt="" className="w-32 h-32 object-cover" />
                </figure>
              </div>
  
              <p className="mt-2">{informacion.alt}</p>
              <p>{informacion.long}</p>
              <p>{informacion.width}</p>
  
              <button className="bg-teal-500 text-white py-2 px-4 rounded-lg hover:bg-teal-600 mt-6">
                Comprar ahora
              </button>

            </div>
          </div>
      </article>
    );
  };
  
  export default ArticuloInfoProductos;
  