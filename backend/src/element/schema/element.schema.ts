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
  type: string;
  @Prop({ required: true })
  label: string;
  @Prop({ type: Object })
  data?: object;
  createdAt?: Date;
  updatedAt?: Date;
}

export const ElementSchema = SchemaFactory.createForClass(Element);
