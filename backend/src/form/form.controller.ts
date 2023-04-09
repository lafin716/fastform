import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { FormService } from './form.service';
import { JwtAuthGuard } from 'src/auth/jwt/jwt.guard';
import { CreateFormDto } from './dto/create-form.dto';

@Controller('form')
@UseGuards(JwtAuthGuard)
export class FormController {
  constructor(private readonly formService: FormService) {}

  @Get()
  getFormList(@Req() req) {
    const userId = req.user.iss;
    return this.formService.getAllForms(userId);
  }

  @Get(':formId')
  getForm(@Param('formId') formId: string, @Req() req) {
    const userId = req.user.iss;
    return this.formService.getForm(userId, formId);
  }

  @Post()
  createForm(@Req() req, @Body() form: CreateFormDto) {
    const userId = req.user.iss;
    return this.formService.createForm(userId, form);
  }
}
