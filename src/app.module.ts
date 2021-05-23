/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-20 10:21:09
 * @Description:
 */
import { Module, MiddlewareConsumer, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import * as models from '/@/db/models/index';
import { user } from '/#model/user';
// import { LoggerMiddleware } from './common/middleware/logger.middleware';
import { ScheduleService } from './modules/schedule/schedule.service';
import { ScheduleModule } from './modules/schedule/schedule.module';

// 导入所有模型
const allModels = [];
for (const key in models) {
  if (Object.prototype.hasOwnProperty.call(models, key)) {
    const element = models[key];
    allModels.push(element);
  }
}
@Module({
  imports: [
    SequelizeModule.forFeature([user]),
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'koa2_server',
      models: allModels,
      logging: true, // 关闭打印
      // autoLoadModels: true,
      // synchronize: true,
    }),
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService, ScheduleService],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     // 为特定路添加中间件
//     consumer.apply(LoggerMiddleware).forRoutes(AppController);
//   }
// }
