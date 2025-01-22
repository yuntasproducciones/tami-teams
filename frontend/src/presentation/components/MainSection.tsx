import { MainContent } from "./MainContent";
import { MainP } from "./MainP";
import '../../styles/MainSeccion.css';

const titulos = [
    { text: 'TRABAJO' },
    { text: 'DECORACIÓN Y HOGAR' },
    { text: 'NEGOCIO' },
];

const parrafos = [
    { text: 'Equipos diseñados para\n optimizar y agilizar tus\n procesos laborales.' },
    { text: 'Productos que combinan\n funcionalidad y estilo para\n tu espacio.' },
    { text: 'Herramientas innovadoras\n que impulsan el crecimiento\n de tu negocio.' },
];

const images = [
    { image: `background1` },
    { image: `background2` },
    { image: `background3` },
];

function MainSeccion() {
    return (
        <section className="main-container">
            <MainContent>
                {titulos.map((titulo, index) => (
                    <div key={index} className={`main-container-paragraphs ${images[index]?.image}`}>
                        <h3 className="secondary-container--title">{titulo.text}</h3> {/* Aplica la clase aquí */}
                        <MainP text={parrafos[index]?.text} />
                    </div>
                ))}
            </MainContent>
        </section>
    );
}

export { MainSeccion };