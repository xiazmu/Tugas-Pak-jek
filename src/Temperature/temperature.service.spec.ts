
import { describe, it, expect, beforeEach } from 'vitest';
import { TemperatureService } from './temperature.service.js';

describe('TemperatureService', () => {
  let service: TemperatureService

  beforeEach(() => {
    service = new TemperatureService()
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should convert Celsius to Fahrenheit', () => {
    const result = service.convertTemperature(30, 'C', 'F')

    expect(result).toEqual({
      success: true,
      message: 'Temperature converted',
      data: {
        value: 30,
        from: 'C',
        to: 'F',
        result: 86,
      },
    })
  })

  it('should convert Celsius to Kelvin', () => {
    const result = service.convertTemperature(30, 'C', 'K')

    expect(result.data.result).toBe(303.15);
  })

  it('should reject the same unit', () => {
    expect(() =>
      service.convertTemperature(30, 'C', 'C'),
    ).toThrow('Source and target units must be different')
  })
})
