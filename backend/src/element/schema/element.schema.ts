import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const options: SchemaOptions = {
  collection: 'elements',
  timestamps: { createdAt: 'createdAt', updatedAt: 'updatedAt' },
  _id: true,
};
@Schema(options)
export class Element extends Document {
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
  createdAt?: Date;
  updatedAt?: Date;
}

export const ElementSchema = SchemaFactory.createForClass(Element);
