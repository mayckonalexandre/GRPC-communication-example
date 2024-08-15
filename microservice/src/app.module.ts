import { Module } from '@nestjs/common';
import { OrderProcessingModule } from './order-processing/order.processing.module';

@Module({
  imports: [OrderProcessingModule],
})
export class AppModule {}
