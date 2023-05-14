import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';

import { FormBuilder,FormsModule,ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { MedicineRoutingModule } from './medicine-routing.module';
import { MedicineComponent } from './medicine-list/medicine-list.component';
import { MedicineAddComponent } from './medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { MedicineEditComponent } from './medicine-edit/medicine-edit.component';
import { MedicineArchiveComponent } from './medicine-archive/medicine-archive.component';


@NgModule({
  declarations: [
    MedicineEditComponent,
    MedicineDetailsComponent,
    MedicineAddComponent,
    MedicineComponent,
    MedicineArchiveComponent
  ],
  imports: [
    CommonModule,
    MedicineRoutingModule,
    MatTabsModule,NgConfirmModule,
    MatInputModule,MatFormFieldModule,
    MatButtonModule,MatCardModule,
    MatSortModule,MatIconModule,MatSelectModule,
    MatTableModule,MatPaginatorModule,
    FormsModule,RouterModule
    ,ReactiveFormsModule,
  ]
})
export class MedicineModule { }
