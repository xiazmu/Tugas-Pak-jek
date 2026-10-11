
import { Controller, Post, Query, Body } from '@nestjs/common';
import { CheckoutService } from './checkout.service.js';
import { CheckoutQueryDto } from './dto/checkout-query.dto.js';
import { CheckoutDto } from './dto/checkout.dto.js';

@Controller('checkout')
export class CheckoutController {
    constructor(
        private readonly checkoutService: CheckoutService,
    ) {}

    @Post('discount')
    calculateCheckout(
        @Query() query: CheckoutQueryDto,
        @Body() dto: CheckoutDto,
    ) {
        return this.checkoutService.calculateCheckout(query, dto)
    }
}
