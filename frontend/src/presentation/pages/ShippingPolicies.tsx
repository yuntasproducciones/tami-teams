import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import enviosImage from "../../../public/assets/images/Envios.webp";

const ShippingPolicies = () => {
  return (
    <>
      <Navbar />
      <section
        className="relative bg-cover bg-center h-dvh pt-32 ps-20 flex flex-col justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(15, 118, 110), rgba(3, 112, 112, .6) 75%, rgba(0, 0, 0, 0.75) 100%), url(${enviosImage})`,
        }}
      >
        <svg
          className="w-16 h-16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 19H16M10 15L12 17L14 15M12 17V11M20 9H4M4 9L6 17H18L20 9M4 9L6 5H18L20 9"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h1
          style={{ textShadow: "rgba(0,0,0,.2) 1px 1px 20px" }}
          className="text-6xl font-extrabold mb-10"
        >
          POLÍTICA
          <br />
          DE ENVÍOS
        </h1>
        <p className="text-2xl font-bold">
          Descubre nuestras políticas de envío,
          <br />
          pensadas para garantizar una experiencia
          <br />
          confiable y segura en cada pedido.
        </p>
      </section>
      <Footer />
    </>
  );
};

export default ShippingPolicies;
