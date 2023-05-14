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
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceArchiveComponent } from './invoice-archive/invoice-archive.component';
import { InvoiceViewComponent } from './invoice-view/invoice-view.component';
import { InvoiceComponent } from './invoice-table/invoice.component';


@NgModule({
  declarations: [
    InvoiceArchiveComponent,InvoiceViewComponent,InvoiceComponent
  ],
  imports: [
    CommonModule,MatTabsModule,NgConfirmModule,
    MatInputModule,MatFormFieldModule,
    MatButtonModule,MatCardModule,
    MatSortModule,MatIconModule,MatSelectModule,
    MatTableModule,MatPaginatorModule,
    RouterModule,
    InvoiceRoutingModule
  ]
})
export class InvoiceModule { }
