import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {Location} from '@angular/common';

import { passwordValidation } from 'src/app/custom/password.validation';
import { PatientService } from 'src/app/services/patient.service';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  Action:String = "New Patient";
  patientAddForm!:FormGroup;
  public idToUpdate!:Number;
  public isUpdateActive: boolean = false;

  constructor(
    public fb:FormBuilder ,
    public patientService:PatientService,
    private _location: Location,
    private activatedRoute:ActivatedRoute

  ){
    this.patientAddForm = this.fb.group({
      fname:['',[Validators.required,Validators.maxLength(50)] ],
      lname:['',[Validators.required,Validators.maxLength(50)]],
      email:['',[Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      age:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      }),
    },{validator:passwordValidation})

  }


ngOnInit(): void {
  this.activatedRoute.params.subscribe(val=>{
    this.idToUpdate = val['id'];
    this.patientService.getById(this.idToUpdate).subscribe(res=>{
      this.isUpdateActive= true;
      this.fillFormToUpdate(res)
      this.Action = "Edit Patient";
    })
  })
}


fillFormToUpdate(patient:Patient){

  let names= patient.name.split(" ")
  this.patientAddForm.setValue({
    fname:names[0],
    lname:names[1]||"",
    email:patient.email,
    age:patient.age,
    gender:patient.gender,
    phone:patient.phone,
    password:'',
    confirmPassword:"",
    address:{
      city:patient.address.city,
      street:patient.address.street,
      building:patient.address.building,
    },
  })
}

update(){
 let formData = this.patientAddForm.value
  let Patient={
    _id:this.idToUpdate,
    name:formData.fname+" "+formData.lname,
    gender:formData.gender,
    age:formData.age,
    email:formData.email,
    phone:formData.phone,
    address:formData.address,
    password:formData.password,
 
  }
 
  this.patientService.editWithoutId(Patient).subscribe(()=>{
    console.log("done")
    this._location.back();

  })
}
  get patientFName(){
    return this.patientAddForm.get('fname');  
  }
  get patientLName(){
    return this.patientAddForm.get('lname');  
  }
  get patientEmail(){
    return this.patientAddForm.get('email');  
  }
  get patientPassword(){
    return this.patientAddForm.get('password');  
  }
  get patientConfirmPassword(){
    return this.patientAddForm.get('confirmPassword');  
  }
  get patientPhone(){
    return this.patientAddForm.get('phone');  
  }
  get patientAge(){
    return this.patientAddForm.get('age');  
  }
  get patientCity(){
    return this.patientAddForm.get('city');  
  }
  get doctorStreet(){
    return this.patientAddForm.get('street');  
  }
  get patientBuilding(){
    return this.patientAddForm.get('building');  
  }



  add(){
     this.patientService.addPatient(this.patientAddForm.value).subscribe(()=>{
      console.log("done")
      this._location.back();

    })
  }

  back(){
    
     this._location.back();
 }
}
