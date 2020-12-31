/**
 * @author: linzq
 * @date: 2020/12/31
 * @description: 加解密key对象
 */
const NodeRSA = require('node-rsa'); // rsa加密
const key = new NodeRSA({ b: 512 });
key.setOptions({ encryptionScheme: 'pkcs1' });
// console.log(key);
export default key;
