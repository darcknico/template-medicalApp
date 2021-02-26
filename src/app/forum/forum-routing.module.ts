import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeForumComponent } from './home-forum/home-forum.component';

const routes: Routes = [
  {
    path:'',
    component:HomeForumComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForumRoutingModule { }
