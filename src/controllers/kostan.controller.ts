import { Controller, Get, Req, Res } from '@nestjs/common';
import { Response } from 'express';
import { Connection } from 'typeorm';
import { Customers } from '../models/customers';

@Controller('kostan')
export class KostanController {

  constructor(private connection: Connection) { }

  @Get()
  async index() {
    return { message: 'KostanController' };
  }

  @Get('getList')
  async getList(@Req() req, @Res() res: Response) {
    try {
      const resultMsg = await this.connection.getRepository(Customers)
        .createQueryBuilder('customers')
        .getMany();
      res.status(200).send({ result: resultMsg });
    } catch (error) {
      res.status(400).send({ result: error.message });
    }
  }
}
