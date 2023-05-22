import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PortfolioService} from "./portfolio.service";
import {PortfolioController} from "./portfolio.controller";
import {PortfolioEntity} from "./portfolio.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [PortfolioEntity], //Entidad en este modulo
        ),
    ],
    providers:[PortfolioService],
    exports:[PortfolioService],
    controllers:[PortfolioController]
})

export class PortfolioModule{
}