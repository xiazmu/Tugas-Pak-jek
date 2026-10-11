import { Injectable } from '@nestjs/common';
import { ShippingParamsDto } from './dto/shipping-params.dto.js';
import { ShippingQueryDto } from './dto/shipping-query.dto.js';
import { ShippingDto } from './dto/shipping.dto.js';

@Injectable()
export class ShippingService {
  calculateCost(
    params: ShippingParamsDto,
    query: ShippingQueryDto,
    body: ShippingDto,
  ) {
    const { city } = params
    const express = query.express ?? false
    const insurance = query.insurance ?? false
    const { weightKg, dimension } = body

    const volumetricKg =
      (dimension.lengthCm * dimension.widthCm * dimension.heightCm) /
      5000

    const chargeableKg = Math.ceil(Math.max(weightKg, volumetricKg))

    const cityRates: Record<string, number> = {
      jakarta: 10000,
      bandung: 12000,
      surabaya: 18000,
      medan: 25000,
      denpasar: 22000,
    };

    const baseFare = cityRates[city] * chargeableKg
    const expressFee = express ? 6000 * chargeableKg : 0
    const insuranceFee = insurance ? 2500 : 0
    const total = baseFare + expressFee + insuranceFee

    return {
      success: true,
      message: 'Shipping cost calculated',
      data: {
        city,
        express,
        insurance,
        weightKg,
        volumetricKg: Number(volumetricKg.toFixed(2)),
        chargeableKg,
        baseFare,
        expressFee,
        insuranceFee,
        total,
      },
    };
  }
}