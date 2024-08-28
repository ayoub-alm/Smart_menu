import {OrderType} from "../enums/OrderType ";
import {OrderState} from "../enums/OrderState";
import {ProductModel} from "../models/product.model";
import { ProductInOrderDto } from "./product-in-order.dto";
export class OrderDto {
  constructor(
    public orderId: number,
    private orderType: OrderType,
    private orderState: OrderState,
    private userId: number,
    private orderDate: Date,
    public products: ProductInOrderDto[],
    private totalAmount: number
  ) {}

  getOrderId(): number {
    return this.orderId;
  }

 get getProducts(): ProductInOrderDto[]{
    return this.products;
 }
}
