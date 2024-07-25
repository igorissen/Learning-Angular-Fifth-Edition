import {Component, Input, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import {ProductViewService} from "../product-view.service";
import {Product} from "../product";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers:[ProductViewService]
})
export class ProductViewComponent implements OnInit, OnDestroy {
  @Input() id: number | undefined;

  product: WritableSignal<Product | undefined> = signal(undefined);

  private product$ = new Subject<void>();

  constructor(private readonly productViewService: ProductViewService) {}

  ngOnInit() {
    this.getProduct();
  }

  ngOnDestroy() {
    this.product$.next();
    this.product$.complete();
  }

  private getProduct() {
    this.productViewService
      .getProduct(this.id!)
      .pipe(
        takeUntil(this.product$)
      )
      .subscribe(product => this.product.set(product));
  }
}
