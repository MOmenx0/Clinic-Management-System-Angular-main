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
import { AcceptPopupComponent } from '../accept-popup/accept-popup.component';

@Component({
  selector: 'app-blocked-emp',
  templateUrl: './blocked-emp.component.html',
  styleUrls: ['./blocked-emp.component.css']
})
export class BlockedEmpComponent {
  modalRef: MdbModalRef<ViewEmpComponent> | null = null;

  public dataSource!: MatTableDataSource<Employee>;
  emps:Employee[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public empService:EmployeeService,
    private confirmService: NgConfirmService,
    public dialog: MatDialog,
    public modalService:MdbModalService,

  ){}

  ngOnInit(){
    this.empService.getBlocked().subscribe(data=>{
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


 

  unBlock(id: number) {
    this.confirmService.showConfirm("Are you sure want  to Unblock this user?",
     () => {
      this.empService.updateStatus(id,{status:"active"}).subscribe(data=>{});
      this.emps = this.emps.filter(user=>user._id!=id);
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


}
