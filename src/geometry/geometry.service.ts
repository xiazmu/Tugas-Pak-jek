import { Injectable } from '@nestjs/common';
import { GemotryDto } from './dto/geometry.dto.js';

@Injectable()
export class GeometryService {
    countCircle(dto: GemotryDto) {
        return {
            message: "Circle Area Calculated",
            data: {
                radius: dto.radius ** 2,
                area: Math.PI * dto.radius ** 2,
            }
        }
    }
}
