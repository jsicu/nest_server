import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

interface dictionaryAttributes {
  id?: number;
  dictId: number;
  label: string;
  value: number;
  createTime: Date;
  updateTime: Date;
  deleteTime?: Date;
}

@Table({ tableName: 'dictionary', timestamps: true, comment: '\u5B57\u5178\u8868' })
export class dictionary extends Model<dictionaryAttributes, dictionaryAttributes> implements dictionaryAttributes {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ field: 'dict_id', type: DataType.INTEGER, comment: '\u5B57\u5178id' })
  dictId!: number;

  @Column({ type: DataType.STRING(255), comment: '\u5B57\u5178\u540D\u79F0' })
  label!: string;

  @Column({ type: DataType.INTEGER, comment: '\u503C' })
  value!: number;

  @Column({ field: 'create_time', type: DataType.DATE })
  createTime!: Date;

  @Column({ field: 'update_time', type: DataType.DATE })
  updateTime!: Date;

  @Column({ field: 'delete_time', allowNull: true, type: DataType.DATE })
  deleteTime?: Date;
}
