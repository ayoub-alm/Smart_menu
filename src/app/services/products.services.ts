import { Injectable } from "@angular/core";
import {ProductModel} from "../models/product.model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, map} from "rxjs";
import {ProductCreateDto} from "../Dtos/product.create.dto";

@Injectable({
  providedIn : 'root'
})
export class ProductsServices {

  constructor(private http: HttpClient) {
  }


  /**
   * This function allows us to get a product by ID
   * @param id This id of products
   * @returns ProductModel
   */
  public getProduct(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`http://localhost:8080/products/${id}`).pipe(
      map(product =>
        new ProductModel(product.id,
          product.name,
          product.img,
          product.price,
          product.description,
          product.sku,
          product.seller,
          product.state,
          product.ref,
          product.categoryId
        ))
    );
  }


  /**
   * This function allows us to get a product by reference
   * @param id This reference of products
   * @returns ProductModel
   */
  public getProductByRef(productRef: String): Observable<ProductModel> {
    return this.http.get<ProductModel>(`http://localhost:8080/products/ref/${productRef}`).pipe(
      map(product =>
        new ProductModel(product.id,
          product.name,
          product.img,
          product.price,
          product.description,
          product.sku,
          product.seller,
          product.state,
          product.ref,
          product.categoryId
        ))
    );
  }

  /**
   * This function allows us to get a list of products
   * @returns List of products
   */
  public getProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:8080/products`).pipe(
      map(products => products.map(product => new ProductModel(
        product.id,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku,
        product.seller,
        product.state,
        product.ref,
        product.categoryId
      )))
    );
  }

  /**
   * This function allows us to create new product
   * @param product product to save
   * @returns created products
   */
  public saveProduct(product: ProductCreateDto): Observable<ProductCreateDto> {

    const formData: FormData = new FormData();

    // Append each property of the product to FormData
    formData.append('name', product.name);
    formData.append('price', product.price.toString());
    formData.append('description', product.description);
    formData.append('ref', product.ref);
    formData.append('sku', product.sku);
    formData.append('categoryId', product.categoryId.toString());
    formData.append('sellerId', product.sellerId.toString());
    // Append each image file as Blob
    for (let i = 0; i < product.img.length; i++) {
      const blob = new Blob([product.img[i]], {type: product.img[i].type});
      formData.append('img', blob, product.img[i].name);
    }
    // Set headers to specify multipart/form-data
    let headers = new HttpHeaders();

    headers = headers.append('Accept', 'application/json');
    return this.http.post<ProductCreateDto>(`http://localhost:8080/products`, product, {headers: headers}).pipe(
      map(product => new ProductCreateDto(
        product.name,
        product.img,
        product.price,
        product.ref,
        product.description,
        product.sku,
        product.sellerId,
        product.categoryId
      ))
    );
  }

  /**
   * this function allow us to delele product by id
   * @param id if of products
   * @returns
   */
  public deleteProduct(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`http://localhost:8080/products/${id}`, {observe: 'response'})
      .pipe(
        map(response => response.ok) // Extracting the boolean value based on response state
      );
  }


  /**
   * This function allows us to get a list of products by category id
   * @returns List of products
   */
  public getProductsByCategoryRef(category_ref: string): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:8080/products/category/${category_ref}`).pipe(
      map(products => products.map(product => new ProductModel(
        product.id,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku,
        product.seller,
        product.state,
        product.ref,
        product.categoryId
      )))
    );
  }

  /**
   * This function allows us to get list of products by seller id
   * @param sellerId The seller ID
   *
   */
  public getProductsBySellerId(sellerId: number): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`http://localhost:8080/products/seller/${sellerId}`).pipe(
      map(products => products.map(product => new ProductModel(
        product.id,
        product.name,
        product.img,
        product.price,
        product.description,
        product.sku,
        product.seller,
        product.state,
        product.ref,
        product.categoryId
      )))
    );
  }

}
