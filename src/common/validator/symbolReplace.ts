/**
 * @Author: linzq
 * @Date: 2021-05-26 23:43:43
 * @LastEditors: linzq
 * @LastEditTime: 2021-05-26 23:59:42
 * @Description: %_特殊符号替换
 */
import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class ReplaceConstraint {
  validate(string: string, args: ValidationArguments) {
    const res = string.replace(/%/gi, `\\%`).replace(/_/gi, `\\_`);
    console.log(res);
    return false;
  }
}

export function Replace(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: ReplaceConstraint,
    });
  };
}
