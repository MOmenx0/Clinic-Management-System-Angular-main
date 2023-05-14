import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { Clinic } from 'src/app/models/clinic';
import * as moment from 'moment';

import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { CalenderService } from 'src/app/services/calender.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appointment-scan',
  templateUrl: './appointment-scan.component.html',
  styleUrls: ['./appointment-scan.component.css']
})
export class AppointmentScanComponent {
   date:string='';

  appoint:Appointment[]=[];
  count?:number;
 clinic:Clinic[]=[];
 public dataSource: MatTableDataSource<Appointment>[]=[];
 displayedColumns: string[] = ['id', 'name', 'Dr name', 'date','time'/*,'Scaned'*/,'action'];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public appointmentService:AppointmentService,
   public clinicService:ClinicService,
   private activateRoute:ActivatedRoute){

   }
  ngOnInit(){

    this.date =  moment(new Date()).format("yyyy-MM-DD");

    this.clinicService.getAll().subscribe(data=>{
      this.clinic=data;
    })
this.appointmentService.getAll().subscribe(data=>{
      this.appoint=data.filter(a=>a.date==this.date)
      // this.appoint=data.filter(a=>a.date=='2023-03-26')
      this.count=this.clinic.length;
      for(let i=0;i<this.count;i++){
        this.dataSource[i] = new MatTableDataSource((this.appoint.filter(a=>a.clinicId==this.clinic[i]._id)));
        this.dataSource[i].paginator = this.paginator;
        this.dataSource[i].sort = this.sort;
      }
         })


        }

 }
