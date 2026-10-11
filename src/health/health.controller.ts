import { Body, Controller, Post } from '@nestjs/common';
import { HealthDto } from './dto/health.dto.js';
import { HealthService } from './health.service.js';

@Controller('bmi')
export class HealthController {
  healthService: any;
  constructor(
    private readonly HealthService: HealthService,
  ) {}

  @Post()
  calculateHealth(@Body() dto: HealthDto) {
    return this.HealthService.calculateBMI(dto.weightKg,dto.heightCm)
  }
}