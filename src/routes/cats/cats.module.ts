import { Module } from '@nestjs/common';
import { UserController } from './cats.controller';
import { UserService } from './cats.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UserController],
  providers: [UserService],
})
export class CatsModule {}
