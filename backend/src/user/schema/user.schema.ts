import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Document, Types } from 'mongoose';

export type UserDocument = User & Document;

const options: SchemaOptions = {
  collection: 'users',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  _id: true,
};
@Schema(options)
export class User {
  _id?: Types.ObjectId;
  @Prop({ required: true })
  userName: string;
  @Prop({ required: true, unique: true })
  email: string;
  @Prop({ required: true })
  password: string;
  @Prop()
  admin: boolean;
  @Prop({ default: Date.now, type: mongoose.Schema.Types.Date })
  createdAt?: Date;
  @Prop({ default: Date.now, type: mongoose.Schema.Types.Date })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
