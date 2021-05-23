/**
 * @Author: linzq
 * @Date: 2021-05-20 10:20:24
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-21 11:07:21
 * @Description: 进度看板路由
 */
import { Controller, Get } from '@nestjs/common';
import { ScheduleService } from './schedule.service';

@Controller('nest/schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  funList() {
    return this.scheduleService.funList();
  }
}
