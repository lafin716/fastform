import { Body, Controller, Headers, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestTokenDto } from './dto/auth.token.dto';
import { RequestRefreshDto } from './dto/auth.refresh.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('verify')
  async verifyToken(@Headers('Authorization') token: string) {
    const accessToken = token.split(' ')[1];
    try {
      const result = this.authService.verifyToken(accessToken);
      if (!result.result) {
        return result;
      }

      return {
        ...result,
        user: await this.authService.getUserInfo(accessToken),
      };
    } catch (e) {
      return {
        result: false,
        message: '토큰이 유효하지 않습니다.',
        error: e,
      };
    }
  }

  @Post('token')
  async getTokens(@Body() body: RequestTokenDto) {
    return this.authService.getAccessToken(body.email, body.password);
  }

  @Post('refresh')
  async refreshTokens(
    @Body() body: RequestRefreshDto,
    @Headers('Authorization') token: string,
  ) {
    // const accessToken = token.split(' ')[1];
    return this.authService.refreshToken(body.refreshToken);
  }
}
