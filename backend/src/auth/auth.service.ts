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
    const isAuthed = await this.userService.comparePassword(
      password,
      user.password,
    );
    console.log('isAuthed', isAuthed);

    if (!isAuthed) {
      return {
        result: false,
        message: '비밀번호가 다릅니다.',
      };
    }
    const payload = { iss: user.email, sub: user._id, roles: user.roles };
    const refreshPayload = { iss: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      refresh_token: this.jwtService.sign(refreshPayload, { expiresIn: '30d' }),
    };
  }
}
