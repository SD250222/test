import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashBoardComponent} from './theme/dash-board/dash-board.component';

const routes: Routes = [
  {
    path:'dash',
    component:DashBoardComponent
  },

  {
    path: "",
    redirectTo: "dash",
    pathMatch: "full",   
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
