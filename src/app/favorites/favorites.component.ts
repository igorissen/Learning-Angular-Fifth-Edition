import {Component, OnInit, Self} from '@angular/core';
import {Product} from "../product";
import {ProductsService} from "../products/products.service";
//import {FavoritesService} from "../favorites.service";
import {favoritesFactory} from "../favorites";

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
  providers: [
    //{ provide: ProductsService, useClass: FavoritesService }
    { provide: ProductsService, useFactory: favoritesFactory(true) }
  ]
})
export class FavoritesComponent implements OnInit {
  products: Product[] = [];

  constructor(@Self() private readonly productsService: ProductsService) {
  }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }
}
