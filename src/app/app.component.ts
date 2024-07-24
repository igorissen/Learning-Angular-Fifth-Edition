import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CopyrightDirective} from "./copyright.directive";
import {NumericDirective} from "./numeric.directive";
import {PermissionDirective} from "./permission.directive";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, NumericDirective, PermissionDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learning-Angular-Fifth-Edition';
}
