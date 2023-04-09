import { Controller, Get } from '@nestjs/common';

@Controller('form')
export class FormController {
  @Get()
  getFormList() {
    console.log(1);
  }
}
