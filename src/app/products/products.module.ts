import { NgModule } from '@angular/core';
import {ProductsService} from "./products.service";
import {OrdersModule} from "../orders/orders.module";

@NgModule({
  imports: [OrdersModule],
  providers: [ProductsService]
})
export class ProductsModule { }
