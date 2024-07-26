import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import {Product} from "../product";
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {AuthService} from "../auth.service";

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
export class ProductDetailComponent implements OnChanges {
  @Input() id: number | undefined;
  @Output() added: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() removed = new EventEmitter<void>();

  product$: Observable<Product | undefined> | undefined;

  constructor(
    private readonly productsService: ProductsService,
    public readonly authService: AuthService,
  ) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes)
    this.product$ = this.productsService.getProduct(this.id!);
  }

  addToCart(): void {
    this.added.emit();
  }

  changePrice(product: Product, price: string): void {
    this.productsService.updateProduct(product.id, Number(price)).subscribe()
  }

  remove(product: Product): void {
    this.productsService.removeProduct(product.id).subscribe(() => {
      this.removed.emit();
    })
  }
}
