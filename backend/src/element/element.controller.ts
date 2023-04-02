import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
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
  getElement(@Param('id') id: string, @Req() req) {
    const userId = req.user.iss;
    return this.elementService.getElement(userId, id);
  }

  @Post()
  createElement(@Body() elementData: CreateElementDto, @Req() req) {
    const userId = req.user.iss;
    return this.elementService.createElement(userId, elementData);
  }

  @Post(':id')
  updateElement(
    @Body() elementData: CreateElementDto,
    @Param('id') elementId: string,
    @Req() req,
  ) {
    const userId = req.user.iss;
    return this.elementService.updateElement(userId, elementId, elementData);
  }

  @Delete(':id')
  deleteElement(@Param('id') id: string, @Req() req) {
    const userId = req.user.iss;
    return this.elementService.deleteElement(userId, id);
  }
}
