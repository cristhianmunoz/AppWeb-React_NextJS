import {Injectable} from "@nestjs/common";
import {InjectDataSource} from "@nestjs/typeorm";
import {DataSource, FindManyOptions} from "typeorm";
import {PhotographerEntity} from "./photographer.entity";
import {PhotographerCreateDto} from "./dto/photographer-create.dto";
import {PhotographerUpdateDto} from "./dto/photographer-update.dto";

@Injectable()
export class PhotographerService{
    constructor(
        @InjectDataSource()
        public dataSource: DataSource
    ) {}


    //Obtiene del Repositorio la entidad Photographer Entity
    public photographerRepository=this.dataSource.getRepository(PhotographerEntity);


    //Encuentra en todo el repositorio los objetos PhotographerEntity
    find(options: FindManyOptions<PhotographerEntity>){
        return this.photographerRepository.find(options)
    }


    //Encuentra un solo Photographer por su id
    findOneById(id:number){
        return this.photographerRepository.findOne({
            where:{
                id:id
            }
        })
    }


    //Crear un obejto Photographer
    create(dataCreate: PhotographerCreateDto){
        return this.photographerRepository.save(dataCreate);
    }


    //Actualizar un objeto Photographer
    update(dataUpdate:PhotographerUpdateDto, id:number){
        return this.photographerRepository.save(
            {...dataUpdate, id}
        );
    }


    //Eliminar un objeto Photographer
    delete(id:number){
        return this.photographerRepository.delete(id);
    }


}