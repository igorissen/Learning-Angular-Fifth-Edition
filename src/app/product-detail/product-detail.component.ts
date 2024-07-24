import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output, SimpleChanges
} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges, OnDestroy {
  @Input() product: Product | undefined;
  @Output() added: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() {
    console.log('[constructor] Product:', this.product);
  }

  ngOnInit() {
    console.log('[ngOnInit] Product:', this.product);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const product = changes['product'];

    if (!product.isFirstChange()) {
      const oldValue = product.previousValue;
      const newValue = product.currentValue;

      console.log({ oldValue, newValue });
    }
  }

  ngOnDestroy() {
    console.log('ProductDetailComponent destroyed!')
  }

  get productTitle(): string | undefined {
    return this.product?.title;
  }

  addToCart(): void {
    this.added.emit(this.product);
  }
}
