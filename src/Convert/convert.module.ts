
import { Module } from '@nestjs/common';
import { ConvertController } from './convert.controller.js';
import { ConvertService } from './convert.service.js';

@Module({
    controllers: [ConvertController],
    providers: [ConvertService],
})
export class ConvertModule {}