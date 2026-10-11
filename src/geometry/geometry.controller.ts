import { Body, Controller, Post } from '@nestjs/common';
import { GeometryService } from './geometry.service.js';
import { GemotryDto } from './dto/geometry.dto.js';

@Controller('geometry')
export class GeometryController {
  constructor(private readonly geometryService: GeometryService) {}

  @Post("circle-area")
  getCircleArea(@Body()dto: GemotryDto){
    return this.geometryService.countCircle(dto)
  }
}
