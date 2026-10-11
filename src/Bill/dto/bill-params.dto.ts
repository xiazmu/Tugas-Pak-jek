import { Type } from 'class-transformer';
import { IsInt, Min, Max } from 'class-validator';

export class BillParamsDto {
    @Type(() => Number)
    @IsInt()
    @Min(2)
    @Max(20)
    peopleCount: number
}