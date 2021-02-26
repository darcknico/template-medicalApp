import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentsRoutingModule } from './appointments-routing.module';
import { IonicModule } from '@ionic/angular';
import { BookAppointmentsComponent } from './book-appointments/book-appointments.component';
import { ListAppointmentsComponent } from './list-appointments/list-appointments.component';
import { ComponentsModule } from '../components/components.module';
import { PaymentConfirmComponent } from './payment-confirm/payment-confirm.component';
import { PaymentApprovedComponent } from './payment-approved/payment-approved.component';
import { FeedbackAddComponent } from './feedback-add/feedback-add.component';
import { StarRatingModule } from 'ionic5-star-rating';

@NgModule({
  declarations: [
    BookAppointmentsComponent,
    ListAppointmentsComponent,
    PaymentConfirmComponent,
    PaymentApprovedComponent,
    FeedbackAddComponent,
  ],
  imports: [
    CommonModule,
    AppointmentsRoutingModule,
    IonicModule,
    ComponentsModule,
    StarRatingModule,
  ]
})
export class AppointmentsModule { }
