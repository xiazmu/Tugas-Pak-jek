import { Controller, Get, Query } from '@nestjs/common'
import { TaxService } from './tax.service.js'
import { TaxDto } from './dto/tax.dto.js'

@Controller('Tax')
export class TaxController {
    constructor(private readonly taxService: TaxService) {}

    @Get()
    calculateTax(@Query() dto: TaxDto) {
        return this.taxService.calculateTax(dto)
    }
}