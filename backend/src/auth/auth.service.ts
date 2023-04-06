import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { Payload } from './jwt/jwt.payload';
import { log } from 'console';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   * 유저 id 가져오기
   * @param user Request 객체 안에 있는 인증된 유저 정보
   * @returns 유저 id
   */
  getUserId(user: any) {
    return user._id;
  }

  /**
   * 토큰으로 유저 정보 가져오기
   * @param token jwt 토큰
   * @returns 유저 정보
   */
  async getUserInfo(token: string) {
    const payload = this.jwtService.decode(token) as Payload;
    const user = await this.userService.getUserById(payload.iss);
    delete user.data.password;
    return user.data;
  }

  /**
   * 토큰 유효성 검사
   * @param token jwt 토큰
   * @returns 토큰 유효 여부
   */
  verifyToken(token: string) {
    const isVerify = this.jwtService.verify(token);
    if (!isVerify) {
      return {
        result: false,
        message: '토큰이 유효하지 않습니다.',
        error: isVerify,
      };
    }

    return {
      result: true,
      message: '토큰이 유효합니다.',
      token: isVerify,
    };
  }

  /**
   * 토큰 발급
   * @param email 이메일
   * @param password 비밀번호
   * @returns access_token, refresh_token
   */
  async getAccessToken(email: string, password: string) {
    const userEntity = await this.userService.getUser(email);
    if (userEntity.result === false) {
      return {
        result: false,
        message: '이메일이나 비밀번호가 다릅니다. 다시 시도해주세요.',
      };
    }

    const user = userEntity.data;
    const isAuthed = await this.userService.comparePassword(
      password,
      user.password,
    );

    if (!isAuthed) {
      return {
        result: false,
        message: '이메일이나 비밀번호가 다릅니다. 다시 시도해주세요.',
      };
    }

    return {
      result: true,
      id: user._id,
      email: user.email,
      name: user.name,
      access_token: this.generateToken(user._id, user.email, user.roles),
      refresh_token: this.generateToken(
        user._id,
        user.email,
        user.roles,
        '30d',
      ),
    };
  }

  /**
   * 리프레시 토큰으로 access_token 발급
   * @param refreshToken 리프레시 토큰
   * @returns 리프레시 토큰이 유효하면 access_token, refresh_token을 반환
   */
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
      result: true,
      id: user._id,
      email: user.email,
      name: user.name,
      access_token: this.generateToken(user._id, user.email, user.roles),
      refresh_token: this.generateToken(
        user._id,
        user.email,
        user.roles,
        '30d',
      ),
    };
  }

  /**
   * JWT 토큰 생성
   * @param id 유저 id
   * @param email 유저 이메일
   * @param roles 유저 권한
   * @param expiredIn 토근 만료 시간
   * @returns jwt 토큰
   */
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
