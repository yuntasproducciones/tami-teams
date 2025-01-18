import '../../styles/MainSeccion.css';

function MainContent({ children }: { children: React.ReactNode }) {
    return (
        <div className="secondary-container">
            {children}
        </div>
    );
}

export { MainContent }
