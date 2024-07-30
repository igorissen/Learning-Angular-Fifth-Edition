import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
