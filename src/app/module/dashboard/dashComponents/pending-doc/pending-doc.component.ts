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
  selector: 'app-pending-doc',
  templateUrl: './pending-doc.component.html',
  styleUrls: ['./pending-doc.component.css']
})
export class PendingDocComponent {
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
    this.doctorService.getPending().subscribe(data=>{
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

 

  Block(id: number) {
    this.confirmService.showConfirm("Are you sure want  to block this user?",
     () => {
      this.doctorService.updateStatus(id,{status:"blocked"}).subscribe(data=>{})
      this.doctor = this.doctor.filter(user=>user._id!=id);
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

  // openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
  //   this.dialog.open(BlockDialog, {
  //     width: '250px',
  //     enterAnimationDuration,
  //     exitAnimationDuration,
  //   });
  // }

  acceptPopup(docId:Number){
    this.modalRef = this.modalService.open(AcceptPopupComponent, {
      modalClass: 'modal-dialog-centered'
    });
    this.modalRef.onClose.subscribe((messege?) => {
      if(messege.status){
        this.doctorService.updateStatus(docId,{clinicId:messege.id,
          status: "active"}).subscribe(data=>{
            this.doctor = this.doctor.filter(user=>user._id!=docId);
            this.dataSource = new MatTableDataSource(this.doctor);
            
          })
      }
      
    })
        
  }
}














@Component({
  selector: 'block-dialog',
  templateUrl: 'dialog-block.html',
})
export class BlockDialog {
  constructor(
    public doctorService:DoctorService,
    public blockDialogRef: MatDialogRef<BlockDialog>

    ) {}

    @Input() Object :any;
  accept(id:Number)
  {
    this.doctorService.updateStatus(id,{status:"active"}).subscribe(data=>{}
     )
  }
}