import {inject, Injectable} from '@angular/core';
import {Product} from "./product";
import {map, Observable, of, tap} from "rxjs";
import {APP_SETTINGS} from "./app.settings";
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private productsUrl = inject(APP_SETTINGS).apiUrl + '/products';
  private products: Product[] = [];

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  getProducts(limit?: number): Observable<Product[]> {
    if (this.products.length) return of(this.products);

    const options = new HttpParams().set('limit', limit || 10);
    return this.httpClient
      .get<Product[]>(this.productsUrl, {params: options})
      .pipe(
        map(products => {
          this.products = products;
          return products;
        })
      );
  }

  getProduct(id: number): Observable<Product | undefined> {
    const product = this.products.find((product) => product.id === id);
    return of(product);
  }

  addProduct(newProduct: Partial<Product>):Observable<Product> {
    return this.httpClient
      .post<Product>(this.productsUrl, newProduct)
      .pipe(
        map(product => {
          this.products.push(product);
          return product
        })
      );
  }

  updateProduct(id: number, price: number): Observable<Product> {
    return this.httpClient.patch<Product>(`${this.productsUrl}/${id}`, { price })
      .pipe(
        map(product => {
          const index = this.products.findIndex(product => product.id === id);
          this.products[index].price = price;
          return product;
        })
      );
  }

  removeProduct(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.productsUrl}/${id}`)
      .pipe(
        tap(() => {
          const index = this.products.findIndex(product => product.id === id);
          this.products.splice(index, 1);
        })
      )
  }
}
