import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {NgConfirmService} from 'ng-confirm-box';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { DoctorService } from 'src/app/services/doctor.service';
import { InvoiceService } from 'src/app/services/invoice.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-invoice-archive',
  templateUrl: './invoice-archive.component.html',
  styleUrls: ['./invoice-archive.component.css']
})
export class InvoiceArchiveComponent {
  invoice:Invoice[]=[];
  x:Number[]=[]
  public  dataSource!:MatTableDataSource <Invoice>;
  displayedColumns: string[] = ['id','patient', 'paymentType', 'totalCost','date', 'doctor','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

  constructor(public invoiceService:InvoiceService,private confirmService: NgConfirmService,
    public doc:DoctorService,public patient:PatientService,
    public router:Router){}
   ngOnInit(){
   this.invoiceService.getAll().subscribe(data=>{

      this.invoice=data.filter(a=>a.archive==true);
      this.dataSource = new MatTableDataSource(this.invoice);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

    })

    }


  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
}
