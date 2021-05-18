/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-18 22:46:28
 * @Description:
 */
import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  @Post('/save')
  save() {
    // return this.appService.findAll();
    // return this.appService.findOne();
    return this.appService.save();
    // return true;
  }
}
