import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepsService {
  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  getItems() {
    return this.httpClient.get('https://google.be');
  }

  addItem(item: string) {
    return this.httpClient.post('https://google.be', {name: item});
  }
}
