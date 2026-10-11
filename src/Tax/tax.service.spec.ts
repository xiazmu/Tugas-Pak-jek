import { Test, TestingModule } from '@nestjs/testing'
import { TaxService } from './tax.service.js'

describe('TaxService', () => {
    let service: TaxService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [TaxService],
        }).compile()

        service = module.get<TaxService>(TaxService)
    })

    describe('calculateTax', () => {
        it('should calculate tax when inclusive is false', () => {
            const result = service.calculateTax({
                amount: 150000,
                rate: 11,
                inclusive: false,
            })

            expect(result).toEqual({
                succes: true,
                message: 'Tax calculated',
                data: {
                    amount: 150000,
                    rate: 11,
                    inclusive: false,
                    tax: 16500,
                    net: 150000,
                    gross: 166500,
                }
            })
        })

        it('should calculate tax when inclusive is true', () => {
            const result = service.calculateTax({
                amount: 150000,
                rate: 11,
                inclusive: true,
            })

            expect(result.data.gross).toBe(150000)
            expect(result.data.tax).toBeCloseTo(14864.86, 2)
            expect(result.data.net).toBeCloseTo(135135.14, 2)
        })
    })
})