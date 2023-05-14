import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { passwordValidation } from '../../custom/validations/password.validation';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-receptionest-register',
  templateUrl: './receptionest-register.component.html',
  styleUrls: ['./receptionest-register.component.css']
})
export class ReceptionestRegisterComponent {
  get employeeName(){
    return this.employeeRegisterForm.get('name');  //تسهيل عشان الhtml 
  }
  get employeeEmail(){
    return this.employeeRegisterForm.get('email');  
  }
  get employeePassword(){
    return this.employeeRegisterForm.get('password');  
  }
  get employeeConfirmPassword(){
    return this.employeeRegisterForm.get('confirmPassword');  
  }
  get employeePhone(){
    return this.employeeRegisterForm.get('phone');  
  }
  get employeeAge(){
    return this.employeeRegisterForm.get('age');  
  }
  get employeeCity(){
    return this.employeeRegisterForm.get('city');  
  }
  get employeeStreet(){
    return this.employeeRegisterForm.get('street');  
  }
  get employeeBuilding(){
    return this.employeeRegisterForm.get('building');  
  }

  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router,private _snackBar: MatSnackBar ){}
  employeeRegisterForm!:FormGroup;

  ngOnInit()
  {
    this.employeeRegisterForm= this.fb.group({
      name:['',[Validators.required,Validators.maxLength(50)]],
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmPassword:['',[Validators.required]],
      // birth_date:[''],
      gender:[''],
      phone:['',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/gm)]],
      address:this.fb.group({
        city:['',[Validators.required,Validators.maxLength(20)]],
        street:['',[Validators.maxLength(50)]],
        building:[''],
      })
      // typeOptions:[getCheckedRadio, [Validators.required]]
    },{validator:passwordValidation});
    
  }
  employeeRegister()
  {
    //console.log(this.employeeRegisterForm.value)
    this.authService.empRegister(this.employeeRegisterForm.value).subscribe(
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


