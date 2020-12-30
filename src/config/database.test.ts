/**
 * @description 测试环境数据库配置
 */
import { join } from 'path';
export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'nest_server',
  entities: [join(__dirname, '../', 'src/entity/**.entity{.ts,.js}')],
  synchronize: true,
};
