import {Component, OnInit} from '@angular/core';
import {Product} from "../product";
import {SortPipe} from "../sort.pipe";
import {ProductsService} from "../products.service";
import {Observable, of, switchMap} from "rxjs";
import {CommonModule} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {MatIcon} from "@angular/material/icon";
import {MatMiniFabButton} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggle, MatButtonToggleGroup} from "@angular/material/button-toggle";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    SortPipe,
    CommonModule,
    RouterLink,
    MatIcon,
    MatMiniFabButton,
    MatCardModule,
    MatTableModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products$: Observable<Product[]> | undefined
  columnNames = ['title', 'price'];

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
