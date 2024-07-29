import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [MatDialogModule, MatButton],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}
}
