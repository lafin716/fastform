import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  readonly userName: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly password: string;
  @IsString()
  readonly licenseType: string;
  @IsString()
  readonly licenseStatus: string;
  @IsOptional()
  readonly roles?: string[];
}
