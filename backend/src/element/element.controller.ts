import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { ElementService } from './element.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateElementDto } from './dto/cread-element.dto';

@Controller('element')
@UseGuards(JwtAuthGuard)
export class ElementController {
  constructor(private readonly elementService: ElementService) {}

  @Get()
  getAllElements(@Req() req) {
    const userId = req.user.iss;
    return this.elementService.getAllElements(userId);
  }

  @Post()
  createElement(@Body() body: CreateElementDto) {
    return this.elementService.createElement(body);
  }
}
