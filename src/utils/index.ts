/**
 * @Author: linzq
 * @Date: 2021-05-27 22:21:47
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-27 22:55:47
 * @Description: 公共方法
 */
/**
 * @publicApi
 * @description: 特殊符号替换
 * @param object obj 需要替换%_的对象
 * @return obj 替换完成的对象
 */
export default function Replace(obj): any {
  for (const key in obj) {
    const reg = RegExp(/%|_/);
    if (typeof obj[key] === 'string' && obj[key].match(reg)) {
      obj[key] = obj[key].replace(/%/gi, `\\%`).replace(/_/gi, `\\_`);
    }
  }
  return obj;
}
