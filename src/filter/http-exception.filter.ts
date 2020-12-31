/*
 * @Author: linzq
 * @Date: 2020-12-31 15:10:45
 * @LastEditors: linzq
 * @LastEditTime: 2020-12-31 17:29:14
 * @Description: 统一请求错误返回体
 */

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    // console.log(exception.getStatus());

    const message = exception.message;
    Logger.log('错误提示', message);
    const errorResponse = {
      url: request.originalUrl, // 错误的url地址
      code: 1, // 自定义code
      message,
    };
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;
    // 设置返回的状态码、请求头、发送错误信息
    console.log(status);
    response.status(status);
    response.header('Content-Type', 'application/json; charset=utf-8');
    response.send(errorResponse);
  }
}
