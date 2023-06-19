import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MainlayoutComponent } from './layouts/mainlayout/mainlayout.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { BookingComponent } from './booking/booking.component';
import { AdminComponent } from './admin/admin.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashComponent},
 
    {path:'booking',component:BookingComponent},
  
  {path:'mainlayout',component:MainlayoutComponent},
  {path:'admin', component:AdminComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
