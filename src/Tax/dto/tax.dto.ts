
import {
  IsNumber,
  IsBoolean,
  IsOptional,
  Min,
  Max,
} from 'class-validator'
import { Type } from 'class-transformer'

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
  @Type(() => Boolean)
  @IsBoolean()
  inclusive: boolean = false
}
