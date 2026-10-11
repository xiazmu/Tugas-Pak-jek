
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { BillController } from './bill.controller.js';
import { BillService } from './bill.service.js';

describe('BillController', () => {
  let controller: BillController;
  let service: BillService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [BillController],
      providers: [
        {
          provide: BillService,
          useValue: {
            splitBill: vi.fn(),
          },
        },
      ],
    }).compile()

    controller = module.get(BillController)
    service = module.get(BillService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should call service with peopleCount and body', () => {
    const params = { peopleCount: 4 }
    const dto = {
      items: [
        { name: 'Nasi goreng', price: 28000, qty: 2 },
        { name: 'Es teh', price: 8000, qty: 4 },
      ],
      tipPercent: 10,
    }

    const expectedResult = {
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
    }

    vi.spyOn(service, 'splitBill').mockReturnValue(expectedResult)

    const result = controller.splitBill(params, dto)

    expect(service.splitBill).toHaveBeenCalledWith(4, dto)
    expect(result).toEqual(expectedResult)
  })
})
