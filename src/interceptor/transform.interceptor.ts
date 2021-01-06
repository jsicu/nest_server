/*
 * @Author: linzq
 * @Date: 2020-12-31 14:41:45
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:35:10
 * @Description: 统一封装请求返回
 */

import {
  Injectable,
  NestInterceptor,
  CallHandler,
  ExecutionContext,
} from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import log4js from 'src/utils/log4js';

interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T>
  implements NestInterceptor<T, Response<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler<T>,
  ): Observable<Response<T>> {
    const ctx = context.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    return next.handle().pipe(
      map((data) => {
        log4js.info(request, data);
        return {
          data,
          code: 0,
          message: '请求成功',
        };
      }),
    );
  }
}
