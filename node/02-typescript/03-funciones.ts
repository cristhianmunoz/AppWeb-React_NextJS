//03-funciones.ts
function sumarNumeros(
    numeroInicial: number,
    ...numerosInfinitos: number[]
):number {
    return numeroInicial;
}
function impimir(
    mensaje?: string //opcional
): void{
    console.log('Hola'+mensaje ? mensaje : 'bienvenido');
}
const arregloNumeros: number[] = [1,2];
const arregloNumerosDos: Array<number>=[1,2];
const arregloNumerosTres: (number | string | boolean)[] = [1, 'dos', true, 1, 'dos', true];
const arreglosNumerosCuatro: Array<number | string | boolean> = [1, 'dos', true, 1, 'dos', true];
let arregloNumerosCinco: number[] | string [] = [1, 2];
arregloNumerosCinco = ['uno', 'dos'];