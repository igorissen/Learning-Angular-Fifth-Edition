import { Component } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchForm = new FormGroup({
    searchText: new FormControl('', Validators.required)
  })

  public search(): void {
    if (this.searchForm.valid) {
      console.log(`You searched for: ${this.searchForm.controls.searchText.value}`);
    }
  }
}
