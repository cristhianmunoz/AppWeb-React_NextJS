import {IsDate, IsNotEmpty, IsString} from "class-validator";

export class PhotographerCreateDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsString()
    last_name:string;

    @IsNotEmpty()
    @IsDate()
    date_birth:Date;

    @IsNotEmpty()
    @IsString()
    email:string;
}