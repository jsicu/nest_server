/**
 * @Author: linzq
 * @Date: 2021-05-20 10:20:12
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-24 23:00:37
 * @Description:
 */
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ScheduleController } from './schedule.controller';
import { ScheduleService } from './schedule.service';
import { schedule } from '/#model/schedule';

@Module({
  imports: [SequelizeModule.forFeature([schedule])],
  controllers: [ScheduleController],
  providers: [ScheduleService],
})
export class ScheduleModule {}
