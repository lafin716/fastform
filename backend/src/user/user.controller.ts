import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() userData: CreateUserDto) {
    const user: User = {
      userName: userData.userName,
      email: userData.email,
      password: userData.password,
    };

    return this.userService.createUser(user);
  }
}
