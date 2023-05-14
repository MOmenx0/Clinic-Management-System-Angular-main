import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';


const routes: Routes = [

  {path:"list",component:AppointmentTableComponent},
  {path:"",component:AppointmentTableComponent},
  {path:"details/:id",component:AppointmentDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
