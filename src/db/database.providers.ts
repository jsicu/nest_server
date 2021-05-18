/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-18 22:42:10
 * @Description:
 */
/*
 * @Author: linzq
 * @Date: 2021-05-17 19:47:07
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-18 17:31:25
 * @Description:
 */

import { Sequelize } from 'sequelize-typescript';
import * as models from './models/index';
import db from '../config/database';

// 导入所有模型
const allModels = [];
for (const key in models) {
  if (Object.prototype.hasOwnProperty.call(models, key)) {
    const element = models[key];
    allModels.push(element);
  }
}

export const databaseProviders = {
  provide: 'SEQUELIZE',
  useFactory: async () => {
    const sequelize = new Sequelize(db.mysql.database, db.mysql.user, db.mysql.password || null, {
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
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
    sequelize.addModels(allModels);
    // await sequelize.sync();
    return sequelize;
  },
};
