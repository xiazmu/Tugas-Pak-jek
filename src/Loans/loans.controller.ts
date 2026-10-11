import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { LoanService } from './loans.service.js';
import { LoanParamsDto } from './dto/loan-params.dto.js';
import { LoanQueryDto } from './dto/loan-query.dto.js';
import { LoanDto } from './dto/loan.dto.js';

@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoanService) {}

  @Post(':principal/installment')
  calculateInstallment(
    @Param() params: LoanParamsDto,
    @Query() query: LoanQueryDto,
    @Body() body: LoanDto,
  ) {
    return this.loansService.calculateInstallment(
      params.principal,
      query,
      body,
    );
  }
}