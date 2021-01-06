/*
 * @Author: linzq
 * @Date: 2020-12-29 14:09:18
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-05 09:52:18
 * @Description:
 */
import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { TokenEntity } from './token.entity';
import key from 'src/utils/encryption';

@Controller('security')
export class AuthController {
  constructor(private readonly authService: AuthService) {
    this.authService = authService;
  }
  @UseGuards(AuthGuard('local'))
  @Post('/login')
  async login(@Request() request): Promise<TokenEntity> {
    return this.authService.login(request.user);
  }

  /**
   * 加密公钥
   */
  @Get('/publicKey')
  async publicKey() {
    return key.exportKey('public');
    // return this.authService.login();
  }
}
