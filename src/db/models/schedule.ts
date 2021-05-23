import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo } from "sequelize-typescript";
import { user } from "./user";

interface scheduleAttributes {
    id: number;
    userId: string;
    status: number;
    type: number;
    description: string;
    completedNum: number;
    total: number;
    createTime: Date;
    updateTime: Date;
    deleteTime?: Date;
}

@Table({ tableName: "schedule", timestamps: true })
export class schedule extends Model<scheduleAttributes, scheduleAttributes> implements scheduleAttributes {
    @Column({ primaryKey: true, type: DataType.INTEGER })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    id!: number;
    @ForeignKey(() => user)
    @Column({ field: "user_id", type: DataType.STRING(64), comment: "\u7528\u6237id" })
    @Index({ name: "schedule_ibfk_1", using: "BTREE", order: "ASC", unique: false })
    userId!: string;
    @Column({ type: DataType.INTEGER, comment: "\u72B6\u6001\u540D\u79F0\uFF0C\u52A8\u6001\u5B57\u5178\uFF0C\u6700\u591A6\u79CD" })
    status!: number;
    @Column({ type: DataType.INTEGER, comment: "\u7C7B\u578B\u540D\u79F0\uFF0C\u52A8\u6001\u5B57\u5178\uFF0C\u9700\u8981\u5305\u62EC\u989C\u8272\uFF0C\u6700\u591A10\u79CD" })
    type!: number;
    @Column({ type: DataType.STRING(255) })
    description!: string;
    @Column({ field: "completed_num", type: DataType.INTEGER, comment: "\u5DF2\u5B8C\u6210\u529F\u80FD\u6570\u91CF\uFF0C\u6700\u5927999" })
    completedNum!: number;
    @Column({ type: DataType.INTEGER, comment: "\u603B\u529F\u80FD\u6570\u91CF\uFF0C\u6700\u5927999" })
    total!: number;
    @Column({ field: "create_time", type: DataType.DATE })
    createTime!: Date;
    @Column({ field: "update_time", type: DataType.DATE })
    updateTime!: Date;
    @Column({ field: "delete_time", allowNull: true, type: DataType.DATE })
    deleteTime?: Date;
    @BelongsTo(() => user)
    user?: user;
}