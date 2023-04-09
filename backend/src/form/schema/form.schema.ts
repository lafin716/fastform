import { Prop, Schema, SchemaFactory, SchemaOptions } from '@nestjs/mongoose';
import { Types } from 'mongoose';

const options: SchemaOptions = {
  collection: 'forms',
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  _id: true,
};

@Schema(options)
export class Form extends Document {
  _id?: Types.ObjectId;
  @Prop({ required: true, unique: false })
  userId: Types.ObjectId;

  createdAt?: Date;
  updatedAt?: Date;
}

export const FormSchema = SchemaFactory.createForClass(Form);
