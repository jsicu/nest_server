/*
 * @Author: linzq
 * @Date: 2021-01-05 10:30:30
 * @LastEditors: linzq
 * @LastEditTime: 2021-01-06 15:03:09
 * @Description: token二次处理
 */
import { JwtService } from '@nestjs/jwt';
import * as crypto from 'crypto';

import NodeRSA from 'node-rsa';

// const secret = 'token'; // 密钥，不能丢
const secret = new NodeRSA({ b: 512 }).exportKey('public');

// 加密必要参数
const ALGORITHM = 'aes-192-cbc';
const PASSWORD = '用于生成密钥的密码';
// 改为使用异步的 `crypto.scrypt()`。
const key = crypto.scryptSync(PASSWORD, '盐值', 24);
// 使用 `crypto.randomBytes()` 生成随机的 iv 而不是此处显示的静态的 iv。
const iv = Buffer.alloc(16, 16); // 初始化向量。

const hash = crypto
  .createHmac('sha256', secret)
  .update('I love cupcakes')
  .digest('hex');
console.log(hash);

class tokenCrypto {
  constructor() {
    this.jwtService = JwtService;
  }

  /**
   * token生成
   * @param Object userInfo
   */
  getToken(userInfo) {
    // 创建token并导出
    const token = this.jwtService.sign(userInfo);
    // const sql = `INSERT INTO online_token (token, user_id) VALUES ('${token}', '${userInfo.id}')`; // 存入token
    // token加密
    const cipher = crypto.createCipheriv(ALGORITHM, key, iv);
    let encrypted = cipher.update(token, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
  }

  // /**
  //  * token解密
  //  * @param String 再加密后的tokens
  //  */
  // decryptToken(tokens) {
  //   // 解密
  //   const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  //   // 使用相同的算法、密钥和 iv 进行加密
  //   let decrypted = decipher.update(tokens, 'hex', 'utf8');
  //   try {
  //     decrypted += decipher.final('utf8');
  //   } catch (error) {
  //     return false;
  //   }
  //   // decrypted += decipher.final('utf8');
  //   return decrypted;
  // }
  // /**
  //  * token验证
  //  * @param String tokens
  //  */
  // checkToken(tokens) {
  //   tokens = tokens.replace(/\s+/g, ''); // 空格替换
  //   // 解密
  //   const decipher = crypto.createDecipheriv(ALGORITHM, key, iv);
  //   // 使用相同的算法、密钥和 iv 进行加密
  //   let decrypted = decipher.update(tokens, 'hex', 'utf8');
  //   try {
  //     decrypted += decipher.final('utf8');
  //   } catch (error) {
  //     return false;
  //   }
  //   // decrypted += decipher.final('utf8');
  //   const decoded = this.jwtService.decode(decrypted, secret);
  //   return true;
  //   // return !(decoded && decoded.exp <= new Date().getTime() / 1000);
  //   // }
  // }

  // /**
  //  * token解码
  //  * @param String tokens
  //  */
  // decryptRSAToken(tokens) {
  //   tokens = tokens.replace(/\s+/g, ''); // 空格替换, 超级账号换行导致会有空格
  //   // return this.jwtService.decode(this.decryptToken(tokens), secret);
  // }
  showName() {
    console.log(1234);
  }
}

exports.CryptoService = tokenCrypto;
