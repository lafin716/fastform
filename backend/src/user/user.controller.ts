import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';

@Controller('user')
@UseGuards(JwtAuthGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':email')
  getUser(@Param('email') email: string): Promise<User> {
    const user = this.userService.getUser(email);
    return user;
  }

  @Get()
  getAllUsers(): Promise<User[]> {
    const users = this.userService.getAllUsers();
    return users;
  }

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
