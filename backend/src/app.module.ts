import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { LoginModule } from './login/login.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [LoginModule, UserModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
