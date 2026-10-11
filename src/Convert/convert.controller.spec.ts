
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { Test } from '@nestjs/testing';
import { ConvertController } from './convert.controller.js';
import { ConvertService } from './convert.service.js';

describe('ConvertController', () => {
    let controller: ConvertController
    let service: ConvertService

    beforeEach(async () => {
        const module = await Test.createTestingModule({
            controllers: [ConvertController],
            providers: [
                {
                    provide: ConvertService,
                    useValue: {
                        convertLength: vi.fn()
                    }
                }
            ]
        }).compile()

        controller = module.get(ConvertController)
        service = module.get(ConvertService)
    })

    it('should be defined', () => {
        expect(controller).toBeDefined()
    })

    it('should call service with meters', () => {
        const dto = { meters: 1500 }

        vi.spyOn(service, 'convertLength').mockReturnValue({
            success: true,
            message: 'Length converted',
            data: {
                meters: 1500,
                kilometers: 1.5,
                centimeters: 150000,
                miles: 0.932,
            }
        })

        const result = controller.convertLength(dto)

        expect(service.convertLength).toHaveBeenCalledWith(dto)
        expect(result.data.miles).toBe(0.932)
    })
})