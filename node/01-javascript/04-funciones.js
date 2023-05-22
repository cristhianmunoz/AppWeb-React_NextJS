//04-funciones.js
function soloNumeros(a, b, c){
    return a-b+c; //valor a devolver
}
//JS permite el uso de funciones sin validaciones
//soloNumeros('v', true, [1,2,3]);
//soloNumeros((a)=>a, (a)=>a, (a)=>a);
//soloNumeros(1,2,3,4,5,6,7,8,9,0);
//soloNumeros();

function soloLetras(a,b,c){ //sin return se devuelve: undefined
    console.log(a,b,c);
}
console.log(soloNumeros());
console.log(soloLetras());


//Funciones nombreadas - named functions
function funcionNommbrada(){

}
//Funciones anonimas - Anonymous Functions
const functionSinNombre1 = function (){};
var functionSinNombre2 = function (){};
let funcionSinNombre3 = function (){};
[].forEach(function (){});
functionSinNombre1();
functionSinNombre2();
funcionSinNombre3();

//FAT ARROW > ANONYMOUS se las prefiere sobre las otras
//Funciones anonimas - Fat Arrow Functions
const functionFatArrow1 = () => {};
let functionFatArrow2 = () => {};
var functionFatArrow3 = () => {};
[].forEach(()=>{});
functionFatArrow1;
functionFatArrow2;
functionFatArrow3;

const functionFatArrow4 = () => {};
const functionFatArrow5 = (parametro)=>{
    return parametro + 1 ;
}

const functionFatArrow6 = (parametro) => parametro +1; //Una sola linea , Omito Return, Omito Llaves
const functionFatArrow7 = parametro => parametro +1; //Solo si tenemos 1 parametro
                                                    //Omitimos parentesis
const functionFatArrow8 = (numUno, numDos, numTres) => numUno + numDos + numTres;

//... => parametros infinitos =>LLegan en un arreglo de parametros
//      solo podemos  tener un parametro infinito por funcion

//primero se deben poner todos los demas parametros y por ultimo el parametro infinito
//function sumarNumeros(a,b,c,d,s,f,...todosNumeros) GOOD
//function sumarNumeros(...todosNumeros,a,c,d,f,s,t) BAD
//function sumarNumeros(...todosNumeros,...todosNumeros2)
function sumarNumeros(...todosNumeros){ //Parametros Infinitos [1,3,5,6,2,1,3]
    let total = 0;
    todosNumeros.forEach(
        (valorActual)=>{
            total =total + valorActual;
        }
    );
    return total;
    //return TodosNumeros.reduce((a, v) => a + v, 0);
}
sumarNumeros(1,2,3,4,6,7,5,4,3,2,1);