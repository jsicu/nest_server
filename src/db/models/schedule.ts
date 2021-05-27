import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo } from "sequelize-typescript";
import { user } from "./user";

interface scheduleAttributes {
    id: string;
    edition: string;
    userId: string;
    status: number;
    type: number;
    description: string;
    completedNum?: number;
    total?: number;
    funDescription?: string;
    completedIds?: string;
    createTime: Date;
    updateTime: Date;
    deleteTime?: Date;
}

@Table({ tableName: "schedule", timestamps: true })
export class schedule extends Model<scheduleAttributes, scheduleAttributes> implements scheduleAttributes {
    @Column({ primaryKey: true, type: DataType.STRING(64) })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    id!: string;
    @Column({ type: DataType.STRING(32) })
    edition!: string;
    @ForeignKey(() => user)
    @Column({ field: "user_id", type: DataType.STRING(64), comment: "\u7528\u6237id" })
    @Index({ name: "schedule_ibfk_1", using: "BTREE", order: "ASC", unique: false })
    userId!: string;
    @Column({ type: DataType.INTEGER, comment: "\u72B6\u6001\u540D\u79F0\uFF0C\u52A8\u6001\u5B57\u5178\uFF0C\u6700\u591A6\u79CD" })
    status!: number;
    @Column({ type: DataType.INTEGER, comment: "\u7C7B\u578B\u540D\u79F0\uFF0C\u52A8\u6001\u5B57\u5178\uFF0C\u9700\u8981\u5305\u62EC\u989C\u8272\uFF0C\u6700\u591A10\u79CD" })
    type!: number;
    @Column({ type: DataType.STRING(255), comment: "\u4EFB\u52A1\u7B80\u8FF0" })
    description!: string;
    @Column({ field: "completed_num", allowNull: true, type: DataType.INTEGER, comment: "\u5DF2\u5B8C\u6210\u529F\u80FD\u6570\u91CF\uFF0C\u6700\u59279" })
    completedNum?: number;
    @Column({ allowNull: true, type: DataType.INTEGER, comment: "\u603B\u529F\u80FD\u6570\u91CF\uFF0C\u6700\u59279" })
    total?: number;
    @Column({ field: "fun_description", allowNull: true, type: DataType.STRING(500), comment: "\u529F\u80FD\u8BF4\u660E\uFF0C\u9017\u53F7\u9694\u5F00" })
    funDescription?: string;
    @Column({ field: "completed_ids", allowNull: true, type: DataType.STRING(64), comment: "\u5B8C\u6210\u529F\u80FD\u7684id\uFF0C\u9017\u53F7\u9694\u5F00" })
    completedIds?: string;
    @Column({ field: "create_time", type: DataType.DATE })
    createTime!: Date;
    @Column({ field: "update_time", type: DataType.DATE })
    updateTime!: Date;
    @Column({ field: "delete_time", allowNull: true, type: DataType.DATE })
    deleteTime?: Date;
    @BelongsTo(() => user)
    user?: user;
}