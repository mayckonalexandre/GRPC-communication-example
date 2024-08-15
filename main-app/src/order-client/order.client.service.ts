import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable, from } from 'rxjs';
import { OrderService, OrderResponse } from './order.client.interface';

@Injectable()
export class OrderClientService implements OnModuleInit {
  private orderService: OrderService;

  constructor(@Inject('ORDER_PACKAGE') private client: ClientGrpc) {}

  onModuleInit() {
    this.orderService = this.client.getService<OrderService>('OrderService');
  }

  processOrder(orderId: string): Observable<OrderResponse> {
    const responsePromise = this.orderService.processOrder({ orderId });
    return from(responsePromise);
  }
}
