
import { describe, it, expect, beforeEach } from 'vitest';
import { TaxService } from './tax.service.js';

describe('TaxService', () => {
  let service: TaxService;

  beforeEach(() => {
    service = new TaxService()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should calculate tax when inclusive is false', () => {
    const result = service.calculateTax({
      amount: 150000,
      rate: 11,
      inclusive: false,
    })

    expect(result.data).toEqual({
      amount: 150000,
      rate: 11,
      inclusive: false,
      tax: 16500,
      net: 150000,
      gross: 166500,
    })
  })

  it('should calculate tax when inclusive is true', () => {
    const result = service.calculateTax({
      amount: 150000,
      rate: 11,
      inclusive: true,
    })

    expect(result.data.tax).toBe(14864.86);
    expect(result.data.net).toBe(135135.14);
    expect(result.data.gross).toBe(150000);
  })
})
