//b_componentes/Componente.tsx

import {useState} from "react";

type PropiedadesComponente = {
    url: string;
    iteraciones: number;
    mostrar?: boolean;

};
/*interface PropiedadesComponente{

}*/

export default function (props: PropiedadesComponente){
    const { url, iteraciones, mostrar} = props;
    //const url = props.url
    //const iteraciones = props.iteraciones;
    //const mostrar = props.mostrar;

    //Hooks
    const [iteracion, setIteracion] = useState(iteraciones);

    const contenidoCondicional: ()=> (JSX.Element) = ()=>{ //OPCIONAL :()=> (JSX.Element)
        if(mostrar){
            return <p>Hola</p>
        }
        return <></>
    }

    return (
        <>
        <a target="_blank" href={url}>Ir a Google</a>
            {mostrar ? <p>Hello</p>:<></>}


            {contenidoCondicional()}
            {mostrar && <h1>Si muestra </h1>}

            <div>
                {iteraciones}
            </div>
            <button className="bg-blue-500" onClick={
                (event)=>{
                    console.log(event);
                    console.log('Dio click');
                    setIteracion(iteracion + 1);
                }
            }>Aumentar</button>
        </>
    )
}