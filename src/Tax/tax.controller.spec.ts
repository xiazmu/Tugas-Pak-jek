
import { Test, TestingModule } from '@nestjs/testing';
import { TaxController } from './tax.controller.js';
import { TaxService } from './tax.service.js';
import { vi } from 'vitest'

describe('TaxController', () => {
    let controller: TaxController
    let service: TaxService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [TaxController],
            providers: [
                {
                    provide: TaxService,
                    useValue: {
                        calculateTax: vi.fn(),
                    }
                }
            ]
        }).compile()

        controller = module.get<TaxController>(TaxController)
        service = module.get<TaxService>(TaxService)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should call service with the query DTO', () => {
        const dto = {
            amount: 150000,
            rate: 11,
            inclusive: false,
        }

        const expectResult = {
            succes: true,
            message: 'Tac calculated',
            data: {
                amount: 150000,
                rate: 11,
                inclusive: false,
                tax: 16500,
                net: 150000,
                gross: 166500,
            }
        }

        vi.spyOn(service, 'calculateTax').mockReturnValue(expectResult)

        const result = controller.calculateTax(dto)

        expect(service.calculateTax).toHaveBeenCalledWith(dto)
        expect(result).toEqual(expectResult)
    })
})