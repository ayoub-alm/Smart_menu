import {OrderType} from "../enums/OrderType ";
import {OrderState} from "../enums/OrderState";
import {ProductModel} from "../models/product.model";
export class OrderDto {
  constructor(
    public orderId: number,
    private orderType: OrderType,
    private orderState: OrderState,
    private userId: number,
    private orderDate: Date,
    public products: ProductModel[],
    private totalAmount: number
  ) {}

  getOrderId(): number {
    return this.orderId;
  }

 get getProducts(): ProductModel[]{
    return this.products;
 }
}
