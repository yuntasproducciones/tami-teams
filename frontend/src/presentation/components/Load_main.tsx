import { Figure_load } from "./Figure_load";
import { Title_load } from "./Title_load";

function Load_main() {
    return (
        <main className="bg-[rgb(4,156,155)] h-screen flex justify-center items-center flex-col opacity-100 transition-opacity duration-500 ease-in-out">
            <Figure_load />
            <Title_load />
        </main>
    );
}

export { Load_main };
