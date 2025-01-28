import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SP_Hero from "../components/ShippingPolicies/SP_Hero";
import InfoEnvios from "../components/ShippingPolicies/InfoEnvios";

const ShippingPage = () => {
  return (
    <>
      <Navbar />
      <SP_Hero />
      <InfoEnvios />
      <Footer />
    </>
  );
};

export default ShippingPage;
