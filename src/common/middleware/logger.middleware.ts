/**
 * @Author: linzq
 * @Date: 2021-05-19 14:31:00
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-19 23:34:38
 * @Description: 日志中间件
 */
import { Request, Response, NextFunction } from 'express';

import { Logger } from '/@/utils/log4js';

// 函数式中间件 未使用
export function logger(req: Request, res: Response, next: NextFunction) {
  const { method, path } = req;
  console.log(`${method} ${path}`);
  next();
  // const logFormat = `Method: ${req.method} \n Request original url: ${req.originalUrl} \n IP: ${req.ip} \n Status code: ${code} \n`;
  // Logger.handle(logFormat);
}
