import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './presentation/pages/About'; // Importa tu componente About
import Home from './presentation/pages/Home';  // Importa el componente Home

const App = () => {
    return (
        <BrowserRouter>
            <nav className="bg-gray-800 p-4 text-white">
                <Link to="/" className="mx-2">Home</Link>
                <Link to="/about" className="mx-2">About</Link> {/* Enlace a la página About */}
            </nav>

            <div className="container mx-auto p-4">
                <Routes>
                    <Route path="/" element={<Home />} /> {/* Ruta al componente Home */}
                    <Route path="/about" element={<About />} /> {/* Ruta hacia el componente About */}
                </Routes>
            </div>
        </BrowserRouter>
    );
};

export default App;
