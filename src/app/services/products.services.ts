import { Injectable } from "@angular/core";
import {ProductModel} from "../models/product.model";
import {HttpClient} from "@angular/common/http";
import {Observable, map} from "rxjs";

@Injectable({
  providedIn : 'root'
})
export class ProductsServices{

  constructor(private http: HttpClient) { }


 /**
  * This function allows us to get a product by ID
  * @param id This id of products
  * @returns ProductModel
  */
  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`http://localhost:8080/products/${id}`).pipe(
      map(product =>
         new ProductModel(product.getId, product.name, product.img, product.price, product.description, product.sku)
      )
    );
  }

/**
 * This function allows us to get a list of products
 * @returns List of products
 */
  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:8080/products`).pipe(
      map(products => products.map(product => new ProductModel(
        product.getId,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku
      )))
    );
  }

/**
 * This function allows us to create new product
 * @param product product to save
 * @returns created products
 */
  public saveProduct(product: ProductModel): Observable<ProductModel> {
    return this.http.post<ProductModel>(`http://localhost:8080/products`, product).pipe(
      map(product =>  new ProductModel(
        product.getId,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku
      ))
    );
  }
/**
 * this function allow us to delele product by id
 * @param id if of products
 * @returns
 */
  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/products/${id}`, { observe: 'response' })
    .pipe(
      map(response => response.ok) // Extracting the boolean value based on response status
    );
  }



  /**
   * This function allows us to get a list of products by category id
   * @returns List of products
   */
  public getProductsByCategoryRef(category_ref : string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:8080/products/category/${category_ref}`).pipe(
      map(products => products.map(product => new ProductModel(
        product.getId,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku
      )))
    );
  }
}
