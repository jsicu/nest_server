/**
 * @Author: linzq
 * @Date: 2021-05-19 11:34:08
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-19 22:49:43
 * @Description:
 */
import { Injectable, NestInterceptor, CallHandler, ExecutionContext } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Logger } from '/@/utils/log4js';

interface Response<T> {
  data: T;
}
@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
  intercept(context: ExecutionContext, next: CallHandler<T>): Observable<Response<T>> {
    const request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map(data => {
        Logger.response(request, data);
        return {
          data,
          code: 0,
          message: '请求成功',
        };
      })
    );
  }
}
