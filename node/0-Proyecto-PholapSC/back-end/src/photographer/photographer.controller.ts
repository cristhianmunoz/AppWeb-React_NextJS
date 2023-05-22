
import {BadRequestException, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query} from "@nestjs/common";
import {PhotographerService} from "./photographer.service";
import {PhotographerCreateDto} from "./dto/photographer-create.dto";
import {validate} from "class-validator";
import {PhotographerUpdateDto} from "./dto/photographer-update.dto";

@Controller('photographer')

export class PhotographerController{
    constructor(
        private readonly photographerService:PhotographerService
    ) {
    }


    //Metodos RESTFULL

    //Se obtiene un solo objeto por su identificador
    @Get("/:id") //GET/photographer/'id'
        @HttpCode(200)
    findOneById(
        //parametros de ruta
        @Param() params //{id:1, idPortfolio:1)
    ){
        return this.photographerService.findOneById(+params.id);
    }

    //Se obtiene todos los objetos existentes
    @Get("/")
    @HttpCode(200)
    find(
      @Query() queryParams
    ){
        return this.photographerService.find({
            relations:['portfolios']
        })
    }


    //Create/insert new object Photographer
    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams // those are Body params sended by a Form
    ){
        const newPhotographer= new PhotographerCreateDto();
        newPhotographer.name=bodyParams.name;
        newPhotographer.last_name=bodyParams.last_name;
        newPhotographer.email=bodyParams.email;
        newPhotographer.date_birth= new Date(bodyParams.date_birth);

        const arrayErrors = await validate(
            newPhotographer
        ); //se validan los datos ingresados
        if(arrayErrors.length > 0){
            console.error({arrayErrors})
            throw new BadRequestException({
                message: 'Envio mal de datos'
            });
        }

        return this.photographerService.create(newPhotographer);
    }


    //Update a object Photographer
    @Put("/:id") //PUT/usuario/:id
    @HttpCode(200)
    async update(
        @Param() params, //parametros de ruta
        @Body() bodyParams //parametros de cuerpo
    ){
        const newPhotographer = new PhotographerUpdateDto();
        newPhotographer.name=bodyParams.name;
        newPhotographer.last_name=bodyParams.last_name;
        newPhotographer.email=bodyParams.email;
        newPhotographer.date_birth=new Date(bodyParams.date_birth);

        const arrayErrors = await validate(
            newPhotographer
        );
        if (arrayErrors.length > 0) {
            console.error({arrayErrors});
            throw new BadRequestException({
                mensaje: 'Envio mal datos'
            });
        }
        return this.photographerService.update(
            bodyParams,
            +params.id
        );
    }

    //Eliminamos un objeto Photographer por su id
    @Delete("/:id") // DELETE /usuario/:id
    @HttpCode(200)
    delete(
        @Param() params // {id:1, idNota:12}
    ) {
        return this.photographerService.delete(+params.id);
    }

}