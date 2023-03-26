import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' } })
export class User {
  @Prop({ required: true })
  userName: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true })
  password: string;

  @Prop({ default: Date.now, type: mongoose.Schema.Types.Date })
  createdAt?: Date;
  @Prop({ default: Date.now, type: mongoose.Schema.Types.Date })
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
