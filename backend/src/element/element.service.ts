import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateElementDto } from './dto/create-element.dto';
import { Element } from './schema/element.schema';

@Injectable()
export class ElementService {
  constructor(
    @InjectModel(Element.name) private elementModel: Model<Element>,
  ) {}

  getAllElements(userId: string) {
    console.log(userId);
    return this.elementModel.find().where('_id').equals(userId);
  }

  createElement(userId: string, dto: CreateElementDto) {
    const user = new this.elementModel({
      ...dto,
      userId,
    });

    return this.elementModel.create(user);
  }
}
