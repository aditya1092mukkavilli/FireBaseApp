import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { RegisterationComponent } from './registeration/registeration.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: RegisterationComponent },
  { path: 'dashbordPage', component:DashboardpageComponent }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
