/**
 * @Author: linzq
 * @Date: 2021-05-20 10:20:24
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-26 23:55:06
 * @Description: 进度看板路由
 */
import { Body, Controller, Delete, Get, Param, Query, Post, Put } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { TaskDto, NewTaskDto } from './schedule.dto';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Get()
  funList() {
    return this.scheduleService.funList();
  }
  // 任务列表
  @Get('task')
  taskList(@Query() params: TaskDto) {
    console.log(params);
    return this.scheduleService.taskList(params);
  }
  @Post('task')
  newTask(@Body() taskObj: NewTaskDto) {
    return this.scheduleService.newTask(taskObj);
  }
  @Put('task')
  changeTask() {
    return this.scheduleService.changeTask();
  }
  @Delete('task')
  deleteTask() {
    return this.scheduleService.deleteTask();
  }
}
