import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import {NgConfirmService} from 'ng-confirm-box';
import { MdbModalService,MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ViewEmpComponent } from '../view-emp/view-emp.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-active-emp',
  templateUrl: './active-emp.component.html',
  styleUrls: ['./active-emp.component.css']
})
export class ActiveEmpComponent {

  modalRef: MdbModalRef<ViewEmpComponent> | null = null;
  public dataSource!: MatTableDataSource<Employee>;
  emps:Employee[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','clinic','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
  public empService:EmployeeService,
  private confirmService: NgConfirmService,
  public dialog: MatDialog,
  public modalService:MdbModalService,
  private router:Router

  

  ){}

  ngOnInit(){
    this.empService.getActive().subscribe(data=>{
      this.emps = data;
      this.dataSource = new MatTableDataSource(this.emps);
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


 

  Block(id: number) {
    this.confirmService.showConfirm("Are you sure want  to block this user?",
     () => {
      this.empService.updateStatus(id,{status:"blocked"}).subscribe(data=>{})
      this.emps = this.emps.filter(emp => emp._id != id);
      this.dataSource = new MatTableDataSource(this.emps);
    },
    () => {
      //yor logic if No clicked
    })
}

openView(Emp:any){
  this.modalRef = this.modalService.open(ViewEmpComponent, {
    modalClass: ' modal-dialog-centered',
    data: {
      Emp,
    },
  });
      
}

edit(id:Number){
  this.router.navigate(['edit-employee',id])
}
}

