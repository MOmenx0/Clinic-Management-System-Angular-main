import {AfterViewInit, Component, OnInit, Input, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

import { Doctor } from 'src/app/models/doctor';

import { DoctorService } from 'src/app/services/doctor.service';

import {NgConfirmService} from 'ng-confirm-box';
import { ViewDoctorComponent } from '../view-doctor/view-doctor.component';
import { AcceptPopupComponent } from '../accept-popup/accept-popup.component';

@Component({
  selector: 'app-blocked-doc',
  templateUrl: './blocked-doc.component.html',
  styleUrls: ['./blocked-doc.component.css']
})
export class BlockedDocComponent {
  public dataSource!: MatTableDataSource<Doctor>;
  doctor:Doctor[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  modalRef: MdbModalRef<ViewDoctorComponent> | null = null;

  constructor(
    public doctorService:DoctorService,
    private confirmService: NgConfirmService,
    public modalService:MdbModalService,
    public dialog: MatDialog
  ){}

  ngOnInit(){
    this.doctorService.getBlocked().subscribe(data=>{
      this.doctor = data;
      this.dataSource = new MatTableDataSource(this.doctor);
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
    this.confirmService.showConfirm("Are you sure want  to Un Block this user?",
     () => {
      this.doctorService.updateStatus(id,{status:"active"}).subscribe(data=>{})
      this.doctor = this.doctor.filter(doc=>doc._id!=id);
      this.dataSource = new MatTableDataSource(this.doctor);

    },
    () => {
      //yor logic if No clicked
    })
  }

  openView(doctor:any){
    this.modalRef = this.modalService.open(ViewDoctorComponent, {
      modalClass: ' modal-dialog-centered',
      data: {
        doctor,
      },
    });
        
  }


}
