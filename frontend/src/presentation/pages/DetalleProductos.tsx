import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SeccionPrincipal from "../components/detallesProductos/seccionPrincipal";
import SeccionInformacion from "../components/detallesProductos/seccionInformacion";

const DetalleProductos = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar/>
                <main>
                    <SeccionPrincipal/>

                    <SeccionInformacion/>
                </main>
            <Footer/>
        </div>
    );
}

export default DetalleProductos;