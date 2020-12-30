/**
 * @description 开发环境数据库配置
 */
import { join } from 'path';

const pwd = join(__dirname, '../');
console.log(pwd + 'entity/**.entity{.ts,.js}');

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
