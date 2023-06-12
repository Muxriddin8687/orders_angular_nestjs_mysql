import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ReportComponent } from './pages/report/report.component';
import { DelivererComponent } from './pages/deliverer/deliverer.component';
import { AuthComponent } from './pages/auth/auth.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent, children: [
      { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
      { path: 'report', component: ReportComponent, canActivate: [AuthGuard] },
      { path: 'deliverer', component: DelivererComponent, canActivate: [AuthGuard] },
      { path: 'login', component: AuthComponent },

      { path: '', redirectTo: 'login', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
