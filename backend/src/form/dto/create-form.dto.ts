import { IsOptional, IsString } from 'class-validator';

export class CreateFormDto {
  @IsString()
  name: string;
  @IsOptional()
  description: string;
  form: string;
}
