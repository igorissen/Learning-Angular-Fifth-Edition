import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpyComponent } from './spy.component';
import {Title} from "@angular/platform-browser";

describe('SpyComponent', () => {
  let component: SpyComponent;
  let fixture: ComponentFixture<SpyComponent>;;

  it('updates application title', async () => {
    await TestBed.configureTestingModule({
      imports: [SpyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SpyComponent);
    component = fixture.componentInstance;
    const title = TestBed.inject(Title);
    const spy = spyOn(title, 'setTitle');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith('My Angular app');
  });

  it('retrieves the application title', async () => {
    const titleSpy = jasmine.createSpyObj('Title', ['getTitle', 'setTitle']);
    titleSpy.getTitle.and.returnValue('My title');

    await TestBed.configureTestingModule({
      imports: [SpyComponent],
      providers: [
        { provide: Title, useValue: titleSpy }
      ]
    })
      .compileComponents();
    const fixture = TestBed.createComponent(SpyComponent);
    fixture.detectChanges();

    expect(fixture.nativeElement.textContent).toContain('My title');
  });
});
