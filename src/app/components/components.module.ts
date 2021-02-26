import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { VerificationInputComponent } from './verification-input/verification-input.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import localeEs from '@angular/common/locales/es';
import { ItemAppointmentComponent } from './item-appointment/item-appointment.component';
import { StarRatingModule } from 'ionic5-star-rating';
import { ItemRecordComponent } from './item-record/item-record.component';
import { ItemForumComponent } from './item-forum/item-forum.component';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    VerificationInputComponent,
    ItemAppointmentComponent,
    ItemRecordComponent,
    ItemForumComponent,
  ],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StarRatingModule,

  ],
  exports: [
    VerificationInputComponent,
    ItemAppointmentComponent,
    ItemRecordComponent,
    ItemForumComponent,
  ],
  providers: [
    //{ provide: LOCALE_ID, useValue: 'es'},
  ]
})
export class ComponentsModule { }
