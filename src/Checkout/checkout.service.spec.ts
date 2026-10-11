import { describe, it, expect, beforeEach } from 'vitest';
import { CheckoutService } from './checkout.service.js';

describe('CheckoutoService', () => {
    let service: CheckoutService

    beforeEach(() => {
        service = new CheckoutService()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should calculate member and coupon discounts', () => {
        const result = service.calculateCheckout(
            { member: true, coupon: 'HEMAT10' },
            {
                items: [
                    { name: 'T-Shirt', price: 120000, qty: 2},
                    { name: 'Cap', price: 80000, qty: 1},
                ]
            }
        )

        expect(result).toEqual({
            success: true,
            message: 'Checkout calculated',
            data: {
                subtotal: 320000,
                member: true,
                coupon: 'HEMAT10',
                discpunts: {
                    member: 16000,
                    coupon: 32000,
                    total: 48000,
                },
                grandTotal: 272000,
            }
        })
    })

    it('should apply FREESHIP without price discount', () => {
        const result = service.calculateCheckout(
            { member: false, coupon: 'FREESHIP' },
            {
                items: [
                    { name: 'Cap', price: 80000, qty: 1 },
                ]
            }
        )

        expect(result.data.discounts.coupon).toBe(0)
        expect(result.data.grandTotal).toBe(80000)
    })

    it('should reject an unknown coupon with 404', () => {
        expect(() =>
        service.calculateCheckout(
            { coupon: 'UNKNOWN' },
            {
                items: [
                    {  name: 'Cap', price: 80000, qty: 1},
                ]
            }
        )
    ).toThrow('Coupon not found')
})
})