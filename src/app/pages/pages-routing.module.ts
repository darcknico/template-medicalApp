import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotificationComponent } from './notification/notification.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  {
    path:'settings',
    component:SettingsComponent,
  },
  {
    path:'notification',
    component:NotificationComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
