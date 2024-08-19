import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductCategory } from 'src/app/models/ProductCategory';
import { ProductCategoryService } from 'src/app/services/ProductCategoryService';
import { ProductsServices } from 'src/app/services/products.services';

@Component({
  selector: 'app-kiosk',
  templateUrl: './kiosk.component.html',
  styleUrls: ['./kiosk.component.css']
})
export class KioskComponent implements OnInit, OnDestroy {
addToBasket(_t20: ProductModel) {
throw new Error('Method not implemented.');
}
showProductDialog(arg0: string) {
throw new Error('Method not implemented.');
}

subscriptions: Subscription[] = [];
categories: BehaviorSubject<ProductCategory[]> = new BehaviorSubject<ProductCategory[]>([])
allProduct: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([])
constructor(private categoryService: ProductCategoryService, private productService: ProductsServices ){}
ngOnInit(): void {

  this.subscriptions.push(
    this.categoryService.getProductsCategories().subscribe(productCategories => {
    this.categories.next(productCategories);
  }))


  this.subscriptions.push(
    this.productService.getProducts().pipe().subscribe(
      products => this.allProduct.next(products)
    ));
  
}

getProductsByCategory(arg0: string) {
  throw new Error('Method not implemented.');
  }

ngOnDestroy(): void {
  // Destroy all subscriptions
  this.subscriptions.forEach(subscription => subscription.unsubscribe() );
}
}
