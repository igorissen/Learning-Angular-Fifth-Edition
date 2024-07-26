import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../products.service";
import {NumericDirective} from "../numeric.directive";
import {Router} from "@angular/router";
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";

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
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup<{
    title: FormControl<string>,
    price: FormControl<number | undefined>,
    category: FormControl<string>,
  }> | undefined;

  constructor(
    private readonly productsService: ProductsService,
    private readonly router: Router,
    private readonly formBuilder: FormBuilder,
  ) {
  }

  ngOnInit() {
    this.buildForm();
  }

  createProduct(): void {
    this.productsService
      .addProduct(this.productForm!.value)
      .subscribe(() => this.router.navigate(['/products']));
  }

  private buildForm(): void {
    this.productForm = this.formBuilder.nonNullable.group({
      title: [''],
      price: this.formBuilder.nonNullable.control<number | undefined>(undefined),
      category: ['']
    })
  }
}
