import { Module } from '@nestjs/common';
import { OrderClientModule } from './order-client/order.client.module';

@Module({
  imports: [OrderClientModule],
})
export class AppModule {}
