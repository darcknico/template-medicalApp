import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalRoutingModule } from './external-routing.module';
import { IonicModule } from '@ionic/angular';
import { IntroComponent } from './intro/intro.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { VerificationComponent } from './verification/verification.component';
import { LocationComponent } from './location/location.component';
import { LocationMapComponent } from './location-map/location-map.component';
import { NgxMaskModule } from 'ngx-mask';


@NgModule({
  declarations: [
    IntroComponent,
    LoginComponent,
    RegisterComponent,
    VerificationComponent,
    LocationComponent,
    LocationMapComponent,
  ],
  imports: [
    CommonModule,
    ExternalRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    NgxMaskModule,
  ]
})
export class ExternalModule { }
