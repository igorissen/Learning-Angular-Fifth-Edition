import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Product} from "../product";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CartService} from "../cart.service";
import {PriceMaximumDirective} from "../price-maximum.directive";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    NumericDirective,
    FormsModule,
    PriceMaximumDirective
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string | undefined;
  @Output() added: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removed = new EventEmitter<void>();

  product$: Observable<Product | undefined> | undefined;
  price: number | undefined;

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly cartService: CartService,
    public readonly authService: AuthService,
  ) {
  }

  ngOnInit() {
    this.product$ = this.productsService.getProduct(Number(this.id!))
  }

  addToCart(id: number): void {
    this.cartService.addProduct(id).subscribe();
  }

  changePrice(product: Product): void {
    this.productsService.updateProduct(product.id, this.price!).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }

  remove(product: Product): void {
    this.productsService.removeProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }
}
