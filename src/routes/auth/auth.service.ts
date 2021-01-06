/*
 * @Author: linzq
 * @Date: 2020-12-29 14:08:26
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-06 15:59:48
 * @Description:
 */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserEntity } from 'src/entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenEntity } from './token.entity';
import { CryptoService } from '../../utils/crypto.service';

const cryptoService = new CryptoService();

@Injectable()
export class AuthService {
  private readonly userService: UserService;
  private readonly jwtService: JwtService;
  constructor(userService: UserService, jwtService: JwtService) {
    this.userService = userService;
    this.jwtService = jwtService;
  }
  /**
   * validate user name and password
   * @param name
   * @param password
   */
  async validate(name: string, password: string): Promise<UserEntity> {
    const user = await this.userService.find(name);
    // 注：实际中的密码处理应通过加密措施
    if (user && user.password === password) {
      const { password, ...userInfo } = user;
      return userInfo;
    } else {
      return null;
    }
  }

  /**
   * user login
   * @param user
   */
  async login(user: UserEntity): Promise<TokenEntity> {
    const { id, name } = user;

    // setNum(10);
    // Test('a', 'b');
    // const encrypted = cryptoService.getToken(111);
    // console.log(cryptoService.decryptToken());
    // try {
    //   console.log(this.cryptoService.getToken(111));
    // } catch (error) {
    //   throw new HttpException('您无权登录', HttpStatus.FORBIDDEN);
    // }
    // console.log(2);
    return {
      token: this.jwtService.sign({ name, id }),
    };
  }
}
