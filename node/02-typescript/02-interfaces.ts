// 02-interfaces
export class A{

}
export  interface  B{

}

interface Usuario{
    nombre: string;
    apellido: string;
    edad?: number | undefined; // opcional
    sueldo?: number; //opcional
    casado: boolean | 0 | 1;
    estado: 'AC' | 'IN' | 'BN';

    //FUNCIONES
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto: number) => number;
    estadoActual?: () => 'AP' | 'AF' | 'AT';
}

// @ts-ignore
let user: Usuario = {
    nombre: 'Adrian',
    apellido: 'Muñoz',
    casado: 0,
    sueldo: 11.2,
    estado: 'AC',

    imprimirUsuario: (mensaje: string) =>{
      return 'El mensaje es: '+mensaje;
    },
    calcularImpuesto: impuesto => {
        return user.sueldo + user.sueldo*impuesto;
    },
    estadoActual: () => {
        switch (user.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}