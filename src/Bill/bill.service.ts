
import { Injectable } from '@nestjs/common';
import { SplitBillDto } from './dto/split-bill.dto.js';

@Injectable()
export class BillService {
    splitBill(peopleCount: number, dto: SplitBillDto) {
        const subtotal = dto.items.reduce(
            (sum, item) => sum + item.price * item.qty,
            0,
        )

        const tipPercent = dto.tipPercent ?? 0
        const tip = subtotal * tipPercent / 100
        const total = subtotal * tip
        const perPerson = Math.round(total / peopleCount)

        return {
            success: true,
            message: 'Bill split',
            data: {
                peopleCount,
                subtotal,
                tipPercent,
                tip,
                total,
                perPerson,
            }
        }
    }
}