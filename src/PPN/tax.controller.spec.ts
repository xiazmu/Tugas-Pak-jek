
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { TaxController } from './tax.controller.js';
import { TaxService } from './tax.service.js';

describe('TaxController', () => {
  let controller: TaxController
  let service: TaxService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TaxController],
      providers: [
        {
          provide: TaxService,
          useValue: {
            calculateTax: vi.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get(TaxController)
    service = module.get(TaxService)
  });

  it('should be defined', () => {
    expect(controller).toBeDefined()
  });

  it('should call service with query DTO', () => {
    const dto = {
      amount: 150000,
      rate: 11,
      inclusive: false,
    };

    const expectedResult = {
      success: true,
      message: 'Tax calculated',
      data: {
        amount: 150000,
        rate: 11,
        inclusive: false,
        tax: 16500,
        net: 150000,
        gross: 166500,
      },
    };

    vi.spyOn(service, 'calculateTax').mockReturnValue(expectedResult)

    const result = controller.calculateTax(dto)

    expect(service.calculateTax).toHaveBeenCalledWith(dto)
    expect(result).toEqual(expectedResult)
  })
})
