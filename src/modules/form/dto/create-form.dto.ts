import { IsNumber, IsString } from 'class-validator';

export class CreateFormDto {
  @IsString()
  name: string;
  @IsString()
  lastName: string;
  @IsNumber()
  age: number;
}
