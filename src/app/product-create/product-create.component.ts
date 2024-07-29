import {Component} from '@angular/core';
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {priceMaximumValidator} from "../price-maximum.validator";
import {MatButton} from "@angular/material/button";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    NumericDirective,
    ReactiveFormsModule,
    MatButton,
    MatFormField,
    MatLabel,
    MatInput,
    MatError,
    MatSelect,
    MatOption
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  productForm = new FormGroup({
    title: new FormControl('', {
      nonNullable: true,
      validators: Validators.required
    }),
    price: new FormControl<number | undefined>(undefined, {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.min(1),
        priceMaximumValidator(1000)
      ]
    }),
    category: new FormControl('', {
      nonNullable: true
    }),
  });

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {}

  /*ngOnInit() {
    this.productForm.controls.category.valueChanges.subscribe(() => {
      this.productForm.controls.price.reset();
    })
  }*/

  createProduct(): void {
    this.productsService
      .addProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
