/*
 * @Author: linzq
 * @Date: 2021-01-06 16:10:18
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-06 16:21:51
 * @Description: 加解密服务
 */
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';
import cryptokey from 'src/utils/encryption';

import NodeRSA from 'node-rsa';

// const secret = 'token'; // 密钥，不能丢
const secret = cryptokey.exportKey('public');

// 加密必要参数
const ALGORITHM = 'aes-192-cbc';
const PASSWORD = '用于生成密钥的密码';
// 改为使用异步的 `crypto.scrypt()`。
const key = crypto.scryptSync(PASSWORD, '盐值', 24);
// 使用 `crypto.randomBytes()` 生成随机的 iv 而不是此处显示的静态的 iv。
const iv = Buffer.alloc(16, 16); // 初始化向量。

@Injectable()
export class CryptoService {
  private readonly jwtService: JwtService;

  constructor(jwtService: JwtService) {
    this.jwtService = jwtService;
  }

  /**
   * token生成
   * @param Object userInfo
   */
  getToken(userInfo: any): string {
    // 创建token并导出
    const token = this.jwtService.sign(userInfo);
    // const sql = `INSERT INTO online_token (token, user_id) VALUES ('${token}', '${userInfo.id}')`; // 存入token
    // token加密
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
}
