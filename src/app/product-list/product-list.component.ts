import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Product} from "../product";
import {ProductDetailComponent} from "../product-detail/product-detail.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    { id: 1, title: 'Keyboard' },
    { id: 2, title: 'Microphone' },
    { id: 3, title: 'Web camera' },
    { id: 4, title: 'Tablet' },
  ];
  selectedProduct: Product | undefined;

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  ngAfterViewInit() {
    console.log('[ProductListComponent:ngAfterViewInit] Product:', this.productDetail?.product);
  }

  onAdded(product: Product): void {
    alert(`${product.title} added to the cart!`)
  }
}
