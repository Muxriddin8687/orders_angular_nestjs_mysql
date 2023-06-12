import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { FormsModule } from '@angular/forms';

import { ClientComponent } from './client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { OrdersComponent } from './pages/orders/orders.component';


@NgModule({
  declarations: [
    ClientComponent,
    SignInComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    FormsModule
  ]
})
export class ClientModule { }
