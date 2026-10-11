import { Type } from 'class-transformer';
import { IsNumber, Min, Max } from 'class-validator';

export class ShippingDimensionDto {
  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  lengthCm: number

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  widthCm: number

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @Max(100)
  heightCm: number
}