//01-variables.ts
//npm install -g typescript
//tsc
//C:\Users\criss\GitHub\munoz-aulestia-cristhian-david\node\02-typescript>tsc 01-variables.ts --target es3
var nombre = "Adrian"; //primitivo
var nombre2 = "Adrian2 "; //Calse String
//tsc 01-variables.ts --target es3
//tsc 01-variables.ts --target es6
//nombre =1; error
let edad = 32;
let casado = false;
let fecha = new Date();
let sueldo;
sueldo = 12.4;
//Duck Typing
let apellido = "Eguez"; //string
//apellido = 1; Error, no es un string
apellido = 'Sarzasa';
apellido.toUpperCase();
let marihuana = 2;
marihuana = '2';
marihuana = true;
marihuana = () => '2';
let edadMultiple = '2'; // 2/ new Date()
edadMultiple = '2';
edadMultiple = 'dos';
edadMultiple = new Date();
edadMultiple = 222;
let numeroUnico = 1; // para igualar a otros se castea
numeroUnico = numeroUnico + Math.pow(edadMultiple, 2);
