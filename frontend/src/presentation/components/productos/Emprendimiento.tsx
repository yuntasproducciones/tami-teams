import gt1 from "../../../../public/assets/images/Filtrador_de_Agua.png";
import gt2 from "../../../../public/assets/images/imagen_5.png";
import gt3 from "../../../../public/assets/images/imagen_2.png";
import gt4 from "../../../../public/assets/images/image-removebg.png";
import gt5 from "../../../../public/assets/images/imagen.png";
import gt6 from "../../../../public/assets/images/SBotellas 3-Photoroom.png";
import gt7 from "../../../../public/assets/images/SVasos_2.png";
import hi from "../../../../public/assets/images/productos.png";
import { Card, CardContent } from "../ui/produc/card";
import { Button } from "../ui/produc/Button";

type CardItem = {
  id: number;
  title: string;
  imageSrc: string;
};

const cardItems: CardItem[] = [
  { id: 1, title: "Saber más", imageSrc: gt1 },
  { id: 2, title: "Saber más", imageSrc: gt2 },
  { id: 3, title: "Saber más", imageSrc: gt3 },
  { id: 4, title: "Saber más", imageSrc: gt4 },
  { id: 5, title: "Saber más", imageSrc: gt5 },
  { id: 6, title: "Saber más", imageSrc: gt6 },
  { id: 7, title: "Saber más", imageSrc: gt7 },
];

const Emprendimiento = () => {
  return (
    <div
      className="bg-cover bg-center py-14 px-24"
      style={{
        backgroundImage: `url(${hi})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h2 className="w-5/5 sm:w-80 max-w-md bg-teal-500 hover:bg-teal-600 text-white rounded-full py-4 text-lg sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-center mx-auto sm:mx-0">
        Emprendimiento
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {cardItems.map((item) => (
          <Card key={item.id} className="transform hover:scale-105 transition-transform duration-300">
            <CardContent className="p-4 sm:p-6">
              <div className="bg-gray-200 rounded-3xl p-6 sm:p-8 mb-4">
                <img
                  src={item.imageSrc}
                  alt={item.title}
                  className="w-full h-40 sm:h-52 md:h-64 object-cover rounded-xl"
                />
              </div>
              <div className="flex justify-center">
                <Button className="w-40 max-w-xs bg-white hover:bg-gray-200 text-teal-600 border-4 border-gray-300 font-bold text-base sm:text-lg">
                  {item.title}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Emprendimiento;

