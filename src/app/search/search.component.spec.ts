import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import {ReactiveFormsModule} from "@angular/forms";

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchComponent, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('creates component', () => {
    expect(component).toBeTruthy();
  });

  it('sets the searchText', () => {
    const input = fixture.nativeElement.querySelector('input');

    input.value = 'Angular';
    input.dispatchEvent(new CustomEvent('input'));

    expect(component.searchForm.controls.searchText.value).toBe('Angular');
  });

  it('disables the search button', () => {
    const button = fixture.nativeElement.querySelector('button');
    component.searchForm.controls.searchText.setValue('');

    expect(button.disabled).toBeTrue();
  });

  it('logs to the console', () => {
    const button = fixture.nativeElement.querySelector('button');
    const spy = spyOn(console, 'log');
    component.searchForm.controls.searchText.setValue('Angular');
    fixture.detectChanges();
    button.click();

    expect(spy).toHaveBeenCalledWith('You searched for: Angular');
  });
});
