/**
 * @Author: linzq
 * @Date: 2021-05-25 20:35:26
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-27 00:00:02
 * @Description:
 */

import { IsString, IsEmpty, IsOptional, IsUUID, IsNumberString, MinLength, MaxLength } from 'class-validator';
// import { Replace } from 'validator/symbolReplace';
// 任务筛选
export class TaskDto {
  @IsOptional()
  @IsNumberString()
  readonly status?: string | number;

  @IsOptional()
  @IsNumberString()
  readonly type?: string | number;

  @IsOptional()
  @IsString({ message: '必须的字符串类型' })
  @MaxLength(14, {
    message: '简述不能多于14个字符',
  })
  readonly description?: string;
}

// 任务新增
export class NewTaskDto {
  @IsString({ message: '必须的字符串类型' })
  @IsUUID('all')
  userId: string;

  @IsNumberString()
  status: string | number;

  @IsNumberString()
  type: string | number;

  @IsString({ message: '必须的字符串类型' })
  @MaxLength(14, {
    message: '简述不能多于14个字符',
  })
  description: string;

  @IsNumberString()
  completedNum: string | number;

  @IsNumberString()
  total: string | number;
}
