import { Module } from '@nestjs/common';
import { LoansController } from './loans.controller.js';
import { LoanService } from './loans.service.js';

@Module({
    controllers: [LoansController],
    providers: [LoanService],
})
export class LoansModule {}