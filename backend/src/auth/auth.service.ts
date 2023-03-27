import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { timestamp } from 'rxjs';
import { UserService } from 'src/user/user.service';
import { Payload } from './jwt/jwt.payload';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 토큰 발급
   * @param email 이메일
   * @param password 비밀번호
   * @returns access_token, refresh_token
   */
  async getAccessToken(email: string, password: string) {
    const result = await this.userService.getUser(email);
    const user = result.data;
    const isAuthed = await this.userService.comparePassword(
      password,
      user.password,
    );

    if (!isAuthed) {
      return {
        result: false,
        message: '비밀번호가 다릅니다.',
      };
    }

    return {
      access_token: this.generateToken(user._id, user.email, user.roles),
      refresh_token: this.generateToken(
        user._id,
        user.email,
        user.roles,
        '30d',
      ),
    };
  }

  async refreshToken(refreshToken: string) {
    const tokenInfo = this.jwtService.verify(refreshToken);
    const result = await this.userService.getUser(tokenInfo.email);
    const user = result.data;
    if (!user) {
      return {
        result: false,
        message: '유저를 찾을 수 없습니다.',
      };
    }

    return {
      access_token: this.generateToken(user._id, user.email, user.roles),
      refresh_token: this.generateToken(
        user._id,
        user.email,
        user.roles,
        '30d',
      ),
    };
  }

  private generateToken(
    id: string,
    email: string,
    roles: string[],
    expiredIn?: string,
  ) {
    const payload: Payload = {
      iss: id,
      email: email,
      roles: roles,
    };

    if (expiredIn) {
      return this.jwtService.sign(payload, { expiresIn: expiredIn });
    }

    return this.jwtService.sign(payload);
  }
}
