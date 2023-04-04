import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UserModule } from './user/user.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule, getModelToken } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ElementModule } from './element/element.module';
import { Model } from 'mongoose';
import { User } from './user/schema/user.schema';
import { Element } from './element/schema/element.schema';
import { AdminModule } from '@adminjs/nestjs';
import { FormModule } from './form/form.module';
import AdminJS from 'adminjs';
import * as AdminJSMongoose from '@adminjs/mongoose';

AdminJS.registerAdapter(AdminJSMongoose);

const DEFAULT_ADMIN = {
  email: 'admin@example.com',
  password: 'password',
};

const authenticate = async (email: string, password: string) => {
  if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
    return Promise.resolve(DEFAULT_ADMIN);
  }
  return null;
};

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env.${process.env.NODE_ENV}`],
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGO_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }),
      inject: [ConfigService],
    }),
    AdminModule.createAdminAsync({
      imports: [UserModule, ElementModule],
      inject: [getModelToken(User.name), getModelToken(Element.name)],
      useFactory: (userModel: Model<User>, elementModel: Model<Element>) => ({
        adminJsOptions: {
          rootPath: '/admin',
          resources: [{ resource: userModel }, { resource: elementModel }],
        },
        auth: {
          authenticate,
          cookieName: 'lafin',
          cookiePassword: '1234',
        },
      }),
    }),
    UserModule,
    AuthModule,
    ElementModule,
    FormModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
