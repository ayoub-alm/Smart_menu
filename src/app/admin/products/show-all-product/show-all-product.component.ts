import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ProductModel } from 'src/app/models/product.model';
import { ProductsServices } from 'src/app/services/products.services';
import {ProductCategoryService} from "../../../services/ProductCategoryService";
import {ProductCategory} from "../../../models/ProductCategory";

@Component({
  selector: 'app-show-all-product',
  templateUrl: './show-all-product.component.html',
  styleUrls: ['./show-all-product.component.css']
})
export class ShowAllProductComponent implements OnInit {
listOfProduct: BehaviorSubject<ProductModel[]>  = new BehaviorSubject<ProductModel[]>([]);
subscriptions : Subscription[] = [];
listOfCategories: BehaviorSubject<ProductCategory[]>  = new BehaviorSubject<ProductCategory[]>([]);

constructor(private productService: ProductsServices,
            private categoryService: ProductCategoryService){

}
  ngOnInit(): void {
    // get list of products and store it the list of products subject behavores
    this.subscriptions.push(
      this.productService.getProductsBySellerId(1).subscribe(products => {
        console.log(products);
        this.listOfProduct.next(products);
      })
    )
    // Get categories  of products list
    this.categoryService.getProductsCategories().subscribe(categories => {
      this.listOfCategories.next(categories)
    })
  }

  /**
   * This function return category name by Giving category ID
   * @param categoryId The category id
   * @return categoryName string
   */
  getCategory(categoryId: number): string{
       let categoryName = "";
       this.listOfCategories.getValue().map(value => {
        return value.id === categoryId ? categoryName = value.name : categoryName = "Non";
      })
    return categoryName;
  }
}
