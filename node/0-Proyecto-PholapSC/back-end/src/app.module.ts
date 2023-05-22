import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PhotographerEntity} from "./photographer/photographer.entity";
import {PortfolioEntity} from "./portfolio/portfolio.entity";
import {PortfolioModule} from "./portfolio/portfolio.module";
import {PhotographerModule} from "./photographer/photographer.module";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: './bdd/bdd.sqlite',
      entities: [
          PhotographerEntity,
          PortfolioEntity,
      ], //entidades en TODO el aplicativo
      synchronize: true, // true => edita las columnas y tablas // false => nada
      dropSchema: false, //true => borra toda la base de datos !!!!  // false => nada
    }),
      PhotographerModule,
      PortfolioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
