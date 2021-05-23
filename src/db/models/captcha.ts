import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey, BelongsTo } from "sequelize-typescript";
import { user } from "./user";

interface captchaAttributes {
    id?: number;
    userId: string;
    type: number;
    checkJson: string;
    uuId: string;
    createTime: Date;
    updateTime: Date;
    deleteTime?: Date;
}

@Table({ tableName: "captcha", timestamps: true, comment: "\u9A8C\u8BC1\u4FE1\u606F\u8868" })
export class captcha extends Model<captchaAttributes, captchaAttributes> implements captchaAttributes {
    @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
    @Index({ name: "PRIMARY", using: "BTREE", order: "ASC", unique: true })
    id?: number;
    @ForeignKey(() => user)
    @Column({ field: "user_id", type: DataType.STRING(64), comment: "\u7528\u6237\u8868\u4E3B\u952E\uFF0C\u672A\u9650\u5236\u4E00\u4EBA\u4E00\u5730\u767B\u5F55" })
    @Index({ name: "user_id", using: "BTREE", order: "ASC", unique: false })
    userId!: string;
    @Column({ type: DataType.INTEGER, comment: "\u9A8C\u8BC1\u7C7B\u578B\uFF0C0\uFF1A\u6ED1\u5757\u62FC\u56FE\uFF1B1\uFF1A\u70B9\u51FB\u9A8C\u8BC1" })
    type!: number;
    @Column({ field: "check_json", type: DataType.STRING(255), comment: "\u9A8C\u8BC1\u6570\u636E" })
    checkJson!: string;
    @Column({ field: "uu_id", type: DataType.STRING(255), comment: "\u552F\u4E00\u9A8C\u8BC1" })
    uuId!: string;
    @Column({ field: "create_time", type: DataType.DATE })
    createTime!: Date;
    @Column({ field: "update_time", type: DataType.DATE })
    updateTime!: Date;
    @Column({ field: "delete_time", allowNull: true, type: DataType.DATE })
    deleteTime?: Date;
    @BelongsTo(() => user)
    user?: user;
}