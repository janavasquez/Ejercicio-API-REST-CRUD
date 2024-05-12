import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RestaurantController } from './restaurant/restaurant.controller';
import { Restaurant } from './restaurant/restaurant.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', 
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'nest_ejercicio1', // crear esta base de datos en MySQL primero
      entities: [Restaurant],
      synchronize: true, // generar tablas en base de datos
      logging: true
    }),
    TypeOrmModule.forFeature([Restaurant])
  ],
  controllers: [AppController, RestaurantController],
  providers: [AppService],
})
export class AppModule {}
