import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {Product} from "../product";
import {CartService} from "../cart.service";
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NumericDirective,
    MatFormField,
    MatLabel,
    MatInput
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });
  products: Product[] = [];

  constructor(
    private readonly cartService: CartService,
    private readonly productsService: ProductsService,
  ) {
  }

  ngOnInit() {
    this.getProducts();
    this.buildForm();
  }

  private getProducts(): void {
    this.productsService.getProducts().subscribe(products => {
      this.cartService.cart?.products.forEach(item => {
        const product = products.find(product => product.id === item.productId)
        if (product) {
          this.products.push(product)
        }
      })
    });
  }

  private buildForm() {
    this.products.forEach(() => {
      this.cartForm.controls.products.push(new FormControl<number>(1, {nonNullable:true}))
    })
  }
}
