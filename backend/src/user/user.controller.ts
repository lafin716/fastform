import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './schema/user.schema';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('find/:email')
  async findUser(@Param('email') email: string) {
    const result = await this.userService.isExistsEmail(email);
    console.log(result);

    if (!result) {
      return {
        result,
        message: '유저를 찾을 수 없습니다.',
      };
    }
    return {
      result,
      message: '이메일로 비밀번호 재설정 링크를 보냈습니다.',
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  getUser(@Param('id') id: string, @Req() req) {
    const userId = req.user.iss;
    if (userId !== id) {
      return {
        result: false,
        message: '유저를 찾을 수 없습니다.',
      };
    }
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
