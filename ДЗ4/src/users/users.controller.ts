import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user-dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('api')
  async create(@Body() user: CreateUserDto) {
    return this.usersService.create(user);
  }
}
