import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appNumeric]',
  standalone: true
})
export class NumericDirective {
  @HostBinding('class') currentClass = '';

  constructor() { }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key.charCodeAt(0);

    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      event.preventDefault();
      this.currentClass = 'invalid';
    } else {
      this.currentClass = 'valid';
    }
  }
}
