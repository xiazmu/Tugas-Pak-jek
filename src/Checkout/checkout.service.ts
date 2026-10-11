
import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CheckoutDto } from './dto/checkout.dto.js';

@Injectable()
export class CheckoutService {
  calculateCheckout(
    query: { member?: boolean; coupon?: string },
    dto: CheckoutDto,
  ) {
    const member = query.member ?? false
    const coupon = query.coupon

    let couponRate = 0

    if (coupon !== undefined) {
      if (coupon === 'HEMAT10') {
        couponRate = 10
      } else if (coupon === 'HEMAT20') {
        couponRate = 20
      } else if (coupon === 'FREESHIP') {
        couponRate = 0
      } else {
        throw new NotFoundException('Coupon not found')
      }
    }

    const subtotal = dto.items.reduce(
      (sum, item) => sum + item.price * item.qty,
      0,
    )

    const memberDiscount = member ? subtotal * 0.05 : 0
    const couponDiscount = subtotal * couponRate / 100
    const totalDiscount = memberDiscount + couponDiscount
    const grandTotal = subtotal - totalDiscount

    return {
      success: true,
      message: 'Checkout calculated',
      data: {
        subtotal,
        member,
        ...(coupon !== undefined ? { coupon } : {}),
        discounts: {
          member: memberDiscount,
          coupon: couponDiscount,
          total: totalDiscount,
        },
        grandTotal,
      },
    };
  }
}
