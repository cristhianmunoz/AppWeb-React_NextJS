//components/c_use_state/EjemploUseState.tsx
import {useEffect, useState} from "react";

interface Usuario {
    nombre: string;
    edad:number;
    casado: boolean;
    hijos?: number[];
}

export default function (){
    const [numero,setNumero]= useState(0);
    const [nombre, setNombre]= useState("");
    const [arregloNumeros, setArregloNumeros]= useState([1,2,3] as Number[])
    const [usuario, setUsuario]= useState(
        {
            nombre:"Adrian",
            edad: 33,
            casado: true,
        } as Usuario)
    //setUsuario({nombre:"Cristhian", edad: 22, casado: false, hijos: []})

    //ayuda escuchar cambios variables
    useEffect(
        ()=>{
            console.log('Inicío del Componente', numero, usuario);
        },
        [] //arregloVariables
            //Si esta vacia se ejecuta al principio una vez
    );
    useEffect(
        ()=>{
            console.log('Cambio numero', numero);
        },
        [numero] //arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio ArregloNumeros', arregloNumeros);
        },
        [arregloNumeros] //arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio Usuario', usuario);
        },
        [usuario] //arregloVariables
    );
    useEffect(
        ()=>{
            console.log('Cambio Todo', usuario, arregloNumeros, usuario);
        },
        [numero, arregloNumeros, usuario] //arregloVariables
    );




    return(
        <>
        <button className="bg-blue-500 m-2" onClick={(event)=>{
            event.preventDefault();
            setNumero(1);
        }}>Numero</button>

        <button className="bg-blue-500" onClick={(event)=>{
            event.preventDefault();
            setArregloNumeros([...arregloNumeros, 1]);
        }}>Arreglos</button>

        <button className="bg-blue-500" onClick={(event)=>{
            event.preventDefault();
            let usuarioNuevo = {...usuario, nombre: new Date().toString()};
            setUsuario(usuarioNuevo);
        }}>Usuario</button>

        </>
    )
}