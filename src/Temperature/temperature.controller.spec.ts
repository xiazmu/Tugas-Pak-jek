
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { TemperatureController } from './temperature.controller.js';
import { TemperatureService } from './temperature.service.js';

describe('TemperatureController', () => {
  let controller: TemperatureController
  let service: TemperatureService

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      controllers: [TemperatureController],
      providers: [
        {
          provide: TemperatureService,
          useValue: {
            convertTemperature: vi.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get(TemperatureController)
    service = module.get(TemperatureService)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  });

  it('should call service with the correct values', () => {
    const expectedResult = {
      success: true,
      message: 'Temperature converted',
      data: {
        value: 30,
        from: 'C',
        to: 'F',
        result: 86,
      },
    };

    vi.spyOn(service, 'convertTemperature')
      .mockReturnValue(expectedResult);

    const result = controller.convertTemperature(
      { value: 30 },
      { from: 'C', to: 'F' },
    );

    expect(service.convertTemperature)
      .toHaveBeenCalledWith(30, 'C', 'F');

    expect(result).toEqual(expectedResult);
  });
});
