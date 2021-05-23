/**
 * @Author: linzq
 * @Date: 2021-05-20 10:19:17
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-20 14:36:46
 * @Description:
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ScheduleService {
  funList(): string {
    return 'Hello World!';
  }
}
