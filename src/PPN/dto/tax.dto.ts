
import { Type, Transform } from 'class-transformer';
import {
  IsNumber,
  IsBoolean,
  IsOptional,
  Min,
  Max,
} from 'class-validator'

export class TaxDto {
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  amount: number

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(100)
  rate: number

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false
    return value
  })
  @IsBoolean()
  inclusive: boolean = false
}
