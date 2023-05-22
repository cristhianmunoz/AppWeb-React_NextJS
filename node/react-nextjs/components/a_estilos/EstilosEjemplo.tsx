//components/a_estilos/EstilosEjemplo.tsx

import styles from "./estilos.module.css"
import styled from "@emotion/styled";
//****Los estilos deben de tener el nombre "module.css"****

//Styled Components
const Titulo = styled.h1`
    font-size: 2rem;
    text-transform: uppercase;
    color: orange;
`
const TituloRojo = styled.h1`
    font-size: 1.5rem;
    text-transform: capitalize;
    color: red;
`
const Subtitulo = styled.h1`
    font-size: 2rem;
    text-transform: capitalize;
    color: green;
`

export default function (){
    const misEstilos = {
        color: 'white',
        backgroundColor: 'black',
        borderBottom: '5px solid yellow',
    };
    return (
        /*Para importar un estilo se lo debe declarar con {} y nombrar .styles*/
        <>
            <Titulo>Hola Titulo</Titulo>
            <TituloRojo>Hola Titulo Rojo</TituloRojo>
            <Subtitulo>Hola Subtitulo</Subtitulo>

            <h1 style={
                {
                    color:misEstilos.color,
                    backgroundColor: misEstilos.backgroundColor,
                    borderBottom: misEstilos.borderBottom,
                }
            }>
                Estilos en Objeto
            </h1>
            <div style={misEstilos}> Otros estilos</div>
            <div className={styles.rojo}>Hola</div>

        </>
    )
}