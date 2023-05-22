//03-operadores.js
const arreglo = [
    {
        id: 1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id: 2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id: 3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id: 4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id: 5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id: 6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id: 7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id: 8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id: 9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id: 10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//FUNCIONES COMO PARAMETROS
//FIND
//enviamos una expresion -> TRUTY FLASY
//devuelve el indice del primero que cumpla esa condicion
const respuestaFind = arreglo
    .find(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual', valorActual);
            console.log('indiceActual', indiceActual);
            console.log('arregloCompleto', arregloCompleto);
            return valorActual.nota <= 5; //EXPRESION = = =
        }
    );
console.log('respuestaFind', respuestaFind)

const respuestaIndex = arreglo
    .findIndex(
        function (valorActual,indiceActual,arregloCompleto){
            return valorActual.nombre ==="Cristhian";
        }
    )
console.log('respuestaIndex', respuestaIndex); //indice -> 6 // NO encuentra -> -1

//FOREACH
//Itera el arreglo
const respuestaForEach = arreglo
    .forEach(
        function (valorActual, indiceActual, arregloCompleto){
            console.log('valorActual',valorActual);
            return;
        }
    );
console.log('respuestaForEach', respuestaForEach); //Undefined función que no devuelve nada

//MAP (Modificar  o Mutar el arreglo y devuelve un nuevo arrrglo
//enviamos los datos del nuevo arreglo
//devuelve el nuevo arreglo
const respuestaMap = arreglo
    .map(
        (valorActual,indiceActual, arregloCompleto) => {
            const notaActual = valorActual.nota + 1;
            const nuevoElemento = {
                id: valorActual.id,
                nombre: valorActual.nombre,
                nota: notaActual,
                estaAprobado: notaActual > 14,
                casado: false,
            };
            return nuevoElemento;
        }
    );
console.log('respuestaMap',  respuestaMap);
console.log('arreglo',arreglo);

//FILTER (filtrar el arreglo)
//enviamos EXPRESSION TRUTY FALSY
//devuelve los elementos que cumple esa condicion

const respuestaFilter = arreglo
    .filter(
        (valorActual, indiceActual, arregloCompleto)=>{
            return valorActual.nota >= 14;
        }
    );
console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//SOME -> espresion
//devuelve BOOLEANO
//TODAS las notas son mayores a 14? SI o NO
//OR
const respuestaSome = arreglo
    .some(
        function (valorActual,indiceActual,arregloCompleto){
         return valorActual.nota < 9;
        }
    );
console.log('respuestaSome',respuestaSome);
//EVERY -> expresion
//DEVUELVE BOOLEANO
//TODAS las notas son mayores a 14? SI o NO
//AND
const respuestaEvery = arreglo
    .every(
        function (valorActual, indiceActual, arregloCompleto){
            return valorActual.nota > 14;
        }
    );
console.log('respuestaEvery', respuestaEvery);

//REDUCE izq -> der
//REDUCE RIGHT der -> izq
//[1,2,3,4,5,4,3,1]
//0 -> Variable Inicial
//OPERACION
//0 + 1
//1 + 2
//3 + 3

//EJEMPLO
//100<3 Puntos de Vida
//100 -1 -2 -3 -5 -6 -5 -4 -3 -1
//0 1 + 2 +3 +4 +6 +5 + 4 +3 +1
//[1,2,3,5,6,5,4,3,1]
const respuestaReduce = arreglo
    .reduce(
        function (valorAcumulado,valorActual, indice){
            return(valorAcumulado + valorActual.nota);
        },
        0 //Acumulador
    );
console.log(respuestaReduce); //146
console.log(respuestaReduce / arreglo.length); //14,6

arreglo.filter((a)=>a.nota<14)
    .map((e)=> e.nota +1)
    .some((e)=> e>14); //hasta some ya solo tengo un booleano y ya no puedo seguir concatenando

