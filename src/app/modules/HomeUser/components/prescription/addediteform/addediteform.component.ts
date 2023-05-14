import { Component, Inject } from '@angular/core';
// import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import * as moment from 'moment';
import { Patient } from 'src/app/models/patient';
import { Prescription } from 'src/app/models/prescription';
import { MedicineService } from 'src/app/services/medicine.service';
import { PatientService } from 'src/app/services/patient.service';
import { PrescriptionService } from 'src/app/services/prescription.service';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { isString } from '@ng-bootstrap/ng-bootstrap/util/util';
@Component({
  selector: 'app-addediteform',
  templateUrl: './addediteform.component.html',
  styleUrls: ['./addediteform.component.css']
})
export class AddediteformComponent {
  constructor(public prescriServes :PrescriptionService,public patientServes :PatientService,public medicienService:MedicineService,public   dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public myDataForEdite: any
   ){}
   
  
    public date:any= moment().format('YYYY-MM-DD');///2020-02-12 +this.dats?.patientId?.name||3
    public patient:Patient[]=[] ;
    public medicineList:any ;
    public prescription:any;
   
    public data: Prescription= new Prescription(2,this.myDataForEdite?.date?.split("T")[0]||this.date,3,1,[1,3],this.myDataForEdite?.description||"please enter description") ;//3799139
    
     
    
    ngOnInit()
    {
      // console.log(this.myDataForEdite);
      
     this.prescriServes.getAll().subscribe(data=>{
       
       this.prescription=data;
      //id =3 // service doctors search by name (this.id) 
     })
   
     // this.patientServes
     this.patientServes.getAll().subscribe(data=>{


       this.patient=data; 
     })

     this.medicienService.getAll().subscribe(data=>{
      console.log(data);
      
      this.medicineList=data; 
    })

    // console.log(this.myDataForEdite.descriotion);
    
    }
   


    addPrescForm(form:any){
      console.log(form.value);
     console.log(this.myDataForEdite);

      if(this.myDataForEdite.date){

        this.prescriServes.edit(this.myDataForEdite).subscribe({
          next:(val)=>{
            console.log("yordatawas ",val,this.data);
          },error:(e)=>{
            console.log(e,this.data); 
          }
        })
        

      }
      else{

      
     this.prescriServes.addPresc(this.data).subscribe({
           next:(val)=>{
             console.log(val);
           },error:(e)=>{
             console.log(e); 
           }
         })
        }


     
    }
   
   
    showPresc(id:any){
     this.patientServes.getById(id).subscribe(mytarget=>{
       console.log(mytarget);
     })
   }
   


     deletePresc(id:Number){
   
       console.log(id);
       
       this.prescriServes.deleteById(id)
       .subscribe({
         next:(val)=>{
           console.log(val);
         },error:(e)=>{
           console.log(e); 
         }
       })
      
   
     }
   
 
    //  toppings = new FormControl('');
    //  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
     
     
    //  openAndEdite(){
    //   this.dialog.open(AddediteformComponent)
    //  }
   
    
   
}
