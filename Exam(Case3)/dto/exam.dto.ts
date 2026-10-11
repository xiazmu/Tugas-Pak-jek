import {
    isArray,
    IsNumber,
    IsOptional,
    ArrayMinSize,
    ArrayMaxSize,
    Max,
    Min,
    IsArray,
} from 'class-validator'

import { Type } from 'class-transformer'

export class AverageScoreDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @IsNumber({}, { each: true })
    @Min(0, { each: true})
    @Max(100, {each: true })
    scores: number[]
    
    @IsOptional()
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    @Max(100)
    passMark?: number
}