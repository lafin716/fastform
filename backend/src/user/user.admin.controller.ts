import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { Roles } from 'src/auth/role/role.decorator';
import { RolesGuard } from 'src/auth/role/roles.guard';

@Controller('admin/user')
@UseGuards(JwtAuthGuard, RolesGuard)
@Roles('admin')
export class AdminUserController {
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
    console.log('controller', userData);

    return this.userService.createUser(userData);
  }
}
