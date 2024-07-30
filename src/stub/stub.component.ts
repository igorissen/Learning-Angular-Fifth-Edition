import {Component, OnInit} from "@angular/core";
import {StubService} from "./stub.service";

@Component({
  selector: 'app-stub',
  standalone: true,
  templateUrl: './stub.component.html',
})
export class StubComponent implements OnInit {
  message = '';

  constructor(
    private readonly stubService: StubService
  ) {}

  ngOnInit(): void {
    this.message = `${this.stubService.name} ${this.stubService.isBusy ? 'is on mission' : 'is available'}`;
  }
}
