import { Injectable } from '@angular/core';
import {delay, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AsyncService {
  private items = ['Orange', 'Citrus', 'Ginger']

  constructor() {}

  getItems(): Observable<string[]> {
    return of(this.items).pipe(delay(500));
  }
}
