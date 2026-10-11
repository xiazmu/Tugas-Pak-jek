import { Body, Controller, Param, Post, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service.js';
import { ShippingParamsDto } from './dto/shipping-params.dto.js';
import { ShippingQueryDto } from './dto/shipping-query.dto.js';
import { ShippingDto } from './dto/shipping.dto.js';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post(':city')
  calculateCost(
    @Param() params: ShippingParamsDto,
    @Query() query: ShippingQueryDto,
    @Body() body: ShippingDto,
  ) {
    return this.shippingService.calculateCost(params, query, body)
  }
}