import {Component} from '@angular/core';
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {Router} from "@angular/router";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-create',
  standalone: true,
  imports: [
    NumericDirective,
    ReactiveFormsModule
  ],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css'
})
export class ProductCreateComponent {
  productForm = new FormGroup({
    title: new FormControl('', { nonNullable: true}),
    price: new FormControl<number | undefined>(undefined, {nonNullable:true}),
    category: new FormControl('', { nonNullable: true}),
    extra: new FormGroup({
      image: new FormControl(''),
      description: new FormControl(''),
    })
  });

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router
  ) {
  }

  createProduct(): void {
    this.productsService
      .addProduct(this.productForm.value)
      .subscribe(() => this.router.navigate(['/products']));
  }
}
