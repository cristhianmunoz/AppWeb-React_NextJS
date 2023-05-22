import {NotaController} from "./nota.controller";
import {NotaService} from "./nota.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {NotaEntity} from "./nota.entity";
import {Module} from "@nestjs/common";

@Module({
    controllers: [NotaController],
    providers: [NotaService],
    exports: [NotaService],
    imports: [TypeOrmModule.forFeature(
        [NotaEntity], 'default'
    )]
})

export class NotaModule{

}