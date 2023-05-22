"use strict";
exports.__esModule = true;
exports.escribirArchivos = exports.leerArchivos = void 0;
var fs = require('fs');
//tsc CRUD_file.ts --target es6
function leerArchivos(path) {
    return new Promise(function (resolve, reject) {
        fs.readFile(path, function (errorLecturaArchivo, contenidoArchivo) {
            if (errorLecturaArchivo) {
                reject('No se leyó el archivo ;(');
            }
            else {
                resolve(contenidoArchivo);
                //console.log(contenidoArchivo);
            }
        });
    });
}
exports.leerArchivos = leerArchivos;
function escribirArchivos(path, contenidoArchivo) {
    return new Promise(function (resolve, reject) {
        fs.writeFile(path, contenidoArchivo, function (errorEscritura) {
            if (errorEscritura) {
                reject('No se escribio en el archivo ;(');
            }
            else {
                //console.log('Éxito');
            }
        });
    });
}
exports.escribirArchivos = escribirArchivos;
