/**
 * @Author: linzq
 * @Date: 2021-05-20 10:19:17
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-26 23:53:46
 * @Description:
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { schedule } from '/#model/schedule';
import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid'; // uuid生成

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
    const { status, type, description } = params;
    console.log(params);
    const required = { status, type, description };
    const search = {};
    for (const i in required) {
      if (required[i]) {
        search[i] = { [Op.substring]: required[i] };
      }
    }
    return this.scheduleModel.findAll({ where: search });
  }

  async newTask(taskObj): Promise<boolean> {
    taskObj = {
      ...taskObj,
      id: uuidv4(),
    };
    try {
      await this.scheduleModel.create(taskObj);
      return true;
    } catch (error) {
      throw new HttpException(error, HttpStatus.BAD_REQUEST);
    }
  }
  changeTask(): string {
    return 'Hello World!';
  }
  deleteTask(): string {
    return 'Hello World!';
  }
}
