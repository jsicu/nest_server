/*
 * @Author: linzq
 * @Date: 2021-01-05 17:59:24
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-06 15:59:02
 * @Description:
 */
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

const NodeRSA = require('node-rsa'); // rsa加密
// const secret = 'token'; // 密钥，不能丢
const secret = new NodeRSA({ b: 512 }).exportKey('public');

// 加密必要参数
const ALGORITHM = 'aes-192-cbc';
const PASSWORD = '用于生成密钥的密码';
// 改为使用异步的 `crypto.scrypt()`。
const key = crypto.scryptSync(PASSWORD, '盐值', 24);
// 使用 `crypto.randomBytes()` 生成随机的 iv 而不是此处显示的静态的 iv。
const iv = Buffer.alloc(16, 16); // 初始化向量。

/**
 * @publicApi
 */
interface cryptoService {
  getToken(info: any): string;
  decryptToken();
  checkToken(): boolean;
  decryptRSAToken();
}

export class CryptoService implements cryptoService {
  private readonly jwtService: JwtService;

  constructor() {
    this.jwtService = new JwtService(secret);
  }
  /**
   * token生成
   * @param Object userInfo
   */
  getToken(userInfo) {
    // 创建token并导出
    const token = this.jwtService.sign(userInfo, secret);
    // const sql = `INSERT INTO online_token (token, user_id) VALUES ('${token}', '${userInfo.id}')`; // 存入token
    // token加密
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }
  decryptToken() {
    return secret;
  }
  checkToken() {
    return true;
  }
  decryptRSAToken() {
    return '1';
  }
}
