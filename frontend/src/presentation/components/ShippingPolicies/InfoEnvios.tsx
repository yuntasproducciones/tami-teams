import mapa from "../../../../public/assets/images/politicas/mapa-peru.webp";
import redUbi from "../../../../public/assets/images/politicas/ubicacion_icono.webp";
import greenUbi from "../../../../public/assets/images/politicas/ubicacion-icono2.webp";

const InfoEnvios = () => {
  return (
    <section className="w-full grid grid-flow-col grid-cols-2 py-5">
      <div className="w-full flex justify-center items-center">
        <img src={mapa} className="w-3/4 md:w-1/2 lg:w-1/2" />
      </div>
      <div className="flex flex-col pr-4">
        <h2 className="text-verde2 font-extrabold text-lg lg:text-4xl 2xl:text-7xl mb-4">
          ENVÍOS A LIMA Y PROVINCIAS
        </h2>
        <div className="flex items-start my-3">
          <img
            src={redUbi}
            alt=""
            className="w-5 lg:w-10 2xl:w-14 mx-1 lg:mx-4"
          />
          <div className="text-xs lg:text-lg 2xl:text-4xl">
            <h3 className="font-bold">EN LIMA METROPOLITANA</h3>
            <ul className="list-disc font-semibold 2xl:font-normal ml-5 2xl:ml-9">
              <li>Santa Anita</li>
              <li>Centro de Lima</li>
              <li>Lince</li>
              <li>Rimac</li>
              <li>La Victoria</li>
            </ul>
            <div className="bg-red-600 text-white rounded-full px-6 py-1 font-semibold text-xs lg:text-base 2xl:text-2xl my-5">
              <p>
                Precio de envío <span className="font-extrabold">15 soles</span>
              </p>
              <ul className="list-disc text-[0.62rem] lg:text-xs 2xl:text-xl ml-3 2xl:ml-6">
                <li>Otros productos a cotizar</li>
              </ul>
            </div>
            <div className="text-verde_turquesa font-bold lg:font-semibold text-xs lg:text-base 2xl:text-2xl">
              <p>
                Los demás distritos de Lima Metropolitana
                <br />
                Precio de envío <span className="font-extrabold">20 soles</span>
              </p>
              <ul className="list-disc text-[0.62rem] lg:text-sm 2xl:text-2xl ml-3 2xl:ml-6">
                <li>Otros productos a cotizar</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-start">
          <img src={greenUbi} className="w-3 lg:w-5 2xl:w-8 mx-1 lg:mx-5" />
          <div>
            <h2 className="text-verde2 font-extrabold mb-1 text-sm lg:text-2xl 2xl:text-5xl">
              PROVINCIAS
            </h2>
            <p className="font-semibold text-xs lg:text-lg 2xl:text-2xl text-justify">
              El cliente elegirá la empresa por la cual desea el envío y pagará
              lo que la empresa cotice al momento de la entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default InfoEnvios;
