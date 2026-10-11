
import { Type, Transform } from 'class-transformer';
import {
  IsArray,
  ArrayMinSize,
  ArrayMaxSize,
  IsString,
  IsNumber,
  IsInt,
  IsOptional,
  Min,
  Max,
  MaxLength,
  MinLength,
  ValidateNested,
} from 'class-validator';

export class BillItemDto {
  @Transform(({ value }) =>
    typeof value === 'string' ? value.trim() : value,
  )
  @IsString()
  @MinLength(2)
  @MaxLength(50)
  name: string;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  price: number

  @Type(() => Number)
  @IsInt()
  @Min(1)
  qty: number
}

export class SplitBillDto {
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(30)
  @ValidateNested({ each: true })
  @Type(() => BillItemDto)
  items: BillItemDto[]

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(30)
  tipPercent: number = 0
}
