import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {OrderDto} from "../Dtos/OrderDto";

import {OrderType} from "../enums/OrderType ";
import {OrderState} from "../enums/OrderState";
import { LocalStorageService } from './local-storage.service';
import { ProductModel } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'http://localhost:8080/';

  public order: BehaviorSubject<OrderDto>;


  
  constructor(private http: HttpClient, private localStorageService: LocalStorageService) {
    this.order =  new BehaviorSubject<OrderDto>(new OrderDto(0,OrderType.ONLINE,OrderState.PENDING,1,new Date(),[],0 ))
  }


  addToOrder(product: ProductModel){
    this.localStorageService.setItem('order',this.order.getValue())
  }

  // Fetch all orders
  getOrders(): Observable<OrderDto[]> {
    return this.http.get<OrderDto[]>(`${this.apiUrl}/orders`);
  }

  // Get order by ID
  getOrderById(id: number): Observable<OrderDto> {
    return this.http.get<OrderDto>(`${this.apiUrl}/orders/${id}`);
  }

  // Create a new order
  createOrder(order: OrderDto): Observable<OrderDto> {
    return this.http.post<OrderDto>(`${this.apiUrl}/orders`, order);
  }

  // Update an existing order
  updateOrder(order: OrderDto): Observable<OrderDto> {
    return this.http.put<OrderDto>(`${this.apiUrl}/orders/${order.getOrderId()}`, order);
  }

  // Delete an order
  deleteOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/orders/${id}`);
  }
}
