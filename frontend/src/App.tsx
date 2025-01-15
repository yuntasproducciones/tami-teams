import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';  // Importa tu componente About

const App = () => {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link> {/* Enlace a la página About */}
            </nav>

            <Routes>
                <Route path="/" element={<Home />} /> {/* Asegúrate de tener un componente Home */}
                <Route path="/about" element={<About />} /> {/* Ruta hacia el componente About */}
            </Routes>
        </BrowserRouter>
    );
};

const Home = () => (
    <div>
        <h1>Home Page</h1>
        <p>Welcome to the Home page.</p>
    </div>
);

export default App;
