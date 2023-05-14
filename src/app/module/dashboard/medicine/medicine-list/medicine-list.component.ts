import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import {NgConfirmService} from 'ng-confirm-box';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-list-medicine',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css'],
  providers:[MedicineService]
})
export class MedicineComponent {
// @Input() active=true;
medicine:Medicine[]=[];
public  dataSource!: MatTableDataSource<Medicine>;
displayedColumns: string[] = ['id', 'drugName', 'dosage', 'price','quantity','exp_date','action'];

@ViewChild(MatPaginator) paginator!: MatPaginator;
 @ViewChild(MatSort) sort!: MatSort;

 constructor(public medicineService:MedicineService,
  private confirmService: NgConfirmService,
   public router:Router) {}
 ngOnInit(){
   this.medicineService.getAll().subscribe(data=>{
      this.medicine=data.filter(p =>p.archive==false );
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

delete(id:number){
  this.confirmService.showConfirm("Are you sure want to delete this medicine?",
     () => {
      this.medicineService.deleteById(id).subscribe(data=>{console.log(data+"delete")})
      let stdIndex=this.medicine.findIndex(obj=>obj._id==id);
      this.medicine.splice(stdIndex,1)[0];
      this.dataSource = new MatTableDataSource(this.medicine);
      window.location.reload();
    },
    () => {
      //yor logic if No clicked
    })

  // }
  }
  edit(id:number){
    this.router.navigateByUrl('/dashboard/medicines/edit/'+id)

  }

}
