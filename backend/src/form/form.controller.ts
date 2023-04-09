import { Controller, Get } from '@nestjs/common';

@Controller('form')
export class FormController {
  @Get()
  getForm() {
    console.log(1);
  }
}
