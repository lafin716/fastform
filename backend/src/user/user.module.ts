import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schema/user.schema';
import { JwtStrategy } from 'src/auth/jwt/jwt.strategy';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  controllers: [UserController],
  providers: [UserService, JwtStrategy],
  exports: [UserService, MongooseModule],
})
export class UserModule {}
