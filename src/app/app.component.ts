import {Component, computed, Inject, Signal, signal, WritableSignal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CopyrightDirective} from "./copyright.directive";
import {NumericDirective} from "./numeric.directive";
import {PermissionDirective} from "./permission.directive";
import {APP_SETTINGS, AppSettings, appSettings} from "./app.settings";
import {ProductsModule} from "./products/products.module";
import {from, Observable} from "rxjs";
import {KeyLoggerComponent} from "./key-logger/key-logger.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective, NumericDirective, PermissionDirective, ProductsModule, KeyLoggerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    {provide: APP_SETTINGS, useValue: appSettings}
  ]
})
export class AppComponent {
  title: Signal<string>;
  currentDate: WritableSignal<Date> = signal(new Date());

  title$ = new Observable(observer => {
    setInterval(() => observer.next(), 2000);
  })

  constructor(@Inject(APP_SETTINGS) public readonly appSettings: AppSettings) {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.appSettings.title} (${this.currentDate()})`
    });
  }

  private setTitle = () => {
    //this.title = `${this.appSettings.title} (${new Date()})`;
    this.currentDate.update(() => new Date());
  }
}
