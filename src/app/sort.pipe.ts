import { Pipe, PipeTransform } from '@angular/core';
import {Product} from "./product";

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Product[]): Product[] {
    if (!value) return [];

    return value.sort((a: Product, b: Product): number => {
      if (a.title < b.title) return -1;
      if (b.title > a.title) return 1;
      return 0
    });
  }

}
