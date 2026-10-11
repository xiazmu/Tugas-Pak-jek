import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional } from 'class-validator';

export class ShippingQueryDto {
  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false
    return value
  })
  @IsBoolean()
  express: boolean = false

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false
    return value
  })
  @IsBoolean()
  insurance: boolean = false
}