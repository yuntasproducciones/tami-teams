const Hero = () => {
    return (
      <section className="relative bg-cover bg-center h-[400px]" style={{ backgroundImage: "url('/path-to-image.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl font-bold">Herramientas tecnología que marcan la diferencia</h1>
            <ul className="mt-4">
              <li>✅ Ventilador holográfico</li>
              <li>✅ Purificador de agua</li>
            </ul>
            <button className="mt-6 bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
              Descubre más
            </button>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  