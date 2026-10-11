import { IsIn, IsString } from 'class-validator';

export class TemperatureQueryDto {
    @IsString()
    @IsIn(['C', 'F', 'K'])
    from: string

    @IsString()
    @IsIn(['C', 'F', 'K'])
    to: string
}