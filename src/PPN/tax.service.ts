import { Injectable } from '@nestjs/common';
import { TaxDto } from './dto/tax.dto.js';

@Injectable()
export class TaxService {
    calculateTax(dto: TaxDto) {
        const { amount, rate } = dto
        const inclusive = dto.inclusive ?? false

        let tax: number
        let net: number
        let gross: number

        if (inclusive) {
            gross = amount
            tax = (amount * rate) / (100 + rate)
            net = amount - tax
        } else {
            net = amount
            tax = (amount * rate) / 100
            gross = amount + tax
        }

        return {
            success: true,
            message: 'Tax calculated',
            data: {
                amount,
                rate,
                inclusive,
                tax: Number(tax.toFixed(2)),
                net: Number(net.toFixed(2)),
                gross: Number(gross.toFixed(2)),
            }
        }
    }
}