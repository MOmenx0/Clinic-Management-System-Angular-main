import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { DashboardComponent } from './dashboard.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';
import {DashboardRoutingModule} from './dashboard-routing.module';
import { ReportComponent } from './report/report.component';
import { PendingComponent } from './pending/pending.component'
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatTabsModule} from '@angular/material/tabs';
//import { HomeComponent } from '../../components/home/home.component';
import { PendingDocComponent } from './dashComponents/pending-doc/pending-doc.component';
import { PendingEmpComponent } from './dashComponents/pending-emp/pending-emp.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ActiveDocComponent } from './dashComponents/active-doc/active-doc.component';
import { ActiveEmpComponent } from './dashComponents/active-emp/active-emp.component';
import { ActivePatientComponent } from './dashComponents/active-patient/active-patient.component';
import { AcceptPopupComponent } from './dashComponents/accept-popup/accept-popup.component';
import {  MdbModalService } from 'mdb-angular-ui-kit/modal';
import { ViewDoctorComponent } from './dashComponents/view-doctor/view-doctor.component';
import { ViewEmpComponent } from './dashComponents/view-emp/view-emp.component';
import { ViewPatientComponent } from './dashComponents/view-patient/view-patient.component';
import { AddDocComponent } from './dashComponents/add-doc/add-doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { AddPatientComponent } from './dashComponents/add-patient/add-patient.component';
import { AddEmpComponent } from './dashComponents/add-emp/add-emp.component';
import { BlockedComponent } from './blocked/blocked.component';
import { BlockedEmpComponent } from './dashComponents/blocked-emp/blocked-emp.component';
import { BlockedPatientComponent } from './dashComponents/blocked-patient/blocked-patient.component';
import { BlockedDocComponent } from './dashComponents/blocked-doc/blocked-doc.component';
import { InvoiceComponent } from './invoice/invoice-table/invoice.component';
import { InvoiceViewComponent } from './invoice/invoice-view/invoice-view.component'

@NgModule({
  declarations: [
    MainComponent,
    DashboardComponent,
    BodyComponent,
    SidenavComponent,
    ReportComponent,
    PendingComponent,
    // HomeComponent,
    PendingDocComponent,
    PendingEmpComponent,
    ActiveDocComponent,
    ActiveEmpComponent,
    ActivePatientComponent,
    AcceptPopupComponent,
    ViewDoctorComponent,
    ViewEmpComponent,
    ViewPatientComponent,
    AddDocComponent,
    AddPatientComponent,
    AddEmpComponent,
    BlockedComponent,
    BlockedEmpComponent,
    BlockedPatientComponent,
    BlockedDocComponent,
    // InvoiceComponent,
    // InvoiceViewComponent,
    // AppointmentComponent,
    // AppointmentDetailsComponent,
    // AppointmentAddComponent,
    // AppointmentTableComponent,
    // AppointmentEditComponent,
    // MedicineComponent,
    // MedicineDetailsComponent,
    // MedicineAddComponent,
    // MedicineEditComponent,
    // MedicineListComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    DashboardRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    NgToastModule,
    NgConfirmModule,
    MatTabsModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule

  ]
  ,
  providers: [MdbModalService]
})
export class DashboardModule { }
