import { Injectable, BadRequestException } from '@nestjs/common';
import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Injectable()
export class BillService {
  calculateElectricityBill(dto: ElectricityBillDto) {
    const { customerName, meter, rates } = dto;

    if (meter.currentKwh <= meter.previousKwh) {
      throw new BadRequestException(
        'currentKwh must be greater than previousKwh',
      );
    }

    const usageKwh = meter.currentKwh - meter.previousKwh;
    const usageFee = usageKwh * rates.perKwh;
    const subtotal = rates.baseFee + usageFee;
    const taxRate = rates.taxRate ?? 11;
    const tax = (subtotal * taxRate) / 100;
    const total = subtotal + tax;

    return {
      success: true,
      message: 'Electricity bill calculated',
      data: {
        customerName,
        usageKwh,
        baseFee: rates.baseFee,
        usageFee,
        subtotal,
        taxRate,
        tax,
        total,
      },
    };
  }
}