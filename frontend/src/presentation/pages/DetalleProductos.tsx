import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeccionPrincipal from "../components/detallesProductos/seccionPrincipal";
import SeccionInformacion from "../components/detallesProductos/seccionInformacion";

const DetalleProductos = () => {
  const { id } = useParams<{ id: string }>();  

  if (!id) {
    return <div>Producto no encontrado</div>; 
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main>
        <SeccionPrincipal id={id} /> 
        <SeccionInformacion id={id} /> 
      </main>
      <Footer />
    </div>
  );
};

export default DetalleProductos;
