import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { NotificationComponent } from './notification/notification.component';
import { ComponentsModule } from '../components/components.module';
import { IonicModule } from '@ionic/angular';
import { SettingsComponent } from './settings/settings.component';


@NgModule({
  declarations: [
    NotificationComponent,
    SettingsComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    IonicModule,
    ComponentsModule,
  ]
})
export class PagesModule { }
