import '../../styles/MainSeccion.css';

function MainP(props: { text: string }) {
    return(
        <p className="secondary-container--text">{props.text}</p>
    );
}

export { MainP }