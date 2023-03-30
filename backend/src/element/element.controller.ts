import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ElementService } from './element.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateElementDto } from './dto/create-element.dto';

@Controller('element')
@UseGuards(JwtAuthGuard)
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Get()
  getAllElements(@Req() req) {
    const userId = req.user.iss;
    return this.elementService.getAllElements(userId);
  }

  @Get(':id')
  getElement(@Req() req) {
    const userId = req.user.iss;
    const elementId = req.params.id;
    return this.elementService.getElement(userId, elementId);
  }

  @Post()
  createElement(@Body() body: CreateElementDto, @Req() req) {
    console.log(req.user);

    const userId = req.user.iss;
    return this.elementService.createElement(userId, body);
  }

  @Post(':id')
  updateElement(@Body() body: CreateElementDto, @Req() req) {
    const userId = req.user.iss;
    const elementId = req.params.id;
    return this.elementService.updateElement(userId, elementId, body);
  }
}
