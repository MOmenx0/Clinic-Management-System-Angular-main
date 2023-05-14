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
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent {
  invoice:Invoice[]=[];
  // invoiceArchive:Invoice[]=[];
  x:Number[]=[]
  public  dataSource!:MatTableDataSource <Invoice>;
  // public  dataSource2!:MatTableDataSource <Invoice>;
  displayedColumns: string[] = ['id','patient', 'paymentType', 'totalCost','date', 'doctor','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

  constructor(public invoiceService:InvoiceService,private confirmService: NgConfirmService,
    public doc:DoctorService,public patient:PatientService,
    public router:Router){}
   ngOnInit(){
   this.invoiceService.getAll().subscribe(data=>{

      this.invoice=data.filter(a=>a.archive==false);
      // this.invoiceArchive=data.filter(a=>a.archive==true);
      this.dataSource = new MatTableDataSource(this.invoice);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      // console.log(this.invoiceArchive)
      // this.dataSource2 = new MatTableDataSource(this.invoiceArchive);
      // this.dataSource2.paginator = this.paginator;
      // this.dataSource2.sort = this.sort;
    })

    }


  applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
delete(id:number){
  this.confirmService.showConfirm("Are you sure want to delete this Invoice?",
     () => {
      this.invoiceService.deleteById(id).subscribe(data=>{console.log(data+"delete")})

    let stdIndex=this.invoice.findIndex(obj=>obj._id==id);
    this.invoice.splice(stdIndex,1)[0];
    this.dataSource = new MatTableDataSource(this.invoice);
    // this.router.navigateByUrl('/invoices');
    window.location.reload();
    },
    () => {
      //yor logic if No clicked
    })

  // }
  }
}
