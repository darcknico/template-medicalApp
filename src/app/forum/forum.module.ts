import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForumRoutingModule } from './forum-routing.module';
import { HomeForumComponent } from './home-forum/home-forum.component';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    HomeForumComponent,
  ],
  imports: [
    CommonModule,
    ForumRoutingModule,
    IonicModule,
    ComponentsModule,
  ]
})
export class ForumModule { }
