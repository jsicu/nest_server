/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-24 23:07:26
 * @Description:
 */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('nest')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
