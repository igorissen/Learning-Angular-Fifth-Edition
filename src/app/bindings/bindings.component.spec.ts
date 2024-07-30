import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingsComponent } from './bindings.component';
import {Component} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('BindingsComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindingsComponent, TestHostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('displays title', () => {
    const title = fixture.nativeElement.querySelector('p');
    expect(title.textContent).toEqual('My Test Title');
  });

  it('emits the like event', () => {
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.isFavorite).toBeTrue();
  });

  it('emits the like event using debugElement', () => {
    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click');
    expect(component.isFavorite).toBeTrue();
  });
});

@Component({
  imports:[BindingsComponent],
  standalone: true,
  template: '<app-bindings [title]="testTitle" (liked)="isFavorite = true" />'
})
class TestHostComponent {
  testTitle = 'My Test Title';
  isFavorite = false;
}
