/**
 * @Author: linzq
 * @Date: 2021-05-19 11:13:07
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-25 21:23:31
 * @Description: 统一异常拦截器
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { Logger } from '/@/utils/log4js';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest(); // 请求体
    const status = exception.getStatus();
    // console.log(exception);
    const exceptionRes: any = exception.getResponse();
    const { error, message } = exceptionRes;

    response.status(status).json({
      code: 1,
      message,
      status,
      error,
      path: request.url,
    });
    // 打印错误日志
    Logger.error(exceptionRes, request);
  }
}
