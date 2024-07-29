import {Component, Inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CopyrightDirective} from "./copyright.directive";
import {APP_SETTINGS, AppSettings} from "./app.settings";
import {CommonModule} from "@angular/common";
import {AuthComponent} from "./auth/auth.component";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {CartService} from "./cart.service";
import {MatBadge} from "@angular/material/badge";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    CopyrightDirective,
    AuthComponent,
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatToolbarRow,
    MatButton,
    MatBadge
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    @Inject(APP_SETTINGS) public readonly appSettings: AppSettings,
    public readonly cartService: CartService
  ) {}
}
