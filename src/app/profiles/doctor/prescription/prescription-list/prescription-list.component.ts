import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { PatientService } from 'src/app/services/patient.service';
import { PrescriptionService } from 'src/app/services/prescription.service';
import * as moment from 'moment';
import {MatDialog} from '@angular/material/dialog';
import { AddediteformComponent } from '../addediteform/addediteform.component';
import { ShowinfoComponent } from '../showinfo/showinfo.component';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-prescription-list',
  templateUrl: './prescription-list.component.html',
  styleUrls: ['./prescription-list.component.css']
})
export class PrescriptionListComponent {
 public date:any= moment().format('YYYY-MM-DD');///2020-02-12
 public data: any 
 public patient:Patient[]=[] ;
 public prescription:any;
 id: Number = JSON.parse(localStorage.getItem("id")|| '{}') ;
  constructor(public prescriServes :PrescriptionService,public patientServes :PatientService,public  dialog:MatDialog, public router: Router 
    ){}
 ngOnInit()
 {
 this.prescriServes.getAll().subscribe(data=>{this.prescription=data.filter((ele:any)=>ele.doctorId?._id== JSON.parse(localStorage.getItem("id")|| '{}'))})
  this.patientServes.getAll().subscribe(data=>{
    this.patient=data; 
  })
 }

 addPrescForm(form:any){
  this.prescriServes.addPresc(this.data).subscribe({
        next:(val)=>{
          console.log(val);
        },error:(e)=>{
          console.log(e); 
        }
      })
  
 }


 showPresc(id:any){
  this.patientServes.getById(id).subscribe(mytarget=>{
    console.log(mytarget);
  })
}

  deletePresc(id:Number){
    
    this.prescriServes.deleteById(id)
    .subscribe({
      next:(val)=>{
        window.location.reload()
        console.log(val);
      },error:(e)=>{
        console.log(e); 
      }
    })
   

  }


 
  // openAddAndEdite(){
  //   this.dialog.open(AddediteformComponent)
  //  }
   openEditForm(data: any) {
    const dialogRef = this.dialog.open(AddediteformComponent, { 
      data:data
    });

  }



    showPrescInfo(data: any) {
      const dialogRef = this.dialog.open(ShowinfoComponent, { 
        data:data
      });
    
  }
  cancel() {
    const url = `/profile/doctor/${this.id}`;
    this.router.navigateByUrl(url);
  }

 
}
