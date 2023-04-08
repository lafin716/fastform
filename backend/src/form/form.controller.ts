import { Controller } from '@nestjs/common';

@Controller('form')
export class FormController {
  
  getForm() {
    console.log(1);
  }
}
