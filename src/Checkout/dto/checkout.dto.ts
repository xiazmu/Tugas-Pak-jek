import { Type, Transform } from 'class-transformer'
import {
    IsArray,
    ArrayMinSize,
    ArrayMaxSize,
    ValidateNested,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
    IsInt,
    Min,
} from 'class-validator'

export class CheckoutItemDto {
    @Transform(({ value }) =>
        typeof value === 'string' ? value.trim() : value,
    )
    @IsString()
    @MinLength(2)
    @MaxLength(50)
    name: string
    
    @Type(() => Number)
    @IsNumber()
    @Min(0)
    price: number

    @Type(() => Number)
    @IsInt()
    @Min(1)
    qty: number
}

export class CheckoutDto {
    @IsArray()
    @ArrayMinSize(1)
    @ArrayMaxSize(20)
    @ValidateNested({ each: true })
    @Type(() => CheckoutItemDto)
    items: CheckoutItemDto[]
}