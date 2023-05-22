import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {PhotographerEntity} from "../photographer/photographer.entity";

@Entity('portfolio') //nombre de la tabla en DB
export class PortfolioEntity{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({ //columna en la DB
        name: 'name', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 50, //longitud campo DB
        nullable: false, //si es mullable
    })
    name: string; //nombre campo

    @Column({ //columna en la DB
        name: 'photo', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 100, //longitud campo DB
        nullable: true, //si es mullable
    })
    photo: string; //nombre campo

    @ManyToOne(
        ()=> PhotographerEntity, //Entidad Papa
        (instanciaPhotographerEntity)=>
            instanciaPhotographerEntity.portfolios
    )
    photographer: PhotographerEntity
}