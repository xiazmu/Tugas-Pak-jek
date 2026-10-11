import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class HealthDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    weightKg: number

    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    heightCm: number
}