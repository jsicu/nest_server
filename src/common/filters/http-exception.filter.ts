/**
 * @Author: linzq
 * @Date: 2021-05-19 11:13:07
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-19 13:50:26
 * @Description: 统一异常拦截器
 */
import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus();
    console.log(exception);
    const exceptionRes: any = exception.getResponse();
    const { error, message } = exceptionRes;

    response.status(status).json({
      code: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      error,
      message,
    });
  }
}
