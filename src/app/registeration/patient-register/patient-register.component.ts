import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidation } from '../../custom/validations/password.validation';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent {
  get patientName(){
    return this.patientRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get patientEmail(){
    return this.patientRegisterForm.get('email');  
  }
  get patientPassword(){
    return this.patientRegisterForm.get('password');  
  }
  get patientConfirmPassword(){
    return this.patientRegisterForm.get('confirmPassword');  
  }
  get patientPhone(){
    return this.patientRegisterForm.get('phone');  
  }
  get patientAge(){
    return this.patientRegisterForm.get('age');  
  }
  get patientCity(){
    return this.patientRegisterForm.get('city');  
  }
  get patientStreet(){
    return this.patientRegisterForm.get('street');  
  }
  get patientBuilding(){
    return this.patientRegisterForm.get('building');  
  }

  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router,private _snackBar: MatSnackBar ){}
  patientRegisterForm!:FormGroup;
  ngOnInit()
  {
    //Patient
    this.patientRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      age:[''],
      gender:['',[Validators.required]],
      phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      })
      // typeOptions:[getCheckedRadio, [Validators.required]]
    },{validator:passwordValidation});
  }
  patientRegister()
  {
    this.authService.ptRegister(this.patientRegisterForm.value).subscribe(
      data=>{
      console.log(data);
      this.router.navigateByUrl('');
      },
      err=>{
        this._snackBar.open("Email Already Exist","ok",{
          duration: 3000,
          verticalPosition: 'bottom',
         });
        }
     )
  }
}
