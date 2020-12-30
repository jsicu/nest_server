import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from '../entity/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    this.userService = userService;
  }

  @Get()
  async list(): Promise<Array<UserEntity>> {
    return this.userService.listAll();
  }
}
