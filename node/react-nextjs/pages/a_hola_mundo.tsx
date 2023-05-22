//pages/a_hola_mundo

//------Primera forma de declararlo
/*
const a_componente = function (){
    return (
        <></>
    )
}
*/

/*
//es importante export elñ componente
export default a_componente
//------Segunda forma de declararlo
const b_componente =()=>{
    return <></>
}*/

//------Tercera y última forma de declarar y exportar

import Componente from "../components/b_componentes/Componente";
import EstilosEjemplo from "../components/a_estilos/EstilosEjemplo";

export default function a_hola_mundo(){

    return (
        <>
            <h1>Hola mundo</h1>
            <EstilosEjemplo> </EstilosEjemplo>
            <Componente
                iteraciones={3}
                mostrar={true}
                url={'http://google.com'}
            ></Componente>
        </>
    )
}