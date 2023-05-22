//04-class.ts

class Persona {
    public nombre: string;
    public apellido: string;
    static nombreReferencial: string = 'Humamo';
    protected nombreyApellido =''; // Duck Typing -> string

    constructor(
        nombreParametro: string,
        apellidoParametro: string,
    ) {
        this.nombre =nombreParametro;
        this.apellido= apellidoParametro;
        this.nombreyApellido = nombreParametro + ' ' + apellidoParametro;
    }
    private mostrarNombreApellido(): string {
        return this.nombreyApellido;
    }
}


//----------------------------------------------------------------------

class Usuario extends Persona{
    constructor(
        nombreParametro:string, //Parametros del cosntructor
        apellidoParametro: string, //Parametros del constructor
        public cedula: string, //Modificador acceso-> Propíedad de la clase
        public estadocivil: string, //Mofificador acceso -> Propiedad de la clase
    ) {
        super(nombreParametro, apellidoParametro);
        this.cedula;
        this.estadocivil;
    }
}
const adrian = new Usuario(
  'Adrian',
  'Eguez',
  '1727425900',
  'soltero'
);
adrian.nombre;
adrian.apellido;
adrian.cedula; //1727425900
adrian.estadocivil; // 'soltero'




