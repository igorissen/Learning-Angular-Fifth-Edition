import {inject, Injectable} from '@angular/core';
import {Cart} from './cart';
import {APP_SETTINGS} from "./app.settings";
import {HttpClient} from "@angular/common/http";
import {defer, map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart | undefined;

  private cartUrl = inject(APP_SETTINGS).apiUrl + '/carts';

  constructor(
    private readonly httpClient: HttpClient,
  ) {
  }

  addProduct(id: number): Observable<Cart> {
    const cartProduct = {productId: id, quantity: 1};

    return defer(() => {
      if (!this.cart) {
        return this.httpClient.post<Cart>(this.cartUrl, {products: [cartProduct]});
      }

      return this.httpClient.put<Cart>(`${this.cartUrl}/${id}`, {products: [...this.cart.products, cartProduct]});
    }).pipe(map(cart => this.cart = cart));
  }
}
