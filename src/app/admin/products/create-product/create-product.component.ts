import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
import {ProductCreateDto} from "../../../Dtos/product.create.dto";
import {ProductsServices} from "../../../services/products.services";
import {BehaviorSubject, Subscription, tap} from "rxjs";
import {ProductCategoryService} from "../../../services/ProductCategoryService";
import {ProductCategory as ProductCategoryModel} from "../../../models/ProductCategory";



@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit, OnDestroy{
  // Array to store subscriptions
  subscriptions: Subscription[] = [];
  productCategories: BehaviorSubject<ProductCategoryModel[]> = new BehaviorSubject<ProductCategoryModel[]>([]);
  creatProductFormGroup: FormGroup;
  productToSave!: ProductCreateDto ;
  uploadedImage: File[] = [];

  constructor(private formGroup: FormBuilder,
              private productService : ProductsServices,
              private categoryService: ProductCategoryService)
  {
      this.creatProductFormGroup = new FormBuilder().group({
        name: ['', Validators.required],
        sku: ['', Validators.required],
        ref: ['', Validators.required],
        description: ['', Validators.required],
        price: ['', [Validators.required, Validators.pattern(/^\d+(\.\d{1,2})?$/)]],
        quantity: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
        category:['', Validators.required],
        img:['', Validators.required]
      });
    }

  ngOnInit(): void {
      this.subscriptions.push(
        this.categoryService.getProductsCategories().pipe(
          tap(productsCategories => this.productCategories.next(productsCategories) )
        ).subscribe()
      )
  }

  onSubmit(): void {
    console.log(this.creatProductFormGroup.value.img);
    console.log(this.creatProductFormGroup.value);
    // Get the data from the form and creat save Product DTO
    this.productToSave = new ProductCreateDto(
      this.creatProductFormGroup.value.name,
      this.creatProductFormGroup.value.img,
      this.creatProductFormGroup.value.price,
      this.creatProductFormGroup.value.description,
      this.creatProductFormGroup.value.ref,
      this.creatProductFormGroup.value.sku,
      this.creatProductFormGroup.value.category,
      1,
    );
    // save the product
    this.productService.saveProduct(this.productToSave).pipe(
      tap(value => console.log(value))
    ).subscribe();
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this.subscriptions.forEach(subscription => subscription.unsubscribe() );
  }
}
