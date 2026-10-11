import { Transform } from 'class-transformer';
import { IsBoolean, IsOptional, IsString } from 'class-validator';

export class CheckoutQueryDto {
    @IsOptional()
    @Transform(({ value }) => {
        if (value === 'true') return true
        if (value === 'false') return false
        return value
    })
    @IsBoolean()
    member: boolean = false

    @IsOptional()
    @IsString()
    coupon?: string
}