import {inject, Injectable} from '@angular/core';
import {Product} from "./product";
import {catchError, map, Observable, of, retry, tap, throwError} from "rxjs";
import {APP_SETTINGS} from "./app.settings";
import {HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode} from "@angular/common/http";

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
        }),
        retry(2),
        catchError(this.handleError)
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

  private handleError(error: HttpErrorResponse) {
    let message = '';

    switch (error.status) {
      case 0:
        message = 'Client error';
        break;
      case HttpStatusCode.InternalServerError:
        message = 'Server error';
        break;
      case HttpStatusCode.BadRequest:
        message = 'Request error';
        break;
      default:
        message = 'Unknown error';
    }

    console.error(message, error.error);

    return throwError(() => error);
  }
}
