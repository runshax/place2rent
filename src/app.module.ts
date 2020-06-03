import { Module } from '@nestjs/common';
import { KostanController } from './controllers/kostan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { models } from './db-config';


dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [...models],
      synchronize: false,
    })
  ],
  controllers: [KostanController],
  providers: [],
})
export class AppModule { }
