import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from "sequelize-typescript";

interface routeAttributes {
    id?: number;
    name: string;
    alias: string;
    icon?: string;
    status: number;
    createTime: Date;
    updateTime: Date;
    deleteTime?: Date;
}

@Table({ tableName: "route", timestamps: true, comment: "\u8DEF\u7531\u8868" })
export class route extends Model<routeAttributes, routeAttributes> implements routeAttributes {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    id?: number;
    @Column({ type: DataType.STRING(64), comment: "\u8DEF\u7531\u540D\u79F0" })
    name!: string;
    @Column({ type: DataType.STRING(255), comment: "\u8DEF\u7531\u5730\u5740" })
    alias!: string;
    @Column({ allowNull: true, type: DataType.STRING(64), comment: "\u56FE\u6807" })
    icon?: string;
    @Column({ type: DataType.TINYINT, comment: "\u8DEF\u7531\u72B6\u6001\u30020\uFF1A\u5931\u6548\uFF1B1\uFF1A\u6709\u6548" })
    status!: number;
    @Column({ field: "create_time", type: DataType.DATE })
    createTime!: Date;
    @Column({ field: "update_time", type: DataType.DATE })
    updateTime!: Date;
    @Column({ field: "delete_time", allowNull: true, type: DataType.DATE })
    deleteTime?: Date;
}