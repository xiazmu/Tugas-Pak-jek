import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { GeometryModule } from './geometry/geometry.module.js';
import { HealthModule } from './health/health.module.js';
import { CheckoutModule } from './Checkout/checkout.module.js';
import { TaxModule } from './Tax/tax.module.js';
import { LoansModule } from './Loans/loans.module.js';
import { BillModule } from './Bill/bill.module.js';
import { ParkingModule } from './Parking/parking.module.js';
import { ShippingModule } from './Shipping/shipping.module.js';


export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    // Distributed tracing, auto-correlated logs, request/job metrics, error
    // telemetry, alarms, and more — out of the box. Sign up at https://observe.nestjs.com
    ObserveModule.forRoot({
      appKey: 'YOUR_APP_KEY',
      appSecret: 'YOUR_APP_SECRET',
      serviceId: 'toko-buku-api',
    }),
    GeometryModule,
    HealthModule,
    CheckoutModule,
    TaxModule,
    LoansModule,
    BillModule,
    ParkingModule,
    ShippingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
