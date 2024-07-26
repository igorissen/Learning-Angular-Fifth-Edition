import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {SortPipe} from "../sort.pipe";
import {ProductsService} from "../products.service";
import {ProductCreateComponent} from "../product-create/product-create.component";
import {Observable} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent,
    SortPipe,
    ProductCreateComponent,
    CommonModule
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined
  selectedProduct: Product | undefined;

  constructor(
    private readonly productsService: ProductsService
  ) {}

  ngOnInit() {
    this.products$ = this.productsService.getProducts();
  }

  onAdded(): void {
    alert(`${this.selectedProduct?.title} added to the cart!`)
  }
}
