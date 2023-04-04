import { IsString } from 'class-validator';

export class RegisterUserDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly passwordConfirm: string;
}
