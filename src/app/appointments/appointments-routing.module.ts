import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookAppointmentsComponent } from './book-appointments/book-appointments.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { PaymentApprovedComponent } from './payment-approved/payment-approved.component';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch: 'full'
  },
  {
    path:'list',
    component:ListAppointmentsComponent,
  },
  {
    path:'book',
    component:BookAppointmentsComponent,
  },
  {
    path:'payment',
    component:PaymentConfirmComponent,
  },
  {
    path:'payment/approved',
    component:PaymentApprovedComponent,
  },
  {
    path:'feedback',
    component:FeedbackAddComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentsRoutingModule { }
