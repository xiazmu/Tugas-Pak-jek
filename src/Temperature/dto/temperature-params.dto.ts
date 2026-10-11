import { Type } from 'class-transformer';
import { IsNumber, Min, Max } from 'class-validator';

export class TemperatureParamsDto {
    @Type(() => Number)
    @IsNumber()
    @Min(-273.15)
    @Max(1000)
    value: number
}