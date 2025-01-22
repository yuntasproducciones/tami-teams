import imgT from '../../../../public/assets/images/Nosotros.jpg';

const ImageSection = () => {
  return (
    <section
      className="relative bg-cover bg-center h-[1040px] pt-12 headerprueba rounded-b-3xl"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${imgT})`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center pl-[200px]">
        <div className="text-white">
          <h1 className="text-8xl font-bold whitespace-pre-line">
            SOBRE {'\n'}NOSOTROS 
          </h1>
          <p className="text-2xl mt-10 whitespace-pre-line">Buscamos ayudar en tu negocio, mediante la {'\n'} 
            comercialización de productos para {'\n'}
            emprendimiento, trabajo y decoración, {'\n'}
            cumpliendo con los estándares de calidad y {'\n'}
            satisfacción del cliente.</p>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
