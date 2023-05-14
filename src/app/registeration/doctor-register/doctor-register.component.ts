import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidation } from '../../custom/validations/password.validation';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent {

  get doctorName(){
    return this.doctorRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get doctorEmail(){
    return this.doctorRegisterForm.get('email');  
  }
  get doctorPassword(){
    return this.doctorRegisterForm.get('password');  
  }
  get doctorConfirmPassword(){
    return this.doctorRegisterForm.get('confirmPassword');  
  }
  get doctorPhone(){
    return this.doctorRegisterForm.get('phone');  
  }
  get doctorAge(){
    return this.doctorRegisterForm.get('age');  
  }
  get doctorCity(){
    return this.doctorRegisterForm.get('city');  
  }
  get doctorStreet(){
    return this.doctorRegisterForm.get('street');  
  }
  get doctorBuilding(){
    return this.doctorRegisterForm.get('building');  
  }
  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router,private _snackBar: MatSnackBar ){}
  doctorRegisterForm!:FormGroup;

  ngOnInit(){
    this.doctorRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      speciality:['',[Validators.required]],
      yearsOfExperience:['',[Validators.required]],
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
  doctorRegister()
  {
    //console.log(this.doctorRegisterForm.value)
     this.authService.dcRegister(this.doctorRegisterForm.value).subscribe(
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
