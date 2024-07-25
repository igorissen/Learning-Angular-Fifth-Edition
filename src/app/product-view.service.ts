import { Injectable } from '@angular/core';
import {ProductsService} from "./products.service";
import {Product} from "./product";

@Injectable()
export class ProductViewService {
  private product: Product | undefined;

  constructor(private readonly productsService: ProductsService) { }

  getProduct(id: number): Product | undefined {
    const products = this.productsService.getProducts();

    if (!this.product) {
      this.product = products.find((product) => product.id === id);
    }

    return this.product;
  }
}
