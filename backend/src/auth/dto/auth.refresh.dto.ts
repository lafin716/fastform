import { IsString } from 'class-validator';

export class RequestRefreshDto {
  @IsString()
  readonly refreshToken: string;
}
