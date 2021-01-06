/*
 * @Author: linzq
 * @Date: 2020-12-29 15:20:11
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:33:57
 * @Description:
 */
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from 'src/entity/user.entity';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
    this.authService = authService;
  }

  async validate(username: string, password: string): Promise<UserEntity> {
    const user = await this.authService.validate(username, password);
    if (user) return user;
    else throw new UnauthorizedException('incorrect username or password');
  }
}
