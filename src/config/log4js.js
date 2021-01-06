/*
 * @Author: linzq
 * @Date: 2020-12-31 16:23:19
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 17:09:06
 * @Description: log4js的配置文件
 */
const path = require('path');

// 日志根目录
const baseLogPath = path.resolve(__dirname, '../../logs');

/* 报错输出日志 */
// 错误日志目录、文件名、输出完整路径
const errorPath = '/error';
const errorFileName = 'error';
const errorLogPath = baseLogPath + errorPath + '/' + errorFileName;

/* 请求数据得到响应时输出响应日志 */
// 响应日志目录、文件名、输出完整路径
const responsePath = '/response';
const responseFileName = 'response';
const responseLogPath = baseLogPath + responsePath + '/' + responseFileName;

/* 操作数据库进行增删改等敏感操作记录日志 */
// 操作日志目录、文件名、输出完整路径
const handlePath = '/handle';
const handleFileName = 'handle';
const handleLogPath = baseLogPath + handlePath + '/' + handleFileName;

/* console记录日志 */
// log、error等
const consolePath = '/console';
const consoleFileName = 'console';
const consoleLoggerPath = baseLogPath + consolePath + '/' + consoleFileName;

module.exports = {
  // 日志格式等设置
  appenders: {
    'rule-console': { type: 'console' },
    errorLogger: {
      type: 'dateFile',
      filename: errorLogPath,
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 10485760,
      numBackups: 3,
      path: errorPath,
      daysToKeep: 30,
    },
    resLogger: {
      type: 'dateFile',
      filename: responseLogPath,
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 10485760, // 日志文件大小最大1M，单位字节
      numBackups: 3,
      path: responsePath,
      daysToKeep: 30,
    },
    handleLogger: {
      type: 'dateFile',
      filename: handleLogPath,
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 10485760,
      numBackups: 3,
      path: handlePath,
      daysToKeep: 30,
    },
    consoleLogger: {
      type: 'dateFile',
      filename: consoleLoggerPath,
      pattern: 'yyyyMMdd.log',
      alwaysIncludePattern: true,
      encoding: 'utf-8',
      maxLogSize: 10485760,
      numBackups: 3,
      path: consolePath,
      daysToKeep: 30,
    },
  },
  // 供外部调用的名称和对应设置定义
  categories: {
    default: { appenders: ['rule-console'], level: 'ALL' },
    resLogger: { appenders: ['resLogger'], level: 'INFO' },
    errorLogger: { appenders: ['errorLogger'], level: 'ERROR' },
    handleLogger: { appenders: ['handleLogger'], level: 'ALL' },
    consoleLogger: { appenders: ['consoleLogger'], level: 'INFO' },
  },
  baseLogPath: baseLogPath,
};
