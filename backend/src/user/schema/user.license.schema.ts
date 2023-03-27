import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class UserLicense extends Document {
  @Prop({ required: true })
  type: string;
  @Prop({ required: true })
  status: string;
  @Prop()
  startedAt?: Date;
  @Prop()
  expiredAt?: Date;
}

export const UserLicenseSchema = SchemaFactory.createForClass(UserLicense);
