
import { Injectable } from '@nestjs/common';
import { LengthDto } from './dto/length.dto.js';

@Injectable()
export class ConvertService {
    convertLength(dto: LengthDto) {
        const { meters } = dto

        return {
            success: true,
            message: 'Lenght converted',
            data: {
                meters,
                kilometers: meters / 1000,
                centimeters: meters * 100,
                miles: Number((meters / 1609.344).toFixed(3)),
            }
        }
    }
}