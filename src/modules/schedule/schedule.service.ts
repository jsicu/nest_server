/**
 * @Author: linzq
 * @Date: 2021-05-20 10:19:17
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-25 20:41:45
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { schedule } from '/#model/schedule';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel(schedule)
    private scheduleModel: typeof schedule
  ) {}

  funList(): string {
    return 'Hello World!';
  }

  async taskList(params): Promise<schedule[]> {
    console.log(params);
    return this.scheduleModel.findAll();
  }

  newTask(): string {
    return 'Hello World!';
  }
  changeTask(): string {
    return 'Hello World!';
  }
  deleteTask(): string {
    return 'Hello World!';
  }
}
