import {Column, Entity, OneToMany,  PrimaryGeneratedColumn} from "typeorm";
import {PortfolioEntity} from "../portfolio/portfolio.entity";

@Entity('photographer') //nombre de la tabla en DB
export class PhotographerEntity{
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
        name: 'last-name', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 50, //longitud campo DB
        nullable: false, //si es mullable
    })
    last_name: string; //nombre campo

    @Column({
        name: 'date_birth', //nombre campo DB
        type: 'date', //tipo campo DB
        nullable: false, //Si es nullable
    })
    date_birth:Date;

    @Column({
        name: 'email', //nombre campo DB
        type: 'varchar', //tipo campo DB
        length: 100, //longitud campo DB
        nullable: false, //Si es nullable
    })
    email:string;

    @OneToMany(
        () => PortfolioEntity, //Entidad Hija
        (instanciaPortfolioEntity) =>
            instanciaPortfolioEntity.photographer
    )
    portfolios: PortfolioEntity[];


}