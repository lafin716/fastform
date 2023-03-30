import { IsString } from 'class-validator';

export class CreateElementDto {
  @IsString()
  type: string;
  @IsString()
  label: string;
  data?: any;
}
