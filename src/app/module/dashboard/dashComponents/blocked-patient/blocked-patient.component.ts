import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import {NgConfirmService} from 'ng-confirm-box';
import { MdbModalService,MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { ViewPatientComponent } from '../view-patient/view-patient.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blocked-patient',
  templateUrl: './blocked-patient.component.html',
  styleUrls: ['./blocked-patient.component.css']
})
export class BlockedPatientComponent {
  modalRef: MdbModalRef<ViewPatientComponent> | null = null;
  public dataSource!: MatTableDataSource<Patient>;
  patient:Patient[]=[];
  displayedColumns: string[] = ['id', 'name', 'gender', 'email','phone','status','action'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public patientService:PatientService,
  private confirmService: NgConfirmService,
  public dialog: MatDialog,
  public modalService:MdbModalService,
  private router:Router

  ){}

  ngOnInit(){
    this.patientService.getBlocked().subscribe(data=>{
      this.patient = data;
      this.dataSource = new MatTableDataSource(this.patient);
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
    this.confirmService.showConfirm("Are you sure want  to block this user?",
     () => {
      this.patientService.updateStatus(id,{status:"active"}).subscribe(data=>{})
      this.patient = this.patient.filter(user=>user._id!=id);
      this.dataSource = new MatTableDataSource(this.patient);
    },
    () => {
      //yor logic if No clicked
    })
  }

  openView(Patient:any){
    this.modalRef = this.modalService.open(ViewPatientComponent, {
      modalClass: ' modal-dialog-centered',
      data: {
        Patient,
      },
    });
        
  }
  

}
