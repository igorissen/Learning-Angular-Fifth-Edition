import { CopyrightDirective } from './copyright.directive';
import {Component} from "@angular/core";
import {TestBed} from "@angular/core/testing";

describe('CopyrightDirective', () => {
  let container: HTMLElement;

  beforeEach(() => {
    const fixture = TestBed.configureTestingModule({
      imports: [CopyrightDirective, TestHostComponent]
    }).createComponent(TestHostComponent);
    container = fixture.nativeElement.querySelector('span');
  })

  it('have copyright class', () => {
    expect(container.classList).toContain('copyright');
  });

  it('displays copyright details', () => {
    expect(container.textContent).toContain(new Date().getFullYear().toString())
  });
});

@Component({
  standalone: true,
  imports: [CopyrightDirective],
  template: '<span appCopyright></span>'
})
class TestHostComponent {}
