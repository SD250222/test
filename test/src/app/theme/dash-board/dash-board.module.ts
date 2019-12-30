import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import {dashboardService} from './dash-board.service';
import { DashBoardComponent } from './dash-board.component';

const routes: Routes = [
    { path: 'dash', component: DashBoardComponent },
  ];


@NgModule({

  imports: [
    FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashBoardComponent],
  providers:[dashboardService]
})
export class dashModule { }
