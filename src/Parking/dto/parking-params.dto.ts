import { Type } from 'class-transformer';
import { IsNumber, Min, Max } from 'class-validator';

export class ParkingParamsDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0.5)
  @Max(24)
  hours: number
}