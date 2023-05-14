import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormsModule,ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';
import * as moment from 'moment';

@Component({
  selector: 'app-medicine-add',
  templateUrl: './medicine-add.component.html',
  styleUrls: ['./medicine-add.component.css']
})
export class MedicineAddComponent {
  medicineAddForm!:FormGroup;
  med!:Medicine;
  date= moment(new Date()).format("yyyy-MM-DD");
  constructor(public  medicineService:MedicineService,
    public router:Router,
    private _location: Location,
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
    onSumbit(){
console.log(this.medicineAddForm.value)
console.log(this.drugName)
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

save(){
    console.log(this.medicineAddForm.errors)

    this.medicineService.add(this.medicineAddForm.value).subscribe(()=>{
      console.log("done")
      this._location.back();
    })
  }
  back(){
    this._location.back();
}

}

