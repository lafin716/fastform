import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { UserLicense, UserLicenseSchema } from './user.license.schema';

// 스키마 옵션
const options: SchemaOptions = {
  collection: 'users',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  _id: true,
};

@Schema(options)
export class User extends Document {
  _id?: Types.ObjectId;
  @Prop({ required: true })
  userName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop({ type: UserLicenseSchema })
  license: UserLicense;
  @Prop()
  roles: string[];
  createdAt?: Date;
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
