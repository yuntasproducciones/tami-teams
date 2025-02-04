// Importaciones necesarias
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logoTami from "../../../public/assets/images/Logos/logoprincipal.gif";
import mundo from "../../../public/assets/images/mundo.webp";
import fondoTami from "../../../public/assets/images/fondo_tami.webp";
import "../../styles/Login.css";

// Componente de Login
const Login = () => {
    // Estado para activar la animación de entrada del formulario
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        // Activa la animación cuando el componente se renderiza
        setTimeout(() => {
            setIsActive(true);
        }, 100);
    }, []);

    return (
        // Contenedor principal que ocupa toda la pantalla
        <div className="flex h-screen">
            {/* Contenedor de la imagen de fondo (60% del ancho) - Se muestra en pantallas mayores a 768px */}
            <div className="hidden md:block w-[60%] relative">
                <img
                    src={mundo}
                    alt="cohete-login"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenedor de la imagen de fondo (40% del ancho) - Se muestra en pantallas mayores a 768px */}
            <div className="hidden md:block w-[40%] relative">
                <img
                    src={fondoTami}
                    alt="fondo-tami"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Contenedor del formulario */}
            {/* En móviles ocupa toda la pantalla (w-full, h-screen) y en escritorio se usa el CSS personalizado (mov-login) */}
            <div
                className={`mov-login ${isActive ? "active" : ""} w-full h-screen lg:w-auto lg:h-auto`}
            >
                {/* Contenedor interno con gradiente de fondo, sombra y bordes redondeados */}
                <div className="w-full md:w-[120%] h-full rounded-l-none lg:rounded-l-[80px] shadow-lg flex flex-col items-center justify-center px-12 fondo-container mx-auto md:mx-0">
                    {/* Logo con efecto de zoom al pasar el mouse */}
                    <Link to="/" className="flex justify-center items-center w-full pr-6 group">
                        <img
                            src={logoTami}
                            alt="logo-tami"
                            className="h-72 w-auto -mt-10 object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </Link>

                    {/* Título de bienvenida */}
                    <h1 className="text-4xl font-bold mt-4 mb-6 text-center text-white">
                        BIENVENIDO
                    </h1>

                    {/* Formulario de login */}
                    <form className="w-full max-w-md">
                        {/* Campo de usuario */}
                        <div className="mb-6 flex justify-center w-full">
                            <input
                                type="email"
                                id="email"
                                className="shadow appearance-none border-4 border-teal-400 rounded-full w-72 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600"
                                placeholder="Usuario"
                            />
                        </div>
                        {/* Campo de contraseña */}
                        <div className="mb-6 flex justify-center w-full">
                            <input
                                type="password"
                                id="password"
                                className="shadow appearance-none border-4 border-teal-400 rounded-full w-72 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder-gray-600"
                                placeholder="Contraseña"
                            />
                        </div>
                        {/* Botón de ingreso */}
                        <div className="flex items-center justify-center">
                            <button
                                className="bg-teal-400 hover:bg-gray-100 text-white font-bold py-2 px-11 rounded-full focus:outline-none focus:shadow-outline transition duration-300"
                                type="button"
                            >
                                INGRESAR
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
