import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DelivererRoutingModule } from './deliverer-routing.module';
import { DelivererComponent } from './deliverer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DelivererComponent,
    SignInComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    DelivererRoutingModule,
    FormsModule
  ]
})
export class DelivererModule { }
