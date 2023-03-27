import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateElementDto } from './dto/cread-element.dto';

@Injectable()
export class ElementService {
  constructor(
    @InjectModel(Element.name) private elementModel: Model<Element>,
  ) {}

  getAllElements() {
    return [];
  }

  createElement(dto: CreateElementDto) {
    this.elementModel.create(dto);
    return [];
  }
}
