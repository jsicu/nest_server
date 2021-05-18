/*
 * @Author: linzq
 * @Date: 2021-05-17 14:44:42
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-17 16:10:08
 * @Description:
 */
import { Sequelize } from 'sequelize-typescript';
import db from '../config/database';

const sequelize = new Sequelize(db.mysql.database, db.mysql.user, db.mysql.password || null, {
  // 自定义主机; 默认值: localhost
  host: db.mysql.host, // 数据库地址
  // 自定义端口; 默认值: 3306
  port: db.mysql.port,
  dialect: 'mysql',
  pool: {
    max: db.mysql.connectionLimit, // 连接池中最大连接数量
    min: 0, // 连接池中最小连接数量
    acquire: 30000,
    idle: 10000, // 如果一个线程 10 秒钟内没有被使用过的话，那么就释放线程
  },
  timezone: '+08:00', // 东八时区
  logging: false, // 关闭打印
  // 解决中文输入问题
  define: {
    timestamps: true, // 是否自动创建时间字段， 默认会自动创建createdAt、updatedAt
    paranoid: true, // 是否自动创建deletedAt字段
    createdAt: 'createTime', // 重命名字段
    updatedAt: 'updateTime',
    deletedAt: 'deleteTime',
    underscored: true, // 开启下划线命名方式，默认是驼峰命名
    freezeTableName: true, // 禁止修改表名
    charset: 'utf8mb4',
  },
});

// 测试数据库链接
sequelize
  .authenticate()
  .then(() => {
    console.log('数据库连接成功');
  })
  .catch((err: any) => {
    // 数据库连接失败时打印输出
    console.error(err);
    throw err;
  });

export default sequelize;
