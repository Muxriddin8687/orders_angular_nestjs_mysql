import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DelivererComponent } from './deliverer.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { DelivererGuard } from './deliverer.guard';

const routes: Routes = [
  {
    path: '', component: DelivererComponent, children: [
      { path: 'sigin', component: SignInComponent },
      { path: 'orders', component: OrdersComponent, canActivate: [DelivererGuard] },

      { path: '', redirectTo: 'sigin', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DelivererRoutingModule { }
