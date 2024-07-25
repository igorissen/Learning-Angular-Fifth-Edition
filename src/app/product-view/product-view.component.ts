import {Component, Input, OnInit} from '@angular/core';
import {ProductViewService} from "../product-view.service";
import {Product} from "../product";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers:[ProductViewService]
})
export class ProductViewComponent implements OnInit {
  @Input() id: number | undefined;

  product: Product | undefined;

  constructor(private readonly productViewService: ProductViewService) {}

  ngOnInit() {
    this.product = this.productViewService.getProduct(this.id!)
  }
}
