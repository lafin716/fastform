import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.userService.getUser(email);
    if (user.password !== password) {
      return {
        result: false,
        message: '비밀번호가 다릅니다.',
      };
    }
    const role = user.admin ? 'admin' : 'user';
    const payload = { email: user.email, sub: user._id, role: role };
    const refreshPayload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(refreshPayload),
    };
  }
}
