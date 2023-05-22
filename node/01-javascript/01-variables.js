//variables mutables (re asignada) e inmutables
var numeroUno = 1;
let numeroDos = 2;
numeroUno = 12;
numeroDos = 8;
numeroUno = false;

//Inmutables
const configuracionArchivos = 'PDF';
// ERROR -> configuracionArchivos = 'xml';
//vamos a preferir CONST > LET > NUNCA VAR

//Tipos de variables (primitivas)
const numero = 1; //number
const sueldo = 1.2; //number
const texto =  'Crissth'; // String
const apellido =  "Munoz"; // String
const booleano = true; // boolean
const hijos = null ; //object
const zapatos= undefined; //undefined

console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof apellido);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
//node 01-variables.js

//Condicionales
if (""){
    console.log("String vacio es verdadero");
} else{
    console.log("String vacio es falso");
}
if ("Cristhian"){
    console.log("String vacio es verdadero2");
} else{
    console.log("String vacio es falso");
}
if (-1){
    console.log("Negativos es truth");
} else{
    console.log("Negaticos es False");
}
if (0){
    console.log("Negativos es truth");
} else{
    console.log("Negaticos es False");
}
if (1){
    console.log("Positivos es truth");
} else{
    console.log("Positivos es False");
}

if(null){
    console.log("Null es Truth");
}else{
    console.log("Null es false");
}
if(undefined){
    console.log("Undefined es Truth");
}else{
    console.log("Undefined es false");
}

//Orden de importancia
// 1) const
// 2) "let
// 3) X-> "var"

const crissth = {
    "nombre":"Cristhian", //llave:valor
    'apellido':'Muñoz',
    edad: 22,
    hijos: null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color:'plomo',
        talla: '40'
    },
    mascotas: ['Cachetes', 'Pequitas', 'Panda']
};

console.log(crissth);
console.log(typeof crissth);

//Acceder a las propiedades del objecto
crissth.nombre; //"Cristhian"
crissth.apellido;//'Muñoz'
crissth["nombre"];//"Cristhian"
//Cambiar valores
crissth.nombre = "David";
crissth["nombre"] = "Josue";
//Crear nuevos atributos o metodos  dentro del objeto
crissth.sueldo;//Undefined
console.log(crissth.sueldo);
crissth.sueldo = 1.2;
console.log(crissth.sueldo);//1.2
crissth["gastos"] = 0.8;
console.log(crissth.gastos);
console.log(crissth);


//Borrar el valor de una propiedad
crissth.nombre = undefined;
console.log(crissth)
console.log(Object.keys(crissth));
console.log(Object.values(crissth));
//Delete la llave y el valor dentro del objeto
delete crissth.nombre;//eliminar la llave "nombre"
console.log(Object.keys(crissth));
console.log(crissth);


//Variables por valor o referencia
//Variable por valor en JS son las primitivas: number, string, boolean
let edadCrissth = 22;
let edadDavid = edadCrissth; // Guardamos una primitiva en otra variable
                            //variables por valor
console.log(edadCrissth);//22
console.log(edadDavid); //22
edadCrissth = edadDavid + 1;
console.log(edadCrissth); //23
console.log(edadDavid); //22

//Variables por Referencias: object ({},[])
let notas = {
    total: 10,
};
let  notasSegundoBimestre = notas;
notasSegundoBimestre.total = notasSegundoBimestre.total + 1;
console.log(notas);
console.log(notasSegundoBimestre.total);
//Como clonar objetos
let notasTercerBimestre = Object.assign({}, notas);
//Object.assign([], arreglo);
notasTercerBimestre.total = notasTercerBimestre.total +1;
console.log('notas',notas);
console.log('notasSegundoBimestre',notasSegundoBimestre);
console.log('notasTercerBimestre', notasTercerBimestre);


