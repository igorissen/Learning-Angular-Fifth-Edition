import {AfterViewInit, Component, inject, OnInit, ViewChild} from '@angular/core';
import {Product} from "../product";
import {ProductDetailComponent} from "../product-detail/product-detail.component";
import {SortPipe} from "../sort.pipe";
import {ProductHostDirective} from "../product-host.directive";
import {PermissionDirective} from "../permission.directive";
import {ProductsService} from "../products/products.service";
import {FavoritesComponent} from "../favorites/favorites.component";
import {ProductViewComponent} from "../product-view/product-view.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductDetailComponent,
    SortPipe,
    ProductHostDirective,
    PermissionDirective,
    FavoritesComponent,
    ProductViewComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, AfterViewInit {
  products: Product[] = [];
  selectedProduct: Product | undefined;

  private readonly productsService;

  @ViewChild(ProductDetailComponent) productDetail: ProductDetailComponent | undefined;

  // constructor(private readonly productsService: ProductsService) {}
  constructor() {
    this.productsService = inject(ProductsService);
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  ngAfterViewInit() {
    console.log('[ProductListComponent:ngAfterViewInit] Product:', this.productDetail?.product);
  }

  onAdded(product: Product): void {
    alert(`${product.title} added to the cart!`)
  }
}
