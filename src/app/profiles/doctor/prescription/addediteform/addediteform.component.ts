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
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addediteform',
  templateUrl: './addediteform.component.html',
  styleUrls: ['./addediteform.component.css']
})
export class AddediteformComponent {
  constructor(public prescriServes :PrescriptionService,public patientServes :PatientService,public medicienService:MedicineService,public   dialog:MatDialog,
    @Inject(MAT_DIALOG_DATA) public myDataForEdite: any,
    // public toast:ToastrService
    // private _toastService: ToastService
   ){}
   
  
    public date:any= moment().format('YYYY-MM-DD');///2020-02-12 +this.dats?.patientId?.name||3
    public patient:Patient[]=[] ;
    public medicineList:any ;
    public prescription:any;
    public btnName:String=!this.myDataForEdite.date?"Add":"Edite"
   
    public data: Prescription= this.myDataForEdite.date ? new Prescription(this.myDataForEdite?._id,this.myDataForEdite?.date?.split("T")[0],JSON.parse(localStorage.getItem("id")|| '{}'),this.myDataForEdite?.patientId?._id,this.myDataForEdite.medicine,this.myDataForEdite?.description) : new Prescription(2,this.date,JSON.parse(localStorage.getItem("id")|| '{}'),1,[1,3],"please enter description") ;
    
    
    //3799139
    // new Prescription(2,this.myDataForEdite?.date?.split("T")[0]||this.date,3,1,[1,3],this.myDataForEdite?.description||"please enter description") ;//3799139
    
     
    
    ngOnInit()
    {
      console.log(this.myDataForEdite);
      // this.toast.success('this element was deleted successfuly ');
      
     this.prescriServes.getAll().subscribe(data=>{
      console.log(data);
       this.prescription=data;
     })
     this.patientServes.getAll().subscribe(data=>{
       this.patient=data; 
     })
     this.medicienService.getAll().subscribe(data=>{
      this.medicineList=data; 
    })

    
    }
   


    addPrescForm(form:any){
      

      if(this.myDataForEdite.date){

        console.log(this.data);
        
        this.prescriServes.edit(this.data).subscribe({
          next:(val)=>{
            console.log("yordatawas ",val,this.data);
            window.location.reload()
            this.dialog.closeAll()               
          },error:(e)=>{
            console.log(e,this.data); 
          }
        })
        

      }
      else{

     this.prescriServes.addPresc(this.data).subscribe({
           next:(val)=>{

            this.prescriServes.getAll().subscribe(data=>{
              this.prescription=data;
              window.location.reload()
              console.log(data, this.prescription);
            
            })
          
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
          window.location.reload()
          console.log(val);
         },error:(e)=>{
           console.log(e); 
         }
       })
      
   
     }
   
 
  
   
}
