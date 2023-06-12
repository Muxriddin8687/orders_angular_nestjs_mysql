import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ClientGuard } from './client.guard';

const routes: Routes = [
  {
    path: '', component: ClientComponent, children: [
      { path: 'sigin', component: SignInComponent },
      { path: 'orders', component: OrdersComponent, canActivate: [ClientGuard] },

      { path: '', redirectTo: 'sigin', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
