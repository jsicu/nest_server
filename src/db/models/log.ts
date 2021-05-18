import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

interface logAttributes {
  id?: number;
  type: number;
  ip: string;
  userId?: string;
  method?: string;
  originalUrl?: string;
  token: string;
  point?: string;
  address?: string;
  deleteTime?: Date;
  createTime: Date;
  updateTime: Date;
}

@Table({ tableName: 'log', timestamps: true })
export class log extends Model<logAttributes, logAttributes> implements logAttributes {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ type: DataType.INTEGER, comment: '\u65E5\u5FD7\u7C7B\u578B' })
  type!: number;

  @Column({ type: DataType.STRING(255), comment: '\u8BBF\u95EE\u5730\u5740' })
  ip!: string;

  @Column({ field: 'user_id', allowNull: true, type: DataType.STRING(255), comment: '\u7528\u6237id' })
  userId?: string;

  @Column({ allowNull: true, type: DataType.STRING(10), comment: '\u8BF7\u6C42\u65B9\u6CD5' })
  method?: string;

  @Column({ field: 'original_url', allowNull: true, type: DataType.STRING(255), comment: '\u8BF7\u6C42\u63A5\u53E3' })
  originalUrl?: string;

  @Column({ type: DataType.STRING(500), comment: 'token' })
  token!: string;

  @Column({ allowNull: true, type: DataType.STRING(50), comment: '\u5750\u6807' })
  point?: string;

  @Column({ allowNull: true, type: DataType.STRING(50), comment: '\u6240\u5728\u5730' })
  address?: string;

  @Column({ field: 'delete_time', allowNull: true, type: DataType.DATE })
  deleteTime?: Date;

  @Column({ field: 'create_time', type: DataType.DATE })
  createTime!: Date;

  @Column({ field: 'update_time', type: DataType.DATE })
  updateTime!: Date;
}
