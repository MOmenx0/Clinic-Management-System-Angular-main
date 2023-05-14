import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Appointment } from 'src/app/models/appointment';
import { Clinic } from 'src/app/models/clinic';
import { Doctor } from 'src/app/models/doctor';
import { Patient } from 'src/app/models/patient';
import { AppointmentService } from 'src/app/services/appointment.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-appointment-details',
  templateUrl: './appointment-details.component.html',
  styleUrls: ['./appointment-details.component.css']
})
export class AppointmentDetailsComponent {
 appoint?:Appointment;
 cId?:Number=0;
clinic?:Clinic;
patient?:Patient;
doc?:Doctor;
 constructor(public appointmentService:AppointmentService,
  public clinicService:ClinicService,
  public patientService:PatientService,private _location: Location,
  public doctorService:DoctorService,
  private activateRoute:ActivatedRoute){}
 ngOnInit(){
  this.activateRoute.params.subscribe(data=>{
    this.appointmentService.getById(data['id']).subscribe(d=>{
      this.appoint=d;
     this.cId=this.appoint.clinicId;//1
      this.clinicService.getAll().subscribe(data=>{
        if(data!=null){
          this.clinic=data.filter(p =>p._id==this.cId)[0];
        }
this.patientService.getById(this.appoint?.patientId).subscribe(data=>{
this.patient=data;
})
this.doctorService.getById(this.appoint?.doctorId).subscribe(data=>{
this.doc=data;
// console.log(this.doc)
})
      })
    })
  })
  console.log(this.appoint)
  console.log(this.appointmentService.getCalenderByDocId(this.appoint?.doctorId._id))
}
back(){
  this._location.back();
}
}
