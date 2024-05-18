import { IsCreditCard, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CardDto {
  @IsString()
  @IsNotEmpty()
  cvs: string;

  @IsNumber()
  exp_month: string;

  @IsNumber()
  exp_year: string;

  @IsCreditCard()
  number: string;
}
