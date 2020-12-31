/*
 * @Author: linzq
 * @Date: 2020-12-31 10:46:47
 * @LastEditors: linzq
 * @LastEditTime: 2020-12-31 16:43:51
 * @Description:
 */
/**
 * @author: linzq
 * @date: 2020/12/31
 * @description: token加解密中间件
 */
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class cryptoMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Request...');
    next();
  }
}
