import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotographerService} from "./photographer.service";
import {PhotographerController} from "./photographer.controller";
import {PhotographerEntity} from "./photographer.entity";

@Module({
    imports:[
        TypeOrmModule.forFeature(
            [PhotographerEntity], //Entidad en este modulo
        ),
    ],
    providers:[PhotographerService],
    exports:[PhotographerService],
    controllers:[PhotographerController]
})


export class PhotographerModule{


}