import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {SortPipe} from "../sort.pipe";
import {ProductsService} from "../products.service";
import {Observable, of, switchMap} from "rxjs";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SortPipe,
    CommonModule,
    RouterLink
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined

  constructor(
    private readonly productsService: ProductsService,
    private readonly activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
    this.products$ = this.activatedRoute.data.pipe(
      switchMap(data => {
        return of(data['products'])
      })
    );
  }
}
