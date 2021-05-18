import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, HasMany } from 'sequelize-typescript';
import { captcha } from './captcha';
import { onlineToken } from './onlineToken';

interface userAttributes {
  id: string;
  userName: string;
  password: string;
  isCancel: number;
  createTime: Date;
  updateTime: Date;
  deleteTime?: Date;
}

@Table({ tableName: 'user', timestamps: true, comment: '\u7528\u6237\u4FE1\u606F\u8868' })
export class user extends Model<userAttributes, userAttributes> implements userAttributes {
  @Column({ primaryKey: true, type: DataType.STRING(64), comment: '\u4E3B\u952E' })
  @Index({ name: 'id', using: 'BTREE', order: 'ASC', unique: true })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id!: string;

  @Column({ field: 'user_name', type: DataType.STRING(255), comment: '\u7528\u6237\u540D\uFF0C\u552F\u4E00' })
  @Index({ name: 'user_name', using: 'BTREE', order: 'ASC', unique: true })
  userName!: string;

  @Column({ type: DataType.STRING(255), comment: '\u5BC6\u7801' })
  password!: string;

  @Column({
    field: 'is_cancel',
    type: DataType.TINYINT,
    comment: '\u72B6\u6001 0\uFF1A\u6709\u6548\uFF0C1\uFF1A\u5931\u6548',
  })
  isCancel!: number;

  @Column({ field: 'create_time', type: DataType.DATE })
  createTime!: Date;

  @Column({ field: 'update_time', type: DataType.DATE })
  updateTime!: Date;

  @Column({ field: 'delete_time', allowNull: true, type: DataType.DATE })
  deleteTime?: Date;

  @HasMany(() => captcha, { sourceKey: 'id' })
  captchas?: captcha[];

  @HasMany(() => onlineToken, { sourceKey: 'id' })
  onlineTokens?: onlineToken[];
}
