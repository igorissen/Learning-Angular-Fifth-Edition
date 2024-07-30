import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {Observable} from "rxjs";
import {AsyncService} from "./async.service";

@Component({
  selector: 'app-async',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './async.component.html',
  styleUrl: './async.component.css'
})
export class AsyncComponent implements OnInit {
  items$: Observable<string[]> | undefined;

  constructor(
    private readonly asyncService: AsyncService
  ) {}

  ngOnInit(): void {
    this.items$ = this.asyncService.getItems();
  }
}
