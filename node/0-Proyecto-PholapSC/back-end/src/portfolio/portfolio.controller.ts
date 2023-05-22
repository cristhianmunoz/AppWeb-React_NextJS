import {Body, Controller, Delete, Get, HttpCode, Param, Post, Query} from "@nestjs/common";
import {PortfolioService} from "./portfolio.service";
import {PortfolioEntity} from "./portfolio.entity";
import {PhotographerService} from "../photographer/photographer.service";

@Controller('portfolio')

export class PortfolioController{
    constructor(
        private readonly portofolioService:PortfolioService
    ) {
    }

    @Get("/:id") //GET/portfolio/id
    @HttpCode(200)
    findOneById(
        //parametros de ruta
        @Param() params
    ){
        return this.portofolioService.findOneById(+params.id);
    }

    @Get("/")
    @HttpCode(200)
    find(
        @Query() queryParams
    ){
        return this.portofolioService.find({
            relations:['photographer']
        });
    }

    @Post("/")
    @HttpCode(201)
    async create(
        @Body() bodyParams
    ){
        //vemos si existe photograpfo con ese id

        return this.portofolioService.create(bodyParams);
    }

    @Delete("/:id")
    @HttpCode(200)
    delete(
      @Param() params
    ){
        return this.portofolioService.delete(+params.id);
    }




}