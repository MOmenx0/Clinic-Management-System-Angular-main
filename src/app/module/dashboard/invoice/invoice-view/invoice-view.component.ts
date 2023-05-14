import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';

import { Clinic } from 'src/app/models/clinic';
import { Doctor } from 'src/app/models/doctor';
import { Invoice } from 'src/app/models/invoice';
import { Patient } from 'src/app/models/patient';
import { InvoiceService } from 'src/app/services/invoice.service';
import { ClinicService } from 'src/app/services/clinic.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-invoice-view',
  templateUrl: './invoice-view.component.html',
  styleUrls: ['./invoice-view.component.css']
})
export class InvoiceViewComponent {
  invoice!:Invoice;
  cId?:Number=0;
 clinic?:Clinic;
 patient?:Patient;
 doc?:Doctor;
  constructor(public invoiceService:InvoiceService,
   public clinicService:ClinicService,
   public patientService:PatientService,
   private _location: Location,
   public doctorService:DoctorService,
   private activateRoute:ActivatedRoute){}
  ngOnInit(){
   this.activateRoute.params.subscribe(data=>{
     this.invoiceService.getById(data['id']).subscribe(d=>{
       this.invoice=d;
       console.log(this.invoice)

      })
    })

 }
 back(){
   this._location.back();
 }
}
