import {Component, OnInit} from '@angular/core';
import {OrderDto} from "../../Dtos/OrderDto";
import {BehaviorSubject} from "rxjs";
import {OrderService} from "../../services/OrderService";
import {ProductModel} from "../../models/product.model";
import {OrderType} from "../../enums/OrderType ";
import {OrderState} from "../../enums/OrderState";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit{
  public order: BehaviorSubject<OrderDto>;
  public products: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);

  constructor(private orderService: OrderService) {
    this.order =  new BehaviorSubject<OrderDto>(new OrderDto(0,OrderType.ONLINE,OrderState.PENDING,1,new Date(),[],0 ))
  }

  ngOnInit(): void {
    this.order.next(this.orderService.order.getValue());
    this.products.next(this.order.getValue().getProducts) ;
  }
}
