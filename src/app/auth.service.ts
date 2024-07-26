import {computed, inject, Injectable, signal} from '@angular/core';
import {APP_SETTINGS} from "./app.settings";
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessToken = signal('');
  private authUrl = inject(APP_SETTINGS).apiUrl + '/auth';

  isLoggedIn = computed(() => this.accessToken() !== '');

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  login(username: string, password: string): Observable<string> {
    return this.httpClient.post<string>(this.authUrl+'/login', {username, password})
      .pipe(
        tap(token => this.accessToken.update(() => token))
      )
  }

  logout() {
    this.accessToken.update(() => '');
  }
}
