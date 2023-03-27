import { IsString } from 'class-validator';

export class RequestTokenDto {
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
}
