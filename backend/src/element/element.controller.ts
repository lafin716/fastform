import { Controller, Get } from '@nestjs/common';
import { ElementService } from './element.service';

@Controller('element')
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Get()
  getAllElements() {
    return this.elementService.getAllElements();
  }
}
