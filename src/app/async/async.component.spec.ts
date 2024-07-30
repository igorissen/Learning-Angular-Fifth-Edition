import {ComponentFixture, fakeAsync, TestBed, tick, waitForAsync} from '@angular/core/testing';

import { AsyncComponent } from './async.component';

describe('AsyncComponent', () => {
  let component: AsyncComponent;
  let fixture: ComponentFixture<AsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsyncComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncComponent);
    component = fixture.componentInstance;
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('retrieves data with "waitAsync"', waitForAsync(async () => {
    fixture.detectChanges();

    await fixture.whenStable();
    fixture.detectChanges();

    const itemDisplay = fixture.nativeElement.querySelectorAll('p');

    expect(itemDisplay.length).toBe(3);
  }));

  it('retrieves data with "fakeAsync"', fakeAsync(() => {
    fixture.detectChanges();
    tick(500);
    fixture.detectChanges();

    const itemDisplay = fixture.nativeElement.querySelectorAll('p');

    expect(itemDisplay.length).toBe(3);
  }));
});
