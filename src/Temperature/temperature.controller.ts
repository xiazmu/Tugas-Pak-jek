
import { Controller, Get, Param, Query } from '@nestjs/common';
import { TemperatureService } from './temperature.service.js';
import { TemperatureParamsDto } from './dto/temperature-params.dto.js';
import { TemperatureQueryDto } from './dto/temperature-query.dto.js';

@Controller('convert/temperature')
export class TemperatureController {
  constructor(
    private readonly temperatureService: TemperatureService,
  ) {}

  @Get(':value')
  convertTemperature(
    @Param() params: TemperatureParamsDto,
    @Query() query: TemperatureQueryDto,
  ) {
    return this.temperatureService.convertTemperature(
      params.value,
      query.from,
      query.to,
    );
  }
}
