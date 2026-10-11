import { Type, Transform } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  MinLength,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ElectricityMeterDto } from './electricity-meter.dto.js';
import { ElectricityRatesDto } from './electricity-rates.dto.js';

export class ElectricityBillDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(80)
  customerName: string;

  @ValidateNested()
  @Type(() => ElectricityMeterDto)
  meter: ElectricityMeterDto;

  @ValidateNested()
  @Type(() => ElectricityRatesDto)
  rates: ElectricityRatesDto;
}