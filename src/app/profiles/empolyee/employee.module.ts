import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetEmployeeComponent } from './get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { ProfilesRoutingModule } from '../profiles-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AllAppoinmentsComponent } from './all-appoinments/all-appoinments.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TableModule } from 'primeng/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ButtonModule } from 'primeng/button';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { NgToastModule } from 'ng-angular-popup';
import { NgConfirmModule } from 'ng-confirm-box';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    GetEmployeeComponent,
    UpdateEmployeeComponent,
    AllAppoinmentsComponent,
  ],
  imports: [
    CommonModule,
    ProfilesRoutingModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    TableModule,
    MatPaginatorModule,
    MatTableModule,
    ButtonModule,
    MatSortModule,
    MatTabsModule,
    NgConfirmModule,
    NgToastModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [GetEmployeeComponent, UpdateEmployeeComponent],
})
export class EmployeeModule {}
