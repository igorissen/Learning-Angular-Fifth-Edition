import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Product} from "../product";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {SortPipe} from "../sort.pipe";
import {ProductHostDirective} from "../product-host.directive";
import {PermissionDirective} from "../permission.directive";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    PermissionDirective
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements AfterViewInit {
  products: Product[] = [
    {
      id: 1,
      title: 'Keyboard',
      price: 100,
      categories: {
        1: 'Computing',
        2: 'Peripherals'
      }
    },
    {
      id: 2,
      title: 'Microphone',
      price: 35,
      categories: {
        3: 'Multimedia'
      }
    },
    {
      id: 3,
      title: 'Web camera',
      price: 79,
      categories: {
        1: 'Computing',
        3: 'Multimedia'
      }
    },
    {
      id: 4,
      title: 'Tablet',
      price: 500,
      categories: {
        4: 'Entertainment'
      }
    }
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
