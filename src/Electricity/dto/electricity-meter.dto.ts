import { Type } from 'class-transformer';
import { IsNumber, Min } from 'class-validator';

export class ElectricityMeterDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  previousKwh: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  currentKwh: number;
}