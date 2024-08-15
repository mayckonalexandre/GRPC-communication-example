import { Controller, Get, Query } from "@nestjs/common";
import { OrderClientService } from "./order.client.service";

@Controller('order')
export class OrderController {
  constructor(private readonly orderClientService: OrderClientService) {}

  @Get('process')
  async processOrder(@Query('orderId') orderId: string) {
    return this.orderClientService.processOrder(orderId);
  }
}
