import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from 'src/app/modules/HomeUser/appointment/appointment.component';
import { AppointmentTableComponent } from './appointment/appointment-table/appointment-table.component';
import { BlockedComponent } from './blocked/blocked.component';
// import { AppointmentComponent } from './appointment/appointment.component';
import { DashboardComponent } from './dashboard.component';
import { AddDocComponent } from './dashComponents/add-doc/add-doc.component';
import { AddEmpComponent } from './dashComponents/add-emp/add-emp.component';
import { AddPatientComponent } from './dashComponents/add-patient/add-patient.component';
import { MainComponent } from './main/main.component';
import { PendingComponent } from './pending/pending.component';
import { ReportComponent } from './report/report.component';


const routes : Routes = [
  { path: '', component:DashboardComponent , children:[
    { path: 'main', component: MainComponent },
    { path: 'pending', component: PendingComponent },
    { path: 'blocked', component: BlockedComponent },
    { path: 'report', component: ReportComponent },
    { path: 'add-doctor', component: AddDocComponent },
    { path: 'add-patient', component: AddPatientComponent },
    { path: 'add-employee', component: AddEmpComponent },
    { path: 'edit-doctor/:id', component: AddDocComponent },
    { path: 'edit-patient/:id', component: AddPatientComponent },
    { path: 'edit-employee/:id', component: AddEmpComponent },    
    { path: 'report', component: ReportComponent },
    { path:'medicines',loadChildren:()=>import('./medicine/medicine.module').then(m=>m.MedicineModule)},
    { path: 'appointments', loadChildren:()=>import('./appointment/appointment.module').then(m=>m.AppointmentModule)} ,
    { path: 'invoices', loadChildren:()=>import('./invoice/invoice.module').then(m=>m.InvoiceModule)} ,
    { path: '', redirectTo :'main', pathMatch:"full" },

  ]},
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
