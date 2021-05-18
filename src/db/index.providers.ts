/*
 * @Author: linzq
 * @Date: 2021-05-18 10:15:10
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-18 17:25:17
 * @Description: 统一提供者
 */
import * as models from './models/index';

// 模型提供程序
const modelProviders: Record<string, any> = {};

for (const key in models) {
  if (Object.prototype.hasOwnProperty.call(models, key)) {
    const element = models[key];
    modelProviders[`${key}Providers`] = {
      provide: `${key}Repository`,
      useValue: element,
    };
  }
}
export { modelProviders };
