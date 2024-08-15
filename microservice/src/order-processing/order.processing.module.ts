import { Module } from '@nestjs/common';
import { OrderProcessingController } from './order.processing.controller';

@Module({
  controllers: [OrderProcessingController],
})
export class OrderProcessingModule {}
