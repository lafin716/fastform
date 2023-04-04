import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find/:email')
  findUser(@Param('email') email: string) {
    const user = this.userService.getUser(email);
    if (user['result']) {
      user['user'] = null;
      return user;
    }
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param('id') id: string) {
    const user = this.userService.getUserById(id);
    return user;
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getAllUsers(): Promise<User[]> {
    const users = this.userService.getAllUsers();
    return users;
  }

  @Post()
  createUser(@Body() registerData: RegisterUserDto) {
    console.log('controller', registerData);

    return this.userService.registerUser(registerData);
  }
}
