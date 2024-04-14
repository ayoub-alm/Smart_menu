import {Component, OnInit} from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import {OrderService} from "../../services/OrderService";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  productsInBasketCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  constructor(private orderService: OrderService) {
  }


  ngOnInit(): void {

  }
}
