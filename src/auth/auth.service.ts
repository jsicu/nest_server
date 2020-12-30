import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserEntity } from '../entity/user.entity';
import { JwtService } from '@nestjs/jwt';
import { TokenEntity } from './token.entity';

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
    return {
      token: this.jwtService.sign({ name, sub: id }),
    };
  }
}
