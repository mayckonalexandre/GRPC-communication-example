import { Module } from '@nestjs/common';
import { OrderClientModule } from './order-client/order.client.module';
import { OrderController } from './order-client/order.controller';

@Module({
  imports: [OrderClientModule],
  controllers: [OrderController],
})
export class AppModule {}
