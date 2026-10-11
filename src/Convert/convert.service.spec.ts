
import { describe, it, expect, beforeEach } from 'vitest';
import { ConvertService } from './convert.service.js';

describe('ConvertService', () => {
    let service: ConvertService

    beforeEach(() => {
        service = new ConvertService()
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })

    it('should convert 1500 meters correctly', () => {
        const result = service.convertLength({ meters: 1500 })

        expect(result).toEqual({
            succes: true,
            message: 'Length converted',
            data: {
                meters: 1500,
                kilometers: 1.5,
                centimeters: 150000,
                miles: 0.932,
            }
        })
    })
})