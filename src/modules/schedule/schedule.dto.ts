/**
 * @Author: linzq
 * @Date: 2021-05-25 20:35:26
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-25 22:30:28
 * @Description:
 */

import { IsString, IsInt, MinLength, MaxLength } from 'class-validator';

// 任务筛选
export class TaskDto {
  @IsString({ message: '必须的字符类型' })
  @MinLength(2, {
    message: '长度不能小于2',
  })
  @MaxLength(10, {
    message: '长度不能超过10',
  })
  name: string;

  // @IsInt({ message: '必须的整数' })
  // age: string;
}

// 任务新增
export class NewTaskDto {
  @IsString({ message: '必须的字符类型' })
  @MinLength(2, {
    message: '长度不能小于2',
  })
  @MaxLength(10, {
    message: '长度不能超过10',
  })
  name: string;

  // @IsInt({ message: '必须的整数' })
  // age: string;
}
