//05-destructuracion.js
//Destructuracion de OBJETOS -> ORDEN si importa
const adrian = {
    nombre:"Adrian",
};
const carolina ={
    nombre:"Carolina",
    apellido: "Eguez",
};
const adrianCarolina = { //Crea una nueva REFERENCIA (VALOR)
    ...carolina, //1 el orden es imporatnte para propiedades que se respiten
    ...adrian,
};
console.log('adrianCarolina', adrianCarolina);

//Destructuracion de arreglos
const arrregloUno = [1,2,3,4,5];
const arregloDos = [2,7,8,9,10];
const superArreglo = [
    ...arrregloUno, //El Orden importa
    ...arregloDos,
]; // [1,2,3,4,5,6,7,8,9,10];
console.log('superArreglo', superArreglo);