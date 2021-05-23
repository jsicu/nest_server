import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo } from "sequelize-typescript";
import { user } from "./user";

interface onlineTokenAttributes {
    id?: number;
    token: string;
    userId: string;
    deleteTime?: Date;
    createTime: Date;
    updateTime: Date;
}

@Table({ tableName: "online_token", timestamps: true })
export class onlineToken extends Model<onlineTokenAttributes, onlineTokenAttributes> implements onlineTokenAttributes {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    id?: number;
    @Column({ type: DataType.STRING(255), comment: "\u7528\u6237token" })
    token!: string;
    @ForeignKey(() => user)
    @Column({ field: "user_id", type: DataType.STRING(64), comment: "\u7528\u6237\u4E3B\u952E" })
    @Index({ name: "user_id", using: "BTREE", order: "ASC", unique: false })
    userId!: string;
    @Column({ field: "delete_time", allowNull: true, type: DataType.DATE })
    deleteTime?: Date;
    @Column({ field: "create_time", type: DataType.DATE })
    createTime!: Date;
    @Column({ field: "update_time", type: DataType.DATE })
    updateTime!: Date;
    @BelongsTo(() => user)
    user?: user;
}