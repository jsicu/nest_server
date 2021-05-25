/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-25 21:16:07
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { TransformInterceptor } from './common/interceptors/transform.interceptor';
import { ValidationPipe } from './common/pipes/validate.pipe';

import { logger } from './common/middleware/logger.middleware';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 设置全局前缀
  app.setGlobalPrefix('/nest');

  // 全局管道 入参校验
  app.useGlobalPipes(new ValidationPipe());
  // 全局过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 中间件
  app.use(logger);

  await app.listen(3000);
}
bootstrap();
