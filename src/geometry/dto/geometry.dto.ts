import { IsNotEmpty, IsNumber, Min } from "class-validator";

export class GemotryDto {
    @IsNotEmpty()
    @IsNumber()
    @Min(1)
    radius: number
    
}