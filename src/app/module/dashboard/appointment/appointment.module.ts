import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms'
import{RouterModule}from '@angular/router'
import { NgConfirmModule } from 'ng-confirm-box';
import {MatTabsModule} from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';

import { AppointmentRoutingModule } from './appointment-routing.module';


import { AppointmentDetailsComponent } from './appointment-details/appointment-details.component';
import { AppointmentTableComponent } from './appointment-table/appointment-table.component';
import { AppointmentScanComponent } from './appointment-scan/appointment-scan.component';
import { AppointmentArchiveComponent } from './appointment-archive/appointment-archive.component';


@NgModule({
  declarations: [

    AppointmentDetailsComponent,
    AppointmentTableComponent,
    AppointmentScanComponent,
    AppointmentArchiveComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatTabsModule,NgConfirmModule,
    MatInputModule,MatFormFieldModule,
    MatButtonModule,MatCardModule,
    MatSortModule,
    MatTableModule,MatPaginatorModule,
    FormsModule,RouterModule
  ]
})
export class AppointmentModule { }
