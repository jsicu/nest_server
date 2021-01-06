/*
 * @Author: linzq
 * @Date: 2020-12-29 14:05:24
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:36:40
 * @Description:
 */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
