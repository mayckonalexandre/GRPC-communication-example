export interface OrderRequest {
  orderId: string;
}

export interface OrderResponse {
  status: string;
}

export interface OrderService {
  processOrder(data: OrderRequest): Promise<OrderResponse>;
}
