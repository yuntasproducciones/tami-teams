export interface Comentario {
    usuario: string;
    calificacion: number;
    comentario: string;
    imagen: string;
}

const CommentCard = (comentario: Comentario) => {
    return (
        <div className="w-64 2xl:w-3/4 bg-white rounded-3xl py-3 px-4 2xl:p-6 shadow-lg">
            <div className="flex flex-row mb-1">
                <img
                    src={comentario.imagen}
                    alt="user image profile"
                    className="w-16 2xl:w-24 mr-2"
                />
                <div className="flex flex-col justify-evenly">
                    <h4 className="text-verde_turquesa text-xl 2xl:text-5xl 2xl:font-bold font-extrabold">
                        {comentario.usuario}
                    </h4>
                    <p
                        className="text-slate-600 2xl:text-4xl 2xl:font-semibold
           font-bold"
                    >
                        {comentario.calificacion}/5.0⭐
                    </p>
                </div>
            </div>
            <p className="font-semibold 2xl:text-4xl 2xl:mt-4 2xl:font-normal">
                {comentario.comentario}
            </p>
        </div>
    );
};
export default CommentCard;

