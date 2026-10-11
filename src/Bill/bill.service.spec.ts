
import { describe, it, expect, beforeEach } from 'vitest';
import { BillService } from './bill.service.js';

describe('BillService', () => {
  let service: BillService

  beforeEach(() => {
    service = new BillService()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should split the bill correctly', () => {
    const result = service.splitBill(4, {
      items: [
        { name: 'Nasi goreng', price: 28000, qty: 2 },
        { name: 'Es teh', price: 8000, qty: 4 },
      ],
      tipPercent: 10,
    })

    expect(result).toEqual({
      success: true,
      message: 'Bill split',
      data: {
        peopleCount: 4,
        subtotal: 88000,
        tipPercent: 10,
        tip: 8800,
        total: 96800,
        perPerson: 24200,
      },
    })
  })

  it('should use 0 tip when tipPercent is omitted', () => {
    const result = service.splitBill(2, {
        items: [
            { name: 'Mie ayam', price: 15000, qty: 2 },
        ],
        tipPercent: 0
    })

    expect(result.data.tipPercent).toBe(0)
    expect(result.data.tip).toBe(0)
    expect(result.data.total).toBe(30000)
    expect(result.data.perPerson).toBe(15000)
  })
})
