import { Injectable } from '@angular/core';
import {ProductsService} from "./products/products.service";
import {Product} from "./product";
import {Observable, of, switchMap} from "rxjs";

@Injectable()
export class ProductViewService {
  private product: Product | undefined;

  constructor(private readonly productsService: ProductsService) { }

  getProduct(id: number): Observable<Product | undefined> {
    return this.productsService.getProducts()
      .pipe(
        switchMap(products => {
          if (!this.product) {
            this.product = products.find((product) => product.id === id);
          }

          return of(this.product);
        })
      );
  }
}
