
import { Module } from '@nestjs/common';
import { TemperatureController } from './temperature.controller.js';
import { TemperatureService } from './temperature.service.js';

@Module({
    controllers: [TemperatureController],
    providers: [TemperatureService],
})
export class TemperatureModule {}