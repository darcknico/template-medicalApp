import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecordsRoutingModule } from './records-routing.module';
import { ListRecordsComponent } from './list-records/list-records.component';
import { StatsComponent } from './stats/stats.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    ListRecordsComponent,
    StatsComponent,
  ],
  imports: [
    CommonModule,
    RecordsRoutingModule,
    IonicModule,
    ComponentsModule,
  ]
})
export class RecordsModule { }
