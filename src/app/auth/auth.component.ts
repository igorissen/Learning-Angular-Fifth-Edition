import {Component} from '@angular/core';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {
  constructor(
    public readonly authService: AuthService,
  ) {}

  login(): void {
    this.authService.login('david_r', '3478*#54').subscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
