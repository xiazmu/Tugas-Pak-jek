import { Injectable } from '@nestjs/common';
import { LoanDto } from './dto/loan.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';

@Injectable()
export class LoanService {
    calculateInstallment(
        principal: number,
        query: LoanQueryDto,
        body: LoanDto,
    ) {
        const currency = query.currency ?? 'IDR'
        const { months, annualInterestRate } = body

        const monthlyInterestRate = annualInterestRate / 12 / 100

        let monthlyInstallment: number

        if (monthlyInterestRate === 0) {
            monthlyInstallment = principal / months
        } else {
            const factor = Math.pow(1 + monthlyInterestRate, months)

            monthlyInstallment =
            (principal * monthlyInterestRate * factor) / (factor - 1)
        }

        monthlyInstallment = Math.round(monthlyInstallment)

        const totalPayment = monthlyInstallment * months
        const totalInterest = totalPayment - principal

        return {
            success: true,
            message: 'Installment calculated',
            data: {
                principal,
                currency,
                months,
                annualInterestRate,
                monthlyInterestRate: Number(monthlyInterestRate.toFixed(6)),
                monthlyInstallment,
                totalPayment,
                totalInterest
            }
        }
    }
}