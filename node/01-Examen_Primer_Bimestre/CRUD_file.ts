const fs = require('fs');

//tsc CRUD_file.ts --target es6

export function leerArchivos(path){
    return new Promise(
        (resolve, reject) =>{
            fs.readFile(
                path,
                (errorLecturaArchivo, contenidoArchivo) => {
                    if (errorLecturaArchivo){
                        reject('No se leyó el archivo ;(')
                    } else{
                        resolve(contenidoArchivo);
                        //console.log(contenidoArchivo);
                    }
                }
            );
        }
    );
}
export function escribirArchivos(path, contenidoArchivo){
    return new Promise(
        (resolve,reject) =>{
            fs.writeFile(
                path,
                contenidoArchivo,
                (errorEscritura) => {
                    if (errorEscritura){
                        reject('No se escribio en el archivo ;(');
                    }else{
                        //console.log('Éxito');
                    }
                }
            );
        }
    );
}
