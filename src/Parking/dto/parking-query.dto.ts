import { Transform } from 'class-transformer';
import { IsBoolean, IsIn, IsOptional } from 'class-validator';

export class ParkingQueryDto {
  @IsIn(['car', 'motorcycle', 'bus'])
  vehicle: string

  @IsOptional()
  @Transform(({ value }) => {
    if (value === 'true') return true
    if (value === 'false') return false
    return value
  })
  @IsBoolean()
  weekend: boolean = false
}