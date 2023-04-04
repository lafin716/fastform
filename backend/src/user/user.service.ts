import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schema/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from './dto/create-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { LicenseSet } from './type/user.types';
import { RoleSet } from './type/user.role.types';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  /**
   * 전체 유저 정보를 가져온다.
   * @returns 전체 유저 정보
   */
  async getAllUsers(): Promise<any[]> {
    try {
      const result = await this.userModel.find().lean();
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  /**
   * 유저 고유번호로 유저 정보를 가져온다.
   * @param id 유저 고유번호
   * @returns 유저 정보
   */
  async getUserById(id: string): Promise<any> {
    try {
      const user = await this.userModel.findById(id).lean();

      if (!user) {
        return {
          result: false,
          message: '유저를 찾을 수 없습니다.',
        };
      }

      return {
        result: true,
        data: user,
      };
    } catch (error) {
      return {
        result: false,
        message: '유저를 찾을 수 없습니다.',
        error: error,
      };
    }
  }

  async isExistsEmail(email: string): Promise<boolean> {
    try {
      const user = await this.userModel.findOne({ email }).lean();
      if (user) {
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  /**
   * 유저 이메일로 유저 정보를 가져온다.
   * @param email 유저 이메일
   * @returns 유저 정보
   */
  async getUser(email: string): Promise<any> {
    try {
      const user = await this.userModel.findOne({ email }).lean();
      console.log('user', user);

      if (!user) {
        return {
          result: false,
          message: '유저를 찾을 수 없습니다.',
        };
      }

      return {
        result: true,
        data: user,
      };
    } catch (error) {
      console.error(error);
      return {
        result: false,
        message: '일시적인 오류가 발생하였습니다.',
        error: error,
      };
    }
  }

  /**
   * 유저 회원가입
   * @param userData 회원가입 정보
   * @returns 가입된 유저 정보
   */
  async registerUser(userData: RegisterUserDto): Promise<any> {
    // 비밀번호 일치 여부 확인
    if (userData.password !== userData.passwordConfirm) {
      return {
        result: false,
        message: '비밀번호가 일치하지 않습니다.',
      };
    }

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
      license: LicenseSet.FREE,
      roles: RoleSet.USER,
    });

    // 유저 저장 전에 비밀번호를 해싱처리한다.
    user.password = await this.encryptPassword(user.password);
    const result = await this.userModel.create(user);
    console.log('result', result);

    return result;
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
      console.log('result', result);

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
