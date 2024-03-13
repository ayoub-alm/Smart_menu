import { Component , OnInit } from '@angular/core';
import {ProductsServices} from "../services/products.services";
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
constructor( private productservice : ProductsServices) {}

  product: any;
  ngOnInit(): void {
    this.productservice.getProducts().subscribe(
      (data) => {
        this.product = data;
        console.log(this.product);
      },
      (error) => {
        console.error('Error retrieving product:', error);
      }
    );
  }


}
