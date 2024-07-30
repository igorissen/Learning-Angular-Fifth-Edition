import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-bindings',
  standalone: true,
  imports: [],
  templateUrl: './bindings.component.html',
  styleUrl: './bindings.component.css'
})
export class BindingsComponent {
  @Input() title = '';
  @Output() liked = new EventEmitter();
}
