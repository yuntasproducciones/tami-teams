import logoTami from '../../../public/assets/images/Logos/logo_animado2.gif';

function Figure_load() {
    return (
        <figure className="w-4/5 sm:w-3/5 md:w-2/5 lg:w-1/5 h-auto flex justify-center">
            <img src={logoTami} alt="logo-tami" className="w-full h-full object-cover" />
        </figure>
    );
}

export { Figure_load };
