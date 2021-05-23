/**
 * @Author: linzq
 * @Date: 2021-05-19 14:20:15
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-21 14:13:31
 * @Description:
 */
// src/utils/log4js.ts
import * as Path from 'path';
import * as Log4js from 'log4js';
import * as StackTrace from 'stacktrace-js';
import config from '/@/config/log4jsConfig';

// 注入配置
Log4js.configure(config);

// 格式化日志文本 加上日志头尾和换行方便查看 ==>  普通日志、请求日志、响应日志、操作日志、错误日志
const formatText = {
  request: function (req, resTime = 0) {
    let logText = '';
    const method = req.method;
    // 访问方法
    logText += 'request method: ' + method + '\n';
    // 请求原始地址
    logText += 'request originalUrl: ' + req.originalUrl + '\n';
    // 客户端ip
    logText += 'request client ip: ' + req.ip + '\n';
    // 请求参数
    logText += 'request query: ' + '\n  ' + JSON.stringify(req.query) + '\n';
    logText += 'request body: ' + '\n  ' + JSON.stringify(req.body) + '\n';
    // 服务器响应时间
    logText += 'response time: ' + resTime + '\n';
    return logText;
  },
  handle: function (info: any) {
    let logText = '';
    // 响应日志开始
    logText += '***************info log start ***************' + '\n';
    // 响应内容
    logText += 'handle info detail: ' + '\n' + JSON.stringify(info).replace(/\\n/g, '\n') + '\n';
    // 响应日志结束
    logText += '*************** info log end ***************' + '\n';
    return logText;
  },
  response: function (req: any, body: Record<string, unknown>) {
    let logText = '';
    // 响应日志开始
    logText += '*************** response log start ***************' + '\n';
    // 添加请求日志
    logText += formatText.request(req);
    // 响应内容
    logText += 'response body: ' + '\n  ' + JSON.stringify(body) + '\n';
    // 响应日志结束
    logText += '*************** response log end ***************' + '\n';
    return logText;
  },
  error: function (err: Record<string, unknown>, ctx: any) {
    let logText = '';
    // 错误信息开始
    logText += '*************** error log start ***************' + '\n';
    // 添加请求日志
    logText += formatText.request(ctx);
    //错误内容
    logText += 'err: ' + '\n  ' + JSON.stringify(err) + '\n';
    // 错误信息结束
    logText += '*************** error log end ***************' + '\n';
    return logText;
  },
};

// 实例化
const logger = Log4js.getLogger();

export class Logger {
  static log(...args) {
    logger.info(Logger.getStackTrace(), ...args);
  }

  /**
   * @description: 正常的返回数据记录
   * @param any req
   * @param Object body
   */
  static response(req: any, body: any) {
    const resLogger = Log4js.getLogger('resLogger');
    resLogger.info(Logger.getStackTrace(), formatText.response(req, body));
  }

  /**
   * @description: 错误日志
   * @param Object err 错误信息
   * @param any ctx 请求体
   */
  static error(err: Record<string, unknown>, ctx: any) {
    const errorLogger = Log4js.getLogger('errorLogger');
    errorLogger.error(Logger.getStackTrace(), formatText.error(err, ctx));
  }

  // 预留
  static handle(...args) {
    const handleLogger = Log4js.getLogger('handleLogger');
    handleLogger.info(Logger.getStackTrace(), ...args);
  }

  // 日志追踪，可以追溯到哪个文件、第几行第几列
  static getStackTrace(deep = 2): string {
    const stackList: StackTrace.StackFrame[] = StackTrace.getSync();
    const stackInfo: StackTrace.StackFrame = stackList[deep];

    const lineNumber: number = stackInfo.lineNumber;
    const columnNumber: number = stackInfo.columnNumber;
    const fileName: string = stackInfo.fileName;
    const basename: string = Path.basename(fileName);
    return `${basename}(line: ${lineNumber}, column: ${columnNumber}): \n`;
  }
}
