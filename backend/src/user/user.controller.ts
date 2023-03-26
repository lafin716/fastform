import { Controller, Get } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Controller('user')
export class UserController {
  constructor(private readonly configService: ConfigService) {}
  @Get()
  hello(): string {
    console.log(this.configService.get('NODE_ENV'));
    console.log(this.configService.get('MONGO_URI'));
    console.log(this.configService.get('TEST'));
    return 'Hello World!';
  }
}
