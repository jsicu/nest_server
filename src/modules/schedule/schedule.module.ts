/**
 * @Author: linzq
 * @Date: 2021-05-20 10:20:12
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-20 10:32:47
 * @Description:
 */
import { Module } from '@nestjs/common';
import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';

@Module({
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
