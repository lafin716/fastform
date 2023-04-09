import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Form } from './schema/form.schema';
import { Model } from 'mongoose';
import { CreateFormDto } from './dto/create-form.dto';

@Injectable()
export class FormService {
  constructor(@InjectModel(Form.name) private formModel: Model<Form>) {}

  getAllForms(userId: string) {
    return this.formModel.find().where('userId').equals(userId);
  }

  getForm(userId: string, formId: string) {
    return this.formModel
      .findOne()
      .where('userId')
      .equals(userId)
      .where('_id')
      .equals(formId);
  }

  createForm(userId: string, form: CreateFormDto) {
    return this.formModel.create({ ...form, userId });
  }
}
