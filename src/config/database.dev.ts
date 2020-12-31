/*
 * @Author: linzq
 * @Date: 2020-12-30 10:18:06
 * @LastEditors: linzq
 * @LastEditTime: 2020-12-31 17:02:08
 * @Description:
 */
/**
 * @description 开发环境数据库配置
 */
import { join } from 'path';

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nest_server',
  entities: [join(__dirname, '../', 'entity/**.entity{.ts,.js}')],
  synchronize: true,
};
