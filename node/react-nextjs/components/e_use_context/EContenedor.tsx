import {useState} from "react";
import {ContenedorContext, ContenedorContextObject} from "./ContenedorContext";
import EComponenteA from "./EComponenteA";

export default function (){
    const [nombreUsuario, setNombreUsuario] = useState("Cristhian");
    const objetoContenedorContext:ContenedorContextObject = {nombreUsuario, setNombreUsuario};
    return(
        <>
            <ContenedorContext.Provider value={objetoContenedorContext}>
                <EComponenteA></EComponenteA>
            </ContenedorContext.Provider>
        </>
    )
}