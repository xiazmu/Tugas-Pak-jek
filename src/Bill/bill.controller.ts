
import { Controller, Post, Param, Body } from '@nestjs/common';
import { BillService } from './bill.service.js';
import { BillParamsDto } from './dto/bill-params.dto.js';
import { SplitBillDto } from './dto/split-bill.dto.js';

@Controller('bills')
export class BillController {
    constructor(private readonly billService: BillService) {}

    @Post(':peopleCount/split')
    splitBill(
        @Param() params: BillParamsDto,
        @Body() dto: SplitBillDto,
    ) {
        return this.billService.splitBill(params.peopleCount, dto)
    }
}