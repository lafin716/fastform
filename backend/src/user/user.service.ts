import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async getAllUsers(): Promise<User[]> {
    try {
      const result = await this.userModel.find().lean();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(email: string): Promise<User> {
    try {
      const result = await this.userModel.findOne({ email }).lean();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(userData: CreateUserDto): Promise<any> {
    try {
      // 이메일 중복 확인
      const foundUser = await this.userModel.findOne({ email: userData.email });
      if (foundUser) {
        return {
          result: false,
          message: '이미 존재하는 이메일입니다.',
        };
      }

      // dto를 user 모델에 맞게 변환한다.
      const user = new this.userModel({
        userName: userData.userName,
        email: userData.email,
        password: userData.password,
        license: {
          type: userData.licenseType,
          status: userData.licenseStatus,
        },
        roles: userData.roles,
      });

      // 유저 저장 전에 비밀번호를 해싱처리한다.
      user.password = await this.encryptPassword(user.password);
      const result = await this.userModel.create(user);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 비밀번호 해싱 함수
   * @param password 비밀번호 평문
   * @returns 암호화된 비밀번호
   */
  private async encryptPassword(password: string): Promise<string> {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  }

  /**
   * 비밀번호 일치 여부 확인 함수
   * @param plainPassword 비밀번호 평문
   * @param hashedPassword 암호화된 비밀번호
   * @returns 비밀번호 일치 여부
   */
  async comparePassword(
    plainPassword: string,
    hashedPassword: string,
  ): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
}
