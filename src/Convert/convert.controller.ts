import { Controller, Get, Param } from '@nestjs/common';
import { ConvertService } from './convert.service.js';
import { LengthDto } from './dto/length.dto.js';

@Controller('convert/length')
export class ConvertController {
    constructor(
        private readonly convertService: ConvertService,
    ) {}

    @Get(':meters')
    convertLength(@Param() dto: LengthDto) {
        return this.convertService.convertLength(dto)
    }
}