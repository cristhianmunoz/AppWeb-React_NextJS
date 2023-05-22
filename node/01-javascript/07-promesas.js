// 07-pcgoesgs.js
const fs = require('fs');

function promesaEsPar (numero){// f->promesa
    const miPrimerPromesa = new Promise(
        (resolve,reject) =>{
            if( numero % 2 === 0) { resolve(numero); /*return (then)*/ }
            else{ reject (':( no es par'); /*throw (catch)*/}
        }
    );
    return miPrimerPromesa;
}

function promesaElevarAlCuadrado(numero){
    return new Promise((res)=> res(Math.pow(numero,2)));
}

promesaEsPar(4)
    .then(
        (data)=>{
            console.log('DATA', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .then(
        (data)=>{
            console.log('DATA', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .then(
        (data)=>{
            console.log('DATA', data);
            return promesaElevarAlCuadrado(data);
        }
    )
    .catch(
        (error)=>{ console.log('ERROR', error);}
    )
    .finally(
        ()=>{ console.log('FINALLY');}
    );
