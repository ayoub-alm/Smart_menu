import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductCategory} from "../models/ProductCategory";
import {ProductCategoryService} from "../services/ProductCategoryService";
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {ProductModel} from "../models/product.model";
import {ProductsServices} from "../services/products.services";


@Component({
  selector: 'app-categories-section',
  templateUrl: './categories-section.component.html',
  styleUrls: ['./categories-section.component.css']
})
export class CategoriesSectionComponent implements OnInit , OnDestroy {
    subscriptions: Subscription[] = [];
    productCategories: BehaviorSubject<ProductCategory[]>;
    selectedProducts: BehaviorSubject<ProductModel[]> = new BehaviorSubject<ProductModel[]>([]);

    constructor(private categoryService: ProductCategoryService,
                private productService: ProductsServices,
                ) {
      this.productCategories = new BehaviorSubject<ProductCategory[]>([]);
    }

  ngOnInit(): void {
      this.subscriptions.push(
        this.categoryService.getProducts().subscribe(productCategories => {
        this.productCategories.next(productCategories);
      }))

      this.subscriptions.push(
      this.productService.getProducts().pipe().subscribe(
        products => this.selectedProducts.next(products)
      ));
  }

  ngOnDestroy(): void {
      // Destroy all subscriptions
      // this.subscriptions.forEach(subscription => subscription.unsubscribe() );
  }

  getProductsByCategory(ref :string): void {
    this.productService.getProductsByCategoryRef(ref).subscribe(products => {
      this.selectedProducts.next(products)
    });
  }
}
