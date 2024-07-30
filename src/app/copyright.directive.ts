import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[appCopyright]',
  standalone: true
})
export class CopyrightDirective {

  constructor(public elementRef: ElementRef) {
    const currentYear = new Date().getFullYear();
    const targetElement = elementRef.nativeElement;

    targetElement.classList.add('copyright');
    targetElement.textContent = `Copyright ${currentYear} All Rights Reserved.`;
  }

}
