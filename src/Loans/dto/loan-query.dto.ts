import { IsIn, IsOptional } from 'class-validator';

export class LoanQueryDto {
    @IsOptional()
    @IsIn(['IDR', 'USD'])
    currency: string = 'IDR'
}