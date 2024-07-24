import {Directive, OnInit, ViewContainerRef} from '@angular/core';
import {ProductDetailComponent} from "./product-detail/product-detail.component";

@Directive({
  selector: '[appProductHost]',
  standalone: true
})
export class ProductHostDirective implements OnInit {
  constructor(private readonly viewContainerRef: ViewContainerRef) { }

  ngOnInit() {
    const productRef = this.viewContainerRef.createComponent(ProductDetailComponent);

    productRef.setInput('product', {
      title: 'Optical mouse',
      price: 130,
      categories: { 1: 'Computing' }
    })
  }
}
