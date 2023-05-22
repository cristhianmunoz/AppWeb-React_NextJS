import {IsIn, IsNotEmpty, IsString} from "class-validator";

export class UsuarioUpdateDto{
    @IsNotEmpty()
    @IsString()
    nombres: string;

    @IsNotEmpty()
    @IsString()
    apellidos:string;

    @IsNotEmpty()
    @IsIn(['U', 'A'])
    rol: string;
}