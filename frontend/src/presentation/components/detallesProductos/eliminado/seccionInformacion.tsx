import ArticuloImagenes from './articuloImagenes';
import ArticuloInfoProductos from './articuloInfoProducto';
import ArticuloCarrusel from './articuloCarrusel';

type SeccionInformacionProps = {
  id: string;  
};

const SeccionInformacion = ({ id }: SeccionInformacionProps) => {
    return (
        <section>
            <ArticuloImagenes id={id}/>  
            <ArticuloInfoProductos id={id}/>
            <ArticuloCarrusel id={id}/>
        </section>
    );
};

export default SeccionInformacion;
