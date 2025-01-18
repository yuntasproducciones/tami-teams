import '../../styles/MainSeccion.css';

function MainTitle(props: { text: string }) {
    return (
        <h1 className="secondary-container--title">{props.text}</h1>
    );
}

export { MainTitle }