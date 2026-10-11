import { Body, Controller, Post } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { ElectricityBillDto } from './dto/electricity-bill.dto.js';

@Controller('bills')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Post('electricity')
  calculateElectricityBill(@Body() dto: ElectricityBillDto) {
    return this.billService.calculateElectricityBill(dto)
  }
}