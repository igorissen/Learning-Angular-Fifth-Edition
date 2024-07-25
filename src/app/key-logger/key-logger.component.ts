import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {filter, fromEvent, map, tap} from "rxjs";

@Component({
  selector: 'app-key-logger',
  standalone: true,
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css'
})
export class KeyLoggerComponent implements OnInit {
  @ViewChild('keyContainer', {static: true}) input: ElementRef | undefined;

  @Input() numeric = false;

  keys = '';

  ngOnInit() {
    const logger$ = fromEvent<KeyboardEvent>(this.input?.nativeElement, 'keyup');
    logger$
      .pipe(
        map(event => event.key.charCodeAt(0)),
        filter(code => {
          if (!this.numeric) return true;
          return !(code > 31 && (code < 48 || code > 57));
        }),
        tap(digit => this.keys += String.fromCharCode(digit))
      )
      .subscribe();
  }
}
