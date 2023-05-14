import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {NgConfirmService} from 'ng-confirm-box';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-archive',
  templateUrl: './medicine-archive.component.html',
  styleUrls: ['./medicine-archive.component.css']
})
export class MedicineArchiveComponent {
  medicine:Medicine[]=[];
  medicineArchive:Medicine[]=[];
  public  dataSource!: MatTableDataSource<Medicine>;
  displayedColumns: string[] = ['id', 'drugName', 'dosage', 'price','quantity','exp_date','action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;

   constructor(public medicineService:MedicineService,
    private confirmService: NgConfirmService,
     public router:Router) {}
   ngOnInit(){

     this.medicineService.getAll().subscribe(data=>{
        this.medicine=data.filter(p =>p.archive==true );
        this.dataSource = new MatTableDataSource(this.medicine);
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
