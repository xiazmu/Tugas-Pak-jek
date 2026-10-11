import { Type } from 'class-transformer';
import { IsNumber, Min, Max } from 'class-validator';

export class LoanParamsDto {
    @Type(() => Number)
    @IsNumber()
    @Min(1_000_000)
    @Max(1_000_000_000)
    principal: number
}