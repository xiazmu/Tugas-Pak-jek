import { Injectable } from '@nestjs/common';
import { ParkingParamsDto } from './dto/parking-params.dto.js';
import { ParkingQueryDto } from './dto/parking-query.dto.js';

@Injectable()
export class ParkingService {
  calculateFee(params: ParkingParamsDto, query: ParkingQueryDto) {
    const hours = params.hours
    const billedHours = Math.ceil(hours)
    const vehicle = query.vehicle
    const weekend = query.weekend ?? false

    const rates = {
      motorcycle: 2000,
      car: 8000,
      bus: 15000,
    };

    const hourlyRate = rates[vehicle as keyof typeof rates]
    const weekendSurcharge = weekend ? 0.2 : 0

    const total = Math.round(
      billedHours * hourlyRate * (weekend ? 1.2 : 1),
    )

    return {
      success: true,
      message: 'Parking fee calculated',
      data: {
        hours,
        billedHours,
        vehicle,
        weekend,
        hourlyRate,
        weekendSurcharge,
        total,
      },
    }
  }
}