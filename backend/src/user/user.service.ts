import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './schema/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

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

  async createUser(user: User): Promise<any> {
    try {
      const result = await this.userModel.create(user);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}
