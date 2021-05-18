import { Model, Table, Column, DataType, Index, Sequelize, ForeignKey } from 'sequelize-typescript';

interface scenicSpotAttributes {
  id?: number;
  destId: string;
  destName: string;
  destEnName?: string;
  navigationBar?: string;
  realCity?: string;
  city?: string;
  photos?: string;
  score?: string;
  ranking?: string;
  recommendPlaytime?: string;
  commentNum?: string;
  lat?: string;
  lng?: string;
  travelBookNum?: string;
  summaryDescription?: string;
  address?: string;
  phone?: string;
  website?: string;
  openingHours?: string;
  touristsNum?: number;
  touristSeason?: string;
  trafficGuide?: string;
  tips?: string;
  timeReference?: string;
  url?: string;
  grade_2015?: string;
  grade_2016?: string;
  grade_2017?: string;
  grade_2018?: string;
  grade_2019?: string;
  grade_2020?: string;
  type?: number;
  todayTouristsNum?: number;
  playTime?: number;
  yearTourists_2015?: number;
  yearTourists_2016?: number;
  yearTourists_2017?: number;
  yearTourists_2018?: number;
  yearTourists_2019?: number;
  yearTourists_2020?: number;
  yearTourists_2021?: number;
  createTime: Date;
  updateTime: Date;
  deleteTime?: Date;
}

@Table({ tableName: 'scenic_spot', timestamps: true, comment: '\u666F\u533A\u4FE1\u606F\u8868' })
export class scenicSpot extends Model<scenicSpotAttributes, scenicSpotAttributes> implements scenicSpotAttributes {
  @Column({ primaryKey: true, autoIncrement: true, type: DataType.INTEGER })
  @Index({ name: 'PRIMARY', using: 'BTREE', order: 'ASC', unique: true })
  id?: number;

  @Column({ field: 'dest_id', type: DataType.STRING(64), comment: '\u666F\u533Aid' })
  @Index({ name: 'dest_id', using: 'BTREE', order: 'ASC', unique: true })
  destId!: string;

  @Column({ field: 'dest_name', type: DataType.STRING(255), comment: '\u666F\u533A\u540D\u79F0' })
  destName!: string;

  @Column({
    field: 'dest_en_name',
    allowNull: true,
    type: DataType.STRING(255),
    comment: '\u666F\u533A\u82F1\u6587\u540D\u79F0',
  })
  destEnName?: string;

  @Column({ field: 'navigation_bar', allowNull: true, type: DataType.STRING(255) })
  navigationBar?: string;

  @Column({ field: 'real_city', allowNull: true, type: DataType.STRING(255) })
  realCity?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  city?: string;

  @Column({ allowNull: true, type: DataType.STRING(1024) })
  photos?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  score?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  ranking?: string;

  @Column({ field: 'recommend_playtime', allowNull: true, type: DataType.STRING(255) })
  recommendPlaytime?: string;

  @Column({ field: 'comment_num', allowNull: true, type: DataType.STRING(255) })
  commentNum?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  lat?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  lng?: string;

  @Column({ field: 'travel_book_num', allowNull: true, type: DataType.STRING(255) })
  travelBookNum?: string;

  @Column({ field: 'summary_description', allowNull: true, type: DataType.STRING })
  summaryDescription?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  address?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  phone?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  website?: string;

  @Column({ field: 'opening_hours', allowNull: true, type: DataType.STRING(1024) })
  openingHours?: string;

  @Column({ field: 'tourists_num', allowNull: true, type: DataType.INTEGER, comment: '\u5728\u56ED\u6E38\u5BA2' })
  touristsNum?: number;

  @Column({ field: 'tourist_season', allowNull: true, type: DataType.STRING(2047) })
  touristSeason?: string;

  @Column({ field: 'traffic_guide', allowNull: true, type: DataType.STRING })
  trafficGuide?: string;

  @Column({ allowNull: true, type: DataType.STRING(1024) })
  tips?: string;

  @Column({ field: 'time_reference', allowNull: true, type: DataType.STRING(255) })
  timeReference?: string;

  @Column({ allowNull: true, type: DataType.STRING(255) })
  url?: string;

  @Column({
    allowNull: true,
    type: DataType.STRING(1),
    comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7\uFF0C\u6570\u5B57\u51E0\u4EE3\u8868\u51E0\u7EA7',
  })
  grade_2015?: string;

  @Column({ allowNull: true, type: DataType.STRING(1), comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7' })
  grade_2016?: string;

  @Column({ allowNull: true, type: DataType.STRING(1), comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7' })
  grade_2017?: string;

  @Column({ allowNull: true, type: DataType.STRING(1), comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7' })
  grade_2018?: string;

  @Column({ allowNull: true, type: DataType.STRING(1), comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7' })
  grade_2019?: string;

  @Column({ allowNull: true, type: DataType.STRING(1), comment: '\u5E74\u5EA6\u666F\u533A\u7B49\u7EA7' })
  grade_2020?: string;

  @Column({
    allowNull: true,
    type: DataType.INTEGER,
    comment:
      '\u666F\u533A\u7C7B\u522B\uFF1A1:\u6587\u535A\u9662\u9986;2:\u5BFA\u5E99\u89C2\u5802; 3:\u65C5\u6E38\u5EA6\u5047\u533A; 4:\u81EA\u7136\u4FDD\u62A4\u533A; 5:\u4E3B\u9898\u516C\u56ED; 6:\u68EE\u6797\u516C\u56ED; 7:\u5730\u8D28\u516C\u56ED; 8:\u6E38\u4E50\u56ED; 9:\u52A8\u7269\u56ED; 0:\u690D\u7269\u56ED',
  })
  type?: number;

  @Column({
    field: 'today_tourists_num',
    allowNull: true,
    type: DataType.INTEGER,
    comment: '\u4ECA\u65E5\u5165\u56ED\u6E38\u5BA2',
  })
  todayTouristsNum?: number;

  @Column({
    field: 'play_time',
    allowNull: true,
    type: DataType.INTEGER,
    comment: '\u5E73\u5747\u6E38\u73A9\u65F6\u95F4\uFF1A\u5206\u949F',
  })
  playTime?: number;

  @Column({ field: 'year_tourists_2015', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2015?: number;

  @Column({ field: 'year_tourists_2016', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2016?: number;

  @Column({ field: 'year_tourists_2017', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2017?: number;

  @Column({ field: 'year_tourists_2018', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2018?: number;

  @Column({ field: 'year_tourists_2019', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2019?: number;

  @Column({ field: 'year_tourists_2020', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2020?: number;

  @Column({ field: 'year_tourists_2021', allowNull: true, type: DataType.INTEGER, comment: '\u5E74\u6E38\u5BA2\u6570' })
  yearTourists_2021?: number;

  @Column({ field: 'create_time', type: DataType.DATE })
  createTime!: Date;

  @Column({ field: 'update_time', type: DataType.DATE })
  updateTime!: Date;

  @Column({ field: 'delete_time', allowNull: true, type: DataType.DATE })
  deleteTime?: Date;
}
