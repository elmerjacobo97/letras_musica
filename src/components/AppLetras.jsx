import Formulario from './Formulario';
import useLetras from '../hooks/useLetras';
import Alerta from './Alerta';
import Letra from './Letra';

const AppLetras = () => {
    const { alerta, letra, cargando } = useLetras();

    return (
        <>
            <header>Búsqueda de Letras de Canciones</header>
            <Formulario />

            <main className='animate__animated animate__fadeIn'>
                {alerta ? (
                    <Alerta>{alerta}</Alerta>
                ) : letra ? (
                    <Letra />
                ) : cargando ? (
                    'Cargando...'
                ) : (
                    <p className='text-center'>
                        Busca Letras de tus Artistas Favoritos
                    </p>
                )}
            </main>
        </>
    );
};

export default AppLetras;
