import { useEffect } from "react";
import { Figure_load } from "./Figure_load";
import { Title_load } from "./Title_load";

function Load_main() {
    useEffect(() => {
        // Bloquea la barra de desplazamiento al mostrar la pantalla de carga
        document.body.style.overflow = "hidden";

        // Restaurar el desplazamiento al desmontar el componente
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <main className="bg-[rgb(4,156,155)] h-screen flex justify-center items-center flex-col opacity-100 transition-opacity duration-500 ease-in-out">
            <Figure_load />
            <Title_load />
        </main>
    );
}

export { Load_main };