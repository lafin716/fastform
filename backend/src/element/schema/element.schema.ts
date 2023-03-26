import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import mongoose, { Types } from 'mongoose';

export type ElementDocument = Element & Document;

const options: SchemaOptions = {
  collection: 'elements',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  _id: true,
};
@Schema(options)
export class Element {
  _id?: Types.ObjectId;
  @Prop({ required: true })
  userId: string;
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

export const ElementSchema = SchemaFactory.createForClass(Element);
