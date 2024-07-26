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

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    NumericDirective
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {
  @Input() id: string | undefined;
  @Output() added: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removed = new EventEmitter<void>();

  product$: Observable<Product | undefined> | undefined;

  constructor(
    private readonly productsService: ProductsService,
    public readonly authService: AuthService,
    private readonly router: Router,
  ) {
  }

  ngOnInit() {
    this.product$ = this.productsService.getProduct(Number(this.id!))
  }

  addToCart(): void {}

  changePrice(product: Product, price: string): void {
    this.productsService.updateProduct(product.id, Number(price)).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }

  remove(product: Product): void {
    this.productsService.removeProduct(product.id).subscribe(() => {
      this.router.navigate(['/products']);
    })
  }
}
