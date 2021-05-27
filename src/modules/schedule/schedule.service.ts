/**
 * @Author: linzq
 * @Date: 2021-05-20 10:19:17
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-27 23:54:09
 * @Description:
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import Replace from '/@/utils';
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

  async taskList(params) {
    const { status, type, description } = params;
    const required = { status, type, description };
    const search = {};
    for (const i in Replace(required)) {
      if (required[i]) {
        search[i] = { [Op.substring]: required[i] };
      }
    }
    const { count, rows } = await this.scheduleModel.findAndCountAll({ where: search });

    const list = [];
    for (const obj of JSON.parse(JSON.stringify(rows))) {
      let handleObj = {};
      for (const key in obj) {
        if (key === 'funDescription' || key === 'completedIds') {
          handleObj[key] = obj[key].split(',');
        }
      }
      console.log(handleObj);
      handleObj = Object.assign({}, JSON.parse(JSON.stringify(obj)), handleObj);
      list.push(handleObj);
    }
    console.log(list);
    return { list, total: count };
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
