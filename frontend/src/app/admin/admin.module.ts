import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReportComponent } from './pages/report/report.component';
import { DelivererComponent } from './pages/deliverer/deliverer.component';
import { ModalComponent } from './components/modal/modal.component';
import { AuthComponent } from './pages/auth/auth.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavbarComponent,
    DashboardComponent,
    ReportComponent,
    DelivererComponent,
    ModalComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
