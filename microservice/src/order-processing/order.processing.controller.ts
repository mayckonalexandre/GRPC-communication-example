import { Controller, Injectable } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';

@Controller()
export class OrderProcessingController {
  @GrpcMethod('OrderService', 'ProcessOrder')
  processOrder(data: { orderId: string }, metadata: any): { status: string } {
    console.log('Processing order:', data.orderId);
    return { status: 'Order processed successfully' };
  }
}
