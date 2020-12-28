import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // 自定义 getVersion 方法:
  @Get('/version')
  getVersion(): any {
    return this.appService.getVersion();
  }
}
