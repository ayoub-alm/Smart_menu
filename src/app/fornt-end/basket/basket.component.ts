import {Component, OnInit} from '@angular/core';
import {OrderDto} from "../../Dtos/OrderDto";
import {BehaviorSubject} from "rxjs";
import {OrderService} from "../../services/OrderService";
import {ProductModel} from "../../models/product.model";
import {OrderType} from "../../enums/OrderType ";
import {OrderState} from "../../enums/OrderState";
import { ProductInOrderDto } from 'src/app/Dtos/product-in-order.dto';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  public order: BehaviorSubject<OrderDto>;
  public products: BehaviorSubject<ProductInOrderDto[]> = new BehaviorSubject<ProductInOrderDto[]>([]);

  constructor(private orderService: OrderService) {
    this.order =  new BehaviorSubject<OrderDto>(new OrderDto(0,OrderType.ONLINE,OrderState.PENDING,1,new Date(),[],0 ))
  }

  ngOnInit(): void {
    this.order.next(this.orderService.order.getValue());
    this.products.next(this.order.getValue().getProducts) ;
  }
  get totalAmount(): string {
    const total = this.products.getValue().reduce((accumulator, currentProduct) => {
      return accumulator + (parseInt(currentProduct.product.price.toString()) * currentProduct.quantity);
    }, 0);
  
    return total.toFixed(2); // Convert to string with 2 decimal places
  }
}
