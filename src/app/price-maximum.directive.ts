import {Directive, Input, numberAttribute} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from "@angular/forms";
import {priceMaximumValidator} from "./price-maximum.validator";

@Directive({
  selector: '[appPriceMaximum]',
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: PriceMaximumDirective,
      multi: true
    }
  ]
})
export class PriceMaximumDirective implements Validator {
  @Input({ alias:'threshold', transform: numberAttribute }) appPriceMaximum: number | undefined;

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.appPriceMaximum) return null;
    return priceMaximumValidator(this.appPriceMaximum)(control);
  }
}
