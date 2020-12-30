import { Column, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password?: string;

  @Column()
  create_time?: Date;

  @Column()
  update_time?: Date;

  @Column()
  is_cancel?: number;
}
