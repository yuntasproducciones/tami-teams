import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import enviosImage from "../../../public/assets/images/Envios.webp";

const ShippingPolicies = () => {
  return (
    <div>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-[955px] pt-12 headerprueba"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgb(16, 235, 231) 2%, rgba(0, 158, 155, 0.5) 30%, rgba(0, 158, 155, 0) 100%), url(${enviosImage})`,
        }}
      >
        <div className="relative z-10 flex flex-col items-start justify-center h-full text-white p-12">
          <div className="mb-4">
            <svg
              className="w-16 h-16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 19H16M10 15L12 17L14 15M12 17V11M20 9H4M4 9L6 17H18L20 9M4 9L6 5H18L20 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h1 className="text-6xl font-bold mb-4">
            POLÍTICA
            <br />
            DE ENVÍOS
          </h1>
          <p className="text-xl mb-8">
            Descubre nuestras políticas de envío,
            <br />
            pensadas para garantizar una experiencia
            <br />
            confiable y segura en cada pedido.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ShippingPolicies;
