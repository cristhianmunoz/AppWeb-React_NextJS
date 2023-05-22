//Stringly y Parse

const usuario ={
    id:3,
    nombre:"Cristhian",
};
const usuario1 ={
    id:3,
    nombre:"Cristhian",
};
const usuario2 ={
    id:2,
    nombre:"Cristhian2",
};
const arregloUsuarios= [
    {
        id:1,
        nombre:"Cristhian",
    },
    usuario,
    usuario2,
];

const arregloGuardado = JSON.stringify(arregloUsuarios)//Usuarios, Objetos


const objetoGuardado = JSON.stringify(usuario); // Arreglos,
console. log( ' arregloGuardado ' , arregloGuardado) ;
console. log(' objetoGuardado' , objetoGuardado) ;

const arregloRestaurado = JSON.parse(arregloGuardado);
const objetoRestaurado = JSON.parse(arregloGuardado);

console.log( 'arregloRestaurado',arregloRestaurado) ;
console.log('objetoRestaurado',objetoRestaurado) ;
