import { IsBoolean, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsBoolean()
  readonly admin?: boolean;
}
