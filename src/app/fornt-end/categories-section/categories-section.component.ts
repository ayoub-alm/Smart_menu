import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductCategory} from "../../models/ProductCategory";
import {ProductCategoryService} from "../../services/ProductCategoryService";
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {ProductModel} from "../../models/product.model";
import {ProductsServices} from "../../services/products.services";
import {OrderService} from "../../services/OrderService";
import {MatDialog} from "@angular/material/dialog";
import {ProductDialogComponent} from "../product-dialog/product-dialog.component";


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
                private orderService: OrderService,
                private dialog: MatDialog
                ) {
      this.productCategories = new BehaviorSubject<ProductCategory[]>([]);
    }

  ngOnInit(): void {
      this.subscriptions.push(
        this.categoryService.getProductsCategories().subscribe(productCategories => {
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

  addToBasket(product: ProductModel) {
    this.orderService.order.getValue().products.push(product);
  }

  showProductDialog(product_ref: string): void {
    // Fetch product data from the service
    this.productService.getProductByRef(product_ref).subscribe((selectedProduct: ProductModel) => {
      const dialogRef = this.dialog.open(ProductDialogComponent, {
        width: '60%',
        data: selectedProduct // Pass selected product as data to the dialog
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    });
  }

}
