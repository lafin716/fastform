import { Controller, Get } from '@nestjs/common';
import { ElementService } from './element.service';

@Controller('element')
UseGuards(JwtAuthGuard)
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Get()
  getAllElements(@Req() req) { 
    const userId = req.user.id;
    return this.elementService.getAllElements(userId);
  }
}
