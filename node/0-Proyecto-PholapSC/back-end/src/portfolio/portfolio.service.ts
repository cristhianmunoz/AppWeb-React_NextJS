import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, FindManyOptions } from 'typeorm';
import { PortfolioEntity } from './portfolio.entity';
import {PhotographerService} from "../photographer/photographer.service";
import { PhotographerEntity } from 'src/photographer/photographer.entity';

@Injectable()
export class PortfolioService {
    constructor(
        @InjectDataSource()
        public dataSource: DataSource

    ) {}

    public portfolioRepository = this.dataSource.getRepository(PortfolioEntity);
    public photographerRepository = this.dataSource.getRepository(PhotographerEntity);

    find(options: FindManyOptions<PortfolioEntity>){
        return this.portfolioRepository.find(options)
    }


    findOneById(id:number){
        return this.portfolioRepository.findOne({
            where:{
                id:id
            }
        })
    }

    async create(dataCreate: any){
        const photographer = await this.photographerRepository.findOneById(dataCreate.id_photographer);

        const newPortfolio = new PortfolioEntity();
        newPortfolio.name = dataCreate.name;
        newPortfolio.photo = dataCreate.photo;
        newPortfolio.photographer = photographer;

        return this.portfolioRepository.save(newPortfolio);
    }

    update(dataUpdate: any, id:number){
        return this.portfolioRepository.save(
            {...dataUpdate,id}
        )
    }

    delete(id:number) {
        return this.portfolioRepository.delete(id);
    }
}