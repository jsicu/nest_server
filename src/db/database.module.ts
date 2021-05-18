/*
 * @Author: linzq
 * @Date: 2021-05-17 20:29:38
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-18 17:29:59
 * @Description:
 */
import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';

@Module({
  providers: [databaseProviders],
  exports: [databaseProviders],
})
export class DatabaseModule {}
