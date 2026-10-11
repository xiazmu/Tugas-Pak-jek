import { Type } from 'class-transformer'
import { IsNumber, Min, Max } from 'class-validator'

export class LengthDto {
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(1000000)
    meters: number
}