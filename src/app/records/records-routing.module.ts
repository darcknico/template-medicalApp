import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListRecordsComponent } from './list-records/list-records.component';
import { StatsComponent } from './stats/stats.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'list',
    pathMatch: 'full'
  },
  {
    path:'list',
    component:ListRecordsComponent,
  },
  {
    path:'stats',
    component:StatsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
