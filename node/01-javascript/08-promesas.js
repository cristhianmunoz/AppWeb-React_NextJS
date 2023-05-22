//08-promesas.js
const fs = require('fs');
/*
    Una funcion que acepte como parametro una variable
    del "path" del archivo y otra variable con et "contenidoArchivo".
    Utilizar eL modulo 'fs' para Leer eL archivo en ese "path" y anadir el
    "contenidoArchivo" a ese archivo.
*/

function leerArchivos(path){
    return new Promise(
        (resolve, reject) =>{
            fs.readFile(
                path,
                (errorLecturaArchivo, contenidoArchivo) => {
                    if (errorLecturaArchivo){
                        reject('No se leyó el archivo ;(')
                    } else{
                        resolve(contenidoArchivo);
                    }
                }
            );
        }
    );
}
function escribirArchivos(path, contenidoArchivo){
    return new Promise(
        (resolve,reject) =>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if (errorEscritura){
                        reject('No se escribio en el archivo ;(')
                    }else{
                        console.log('Si se escribio');
                    }
                }
            );
        }
    );
}

function ejercicio08(path, contenidoNuevo){
    return leerArchivos(path)
        .then(
            (contenidoOriginal)=>{
                return escribirArchivos(path,contenidoOriginal + contenidoNuevo);
            }
        )

}

ejercicio08('../06-ejemplo.txt', ':) lo logramos!')


//ASINC & AWAIT
//Reglas
//1) Estar dentro de una duncion (nombrada o anonima)
//2) Agregar la palabra 'async' anstes de la declaracion de la funcion
//3) AGREGAR la palabra 'await' antes de la declaracion de una promesa
async function asyncAwaitUno(path, nuevoContenido){
    //Si sabemos que en la promesa puede haber una reject, usamos try y catch
    try{
        const respuestaContenidoArchivoOriginal = await leerArchivos(path);
        //de aqui no avanza hasta que logre leer la promesa

        await escribirArchivos(path, respuestaContenidoArchivoOriginal + nuevoContenido);
        await escribirArchivos(path, (leerArchivos(path)) + nuevoContenido);
    }catch (error){
        console.error(error);
    }

}
asyncAwaitUno('06-ejemplo.txt', ':) lo logramos!').then().catch();

const asyncAwaitDos = async function (){

}
const asyncAwaitTres = async ()=>{

}




