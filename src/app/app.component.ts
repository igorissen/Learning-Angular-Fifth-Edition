import {Component, Inject} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CopyrightDirective} from "./copyright.directive";
import {APP_SETTINGS, AppSettings} from "./app.settings";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth/auth.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ProductListComponent,
    CopyrightDirective,
    AuthComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    @Inject(APP_SETTINGS) public readonly appSettings: AppSettings
  ) {}
}
