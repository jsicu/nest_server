/**
 * @Author: linzq
 * @Date: 2021-05-17 20:14:37
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-19 13:46:41
 * @Description:
 */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { user } from '/#model/user';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(user)
    private userModel: typeof user
  ) {}
  getHello(): string {
    return 'Hello World!';
  }

  // async findOne(): Promise<any | undefined> {
  //   const sql = "INSERT INTO `user` (`id`,`user_name`,`password`) VALUES (1,'2','2')"; // 一段平淡无奇的 SQL 查询语句
  //   try {
  //     // const res = await this.userRepository.findAll<user>();
  //     const res = await sequelize.query(sql, {
  //       type: Sequelize.QueryTypes.INSERT, // 查询方式
  //       raw: true, // 是否使用数组组装的方式展示结果
  //       logging: true, // 是否将 SQL 语句打印到控制台，默认为 true
  //     });
  //     const user = res; // 查出来的结果是一个数组，我们只取第一个。
  //     console.log(user);
  //     return {
  //       code: 200, // 返回状态码，可自定义
  //       data: {
  //         user,
  //       },
  //       msg: 'Success',
  //     };
  //   } catch (error) {
  //     return {
  //       code: 503,
  //       msg: `Service error: ${error}`,
  //     };
  //   }
  // }

  async findAll(): Promise<user[]> {
    return this.userModel.findAll();
  }

  async save(): Promise<any | undefined> {
    const sql = `
      SELECT
        *
      FROM
        user
    `; // 一段平淡无奇的 SQL 查询语句
    const data = {
      id: 1,
      password: '2',
      userName: '1',
    };
    try {
      // const res = await this.userModel.findAll();
      const res = await this.userModel.destroy({ where: { id: '1' } });
      // const res = await this.userModel.findAll({ where: { id: 1 } });
      const user = res; // 查出来的结果是一个数组，我们只取第一个。
      // const user = {}; // 查出来的结果是一个数组，我们只取第一个。
      return { user };
    } catch (error) {
      return {
        code: 503,
        msg: `Service error: ${error}`,
      };
    }
  }
}
