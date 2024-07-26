import {Component, Inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
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
    CopyrightDirective,
    AuthComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(
    @Inject(APP_SETTINGS) public readonly appSettings: AppSettings
  ) {}
}
