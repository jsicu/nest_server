/*
 * @Author: linzq
 * @Date: 2020-12-28 11:16:35
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-04 18:23:03
 * @Description:
 */
import { Module, RequestMethod, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm'; // 引入数据库的及配置文件
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CatsModule } from './cats/cats.module';
import customConfig from './config';

// 中间件
import { cryptoMiddleware } from './middleware/token.middleware';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...customConfig,
    }),
    AuthModule,
    UserModule,
    // CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    // TODO: 鉴权可以实现
    consumer
      // .apply(cryptoMiddleware) // 暂未使用
      // .forRoutes({ path: '*', method: RequestMethod.ALL })
  }
}
