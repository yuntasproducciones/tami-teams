import ArticuloImagenes from './articuloImagenes';
import ArticuloInfoProductos from './articuloInfoProducto';
import ArticuloCarrusel from './articuloCarrusel';

const seccionInformacion = () => {
    return (
        <section>
            <ArticuloImagenes/>

            <ArticuloInfoProductos/>
            
            <ArticuloCarrusel/>
        </section>
    );
};

export default seccionInformacion;