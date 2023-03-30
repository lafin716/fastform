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
    return this.elementModel.find().where('userId').equals(userId);
  }

  getElement(userId: string, elementId: string) {
    return this.elementModel
      .findOne()
      .where('userId')
      .equals(userId)
      .where('_id')
      .equals(elementId);
  }

  createElement(userId: string, dto: CreateElementDto) {
    console.log(userId);
    console.log(dto);

    const element = new this.elementModel({
      userId,
      ...dto,
    });

    console.log('element', element);

    return this.elementModel.create(element);
  }

  updateElement(userId: string, elementId: string, dto: CreateElementDto) {
    return this.elementModel
      .findOneAndUpdate(
        {
          userId,
          _id: elementId,
        },
        {
          ...dto,
        },
      )
      .lean();
  }
}
