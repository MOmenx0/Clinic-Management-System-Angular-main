import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { FormBuilder,FormsModule,ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';

import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-medicine-edit',
  templateUrl: './medicine-edit.component.html',
  styleUrls: ['./medicine-edit.component.css']
})
export class MedicineEditComponent {
  medicineAddForm!:FormGroup;
  med!:Medicine;
  public idUpdate!:Number;
  date=new Date().getFullYear()+'-'+new Date().getMonth()+'-'+new Date().getDate();

  constructor(public  medicineService:MedicineService,
    private _location: Location,
    private activatedRoute:ActivatedRoute,
    public fb:FormBuilder
    ){
      this.medicineAddForm = this.fb.group({
        drugName:['',[Validators.required,Validators.maxLength(30)] ],
        dosage:['',[Validators.required,Validators.minLength(3)]],
        description:['',[Validators.required,Validators.minLength(6)]],
        form:['',[Validators.required]],
        price:['',[Validators.required,Validators.minLength(1)]],
        quantity:['',[Validators.required ,Validators.minLength(1)]],
        exp_date:['',[Validators.required]],
        mfd_date:[this.date],
        archive:['false'],

      })
      }
ngOnInit(){
        this.activatedRoute.params.subscribe(val=>{
          this.idUpdate = val['id'];
          this.medicineService.getById(this.idUpdate).subscribe(m=>{

            this.fillForm(m)
          })
        })
      }
fillForm(med:Medicine){
  this.medicineAddForm.setValue({
    drugName:med.drugName,
   dosage:med.dosage,
   description:med.description,
   form:med.form,
   price:med.price,
   quantity:med.quantity,
   exp_date:med.exp_date.split("T")[0],
   mfd_date:med.mfd_date?.split("T")[0],
   archive:med.archive
  })
}
back(){
  this._location.back();
}
update(){
      let formData = this.medicineAddForm.value
       let medicine={
        _id:this.idUpdate,
        drugName:formData.drugName,
        dosage:formData.dosage,
        description:formData.description,
        form:formData.form,
        price:formData.price,
        quantity:formData.quantity,
        exp_date:formData.exp_date.split('T')[0],
        mfd_date:formData.mfd_date.split('T')[0],
        archive:formData.archive
       }

       this.medicineService.edit(medicine).subscribe(()=>{
         console.log("done")
         this._location.back();

       })
     }
     get drugName(){
      return this.medicineAddForm.get('drugName');
    }

    get dosage(){
      return this.medicineAddForm.get('dosage');
    }
    get description(){
      return this.medicineAddForm.get('description');
    }
    get form(){
      return this.medicineAddForm.get('form');
    }
    get price(){
      return this.medicineAddForm.get('price');
    }
    get quantity(){
      return this.medicineAddForm.get('quantity');
    }
    get exp_date(){
      return this.medicineAddForm.get('exp_date');
    }
    get mfd_date(){
      return this.medicineAddForm.get('mfd_date');
    }
    get archive(){
      return this.medicineAddForm.get('archive');
    }
}
