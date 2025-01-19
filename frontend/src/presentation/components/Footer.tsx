/**
 * Componente Footer
 *
 * Este componente renderiza el pie de página de la aplicación.
 * Contiene información de derechos de autor y se muestra en la parte inferior de la página.
 */
const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
            {/* Texto de derechos de autor */}
            <p>&copy; 2025 TAMI. Todos los derechos reservados.</p>
        </footer>
    );
};

// Exportamos el componente Footer para que pueda ser utilizado en otras partes de la aplicación
export default Footer;