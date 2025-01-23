export interface iCard {
    title: string;
    paragraph: string;
    image: string;
}

export const Card = (card: iCard) => {
    return (
        <div className="relative w-11/12 h-3/4 lg:w-2/3 lg:h-4/5 flex hover:scale-105 transition-all">
            <img
                src={card.image}
                alt="card image background"
                className="absolute rounded-3xl w-full h-full object-cover object-center z-0"
            />
            <div className="relative self-end z-10 text-white w-full h-full lg:h-2/3 flex flex-col justify-center lg:justify-end pb-0 lg:pb-6 px-4 text-center bg-gradient-to-t from-verde2 rounded-3xl ">
                <h3 className="font-semibold text-sm lg:text-lg 2xl:text-4xl mb-0 md:mb-1">
                    {card.title}
                </h3>
                <p className="font-light text-xs lg:text-sm 2xl:text-2xl">
                    {card.paragraph}
                </p>
            </div>
        </div>
    );
};

export default Card;