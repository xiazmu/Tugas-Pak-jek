import { Type } from 'class-transformer';
import { IsNumber, Min, Max, ValidateNested } from 'class-validator';
import { ShippingDimensionDto } from './shipping-dimension.dto.js';

export class ShippingDto {
    @Type(() => Number)
    @IsNumber()
    @Min(0.1)
    @Max(30)
    weightKg: number

    @ValidateNested()
    @Type(() => ShippingDimensionDto)
    dimension: ShippingDimensionDto
}