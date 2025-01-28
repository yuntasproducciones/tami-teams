import fondo from "../../../public/assets/images/SECCION COMENTARIO/fondo_comentarios.webp";
import CommentCard, { Comentario } from "./CommentCard";
import imagenPrueba from "../../../public/assets/images/SECCION COMENTARIO/comentarios_foto1.webp";
import imagenPrueba2 from "../../../public/assets/images/SECCION COMENTARIO/comentarios_foto2.webp";
import imagenPrueba3 from "../../../public/assets/images/SECCION COMENTARIO/comentarios_foto3.webp";

const comentariosArray: Comentario[] = [
    {
        usuario: "María Flores",
        calificacion: 4.5,
        comentario:
            "Gracias a TAMI, pude encontrar las herramientas perfectas para mi hogar. Muy recomendados por su atención y precios",
        imagen: imagenPrueba,
    },
    {
        usuario: "Jorge Mendoza",
        calificacion: 4.8,
        comentario:
            "TAMI siempre ofrece soluciones confiables y duraderas. Han sido un gran aliado en mis proyectos de construcción",
        imagen: imagenPrueba2,
    },
    {
        usuario: "Luis García",
        calificacion: 4.6,
        comentario:
            "Excelente servicio y productos de alta calidad. TAMI me ayudó a equipar mi negocio de manera rápida y eficiente",
        imagen: imagenPrueba3,
    },
];

export const Comentarios = () => {
    return (
        <section
            className="w-full flex flex-col items-center py-32 relative"
            style={{
                backgroundImage: `url(${fondo})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="text-white font-extrabold text-center">
                <h4 className="text-xl lg:text-3xl">Lo que dicen nuestros</h4>
                <h3 className="text-6xl/9 lg:text-9xl/[6rem]">CLIENTES</h3>
            </div>
            <p className="text-sm lg:text-xl 2xl:text-3xl text-white font-semibold text-center  mt-4 mb-14">
                Valoramos cada comentario para seguir
                <br />
                mejorando y ofreciendo lo mejor para ti.
            </p>

            <div className="w-11/12 grid grid-flow-row auto-rows-auto lg:grid-flow-col lg:auto-cols-auto gap-4 lg:gap-8 2xl:gap-0 justify-items-center">
                {comentariosArray.map((comentario) => {
                    return <CommentCard {...comentario} />;
                })}
            </div>
        </section>
    );
};
