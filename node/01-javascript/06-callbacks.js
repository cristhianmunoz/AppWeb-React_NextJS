const fs =require('fs');//file system
                        //Importar modulo fs
//06-ejemplo.txt -> Hola
// LECTURA
console.log('PRIMERO');
fs.readFile( //peticion asincrona
    './06-ejemplo.txt', //NOMBRE A PATH DEL ARCHIVO
    'utf-8', //Codificacion
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => { //Callback
       if (errorLecturaPrimerArchivo){
           console.log('ERROR LEYENDO CONTENIDO', errorLecturaPrimerArchivo);
       }else {
           console.log('Contenido: ',contenidoPrimerArchivo);
       }
       // console.log('SEGUNDO');
    }
);
console.log('TERCERO');
//lenguaje asincrono

//ESCRITURA
//fs.writeFile(
//    './06-nuevo-archivo.txt',
//      nuevocontenido,
//    (errorEscritura) => {}
//);


//Ejercicio1
//1) Leer archivos: 06-ejemplo.txt
//leugo imprimir en consola
//2) Despues del paso 1, Leer archivo: 01-variable.js
//, luego imprimir en consola
//3)Crear un nuevo archivo llamado 06-nuevo-archivo.txt
//ccon el contenido de lo otros dos archivos
let file1 = 0 ;
let file2 = 0 ;

fs.readFile(
    './06-ejemplo.txt', ///Nombre del archivo a leer
    'utf-8',
    (errorLecturaArchivo1, contenidoArchivo1) => {
        if (errorLecturaArchivo1){
          console.log('Error leyendo Archivo1', errorLecturaArchivo1);
        } else{
            console.log('Contenido', contenidoArchivo1);
            file1 = contenidoArchivo1;
        }
    }
);

fs.readFile(
    './01-variables.js',
    (errorLecturaArchivo2, contenidoArchivo2) => {
        if (errorLecturaArchivo2){
            console.log('Error leyendo Archivo1', errorLecturaArchivo2);
        } else{
            console.log('Contenido', contenidoArchivo2);
            file2 = contenidoArchivo2;
        }
    }
);
file1 = file1+file2;

console.log(file1);

fs.writeFile(
    './06-nuevo-archivo.txt',
    file1= file1 + file2,
    (errorEscritura) => {
        if (errorEscritura){
            console.log('Error escribiendo en Archivo:', errorLecturaArchivo2);
        }else{
            console.log('Exito en la escritura en el nuevo archivo');
        }
    }
);
fs.readFile(
    './06-ejem plo.txt',
    'utf-8',
    (errorLecturaPrimerArchivo, contenidoPrimerArchivo) => {
        if (errorLecturaPrimerArchivo) {
            console.error(errorLecturaPrimerArchivo);
            throw new Error(' Error leyendo primer archivo');
        } else {
            fs.readFile(
                './O1-variables.js', // Nombre o path det archivo
                'utf-8', // codificacion
                (errorLecturaSequndoArchivo, contenidoSequndoArchivo) => {
                    if (errorLecturaSequndoArchivo) {
                        console.error(errorLecturaSequndoArchivo);
                        throw new Error(' Error leyendo primer archivo');
                    } else {
                        const nuevoContenido = contenidoPrimerArchivo + contenidoSequndoArchivo;
                        fs.writeFile(
                            ' ./Oó-nuevo-archivo. tXt',
                            nuevoContenido,
                            (errorEscritura) => {
                                if (errorEscritura) {
                                    console.error(errorEscritura);
                                    throw new Error(' Error escribiendo nuevo archivo');
                                } else {
                                    console.log(' Completado ');
                                }
                            }
                        );
                    }
                }
            );
        }
    }
);