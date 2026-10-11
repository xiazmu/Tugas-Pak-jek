import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { CheckoutController } from './checkout.controller.js';
import { CheckoutService } from './checkout.service.js';

describe('ChecloutController', () => {
    let controller: CheckoutController
    let service: CheckoutService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [CheckoutController],
            providers: [
                {
                    provide: CheckoutService,
                    useValue: {
                        calculateCheckout: vi.fn()
                    }
                }
            ]
        }).compile()

        controller = module.get(CheckoutController)
        service = module.get(CheckoutService)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should call service with query and body', () => {
        const query = {
            member: true,
            coupon: 'HEMAT10',
        }

        const dto = {
            items: [
                { name: 'T-Shirt', price: 120000, qty: 2 },
                { name: 'Cap', price: 80000, qty: 1 },
            ]
        }

        const expectedResult = {
            success: true,
            message: 'Checlout calculated',
            data: {
                subtotal: 320000,
                member: true,
                coupon: 'HEMAT10',
                discounts: {
                    member: 16000,
                    coupon: 32000,
                    total: 48000,
                },
                grandTotal: 272000,
            },
        }

        vi.spyOn(service, 'calculateCheckout')
        .mockReturnValue(expectedResult)

        const result = controller.calculateCheckout(query, dto)

        expect(service.calculateCheckout)
        .toHaveBeenCalledWith(query, dto)
        expect(result).toEqual(expectedResult)
    })
})