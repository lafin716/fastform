import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Payload } from './jwt.payload';

const fromAuthCookie = function () {
  return function (request) {
    let token = null;
    if (request && request.cookies) {
      token = request.cookies['Authorization'];
    }
    return token;
  };
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // jwtFromRequest: fromAuthCookie(),
      secretOrKey: process.env.JWT_SECRET_KEY,
      ignoreExpiration: false,
    });
  }

  async validate(payload: Payload) {
    console.log('payload', payload);

    if (!payload.email) {
      console.log('접근오류');
      throw new UnauthorizedException('접근오류');
    }

    return payload;
  }
}
