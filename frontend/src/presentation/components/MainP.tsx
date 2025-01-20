import '../../styles/MainSeccion.css';

function MainP(props: { text: string }) {
    return(
        <p className="secondary-container--text text-[20px]">{props.text}</p>
    );
}

export { MainP }