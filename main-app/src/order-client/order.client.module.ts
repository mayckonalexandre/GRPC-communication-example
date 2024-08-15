import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { OrderClientService } from './order.client.service';
import { OrderController } from './order.controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'ORDER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          package: 'order',
          protoPath: join(__dirname, '../../../order.proto'),
        },
      },
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderClientService],
  exports: [OrderClientService],
})
export class OrderClientModule {}
