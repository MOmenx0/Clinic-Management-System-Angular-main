import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import {JwtHelperService}from '@auth0/angular-jwt';
import {MatSnackBar} from '@angular/material/snack-bar';
import { EmployeeService } from '../services/employee.service';
import { DoctorService } from '../services/doctor.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  get email(){
    return this.userLogForm.get('email');  //تسهيل عشان الhtml 
  }
  get password(){
    return this.userLogForm.get('password'); 
  }
  constructor(public fb:FormBuilder ,public authService:AuthService,public router:Router,private _snackBar: MatSnackBar
    ,public employeeService:EmployeeService,public doctorService:DoctorService
    ){}

  userLogForm!:FormGroup;
  token:any;
  decodedToken:any;
  helper=new JwtHelperService();

  ngOnInit() {
    this.userLogForm= this.fb.group({
      email:['',Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)],
      password:['',[Validators.required]],
    });
  }
  login(){
    this.authService.login(this.userLogForm.value).subscribe(
      (data:any)=>
      {
        localStorage.setItem('token',data.token)
        this.decodedToken=this.helper.decodeToken(data.token)
        localStorage.setItem('role', this.decodedToken.role);

        if (this.decodedToken.id) {
          localStorage.setItem('id', this.decodedToken.id);
          switch (this.decodedToken.role) {
            case "doctor":
              {  
                this.doctorService.getById(this.decodedToken.id).subscribe((data) => {
                  if (data.status == 'active') {
                    this.router.navigateByUrl(`/profile/doctor/${this.decodedToken.id}`);
                  } else {
                    localStorage.clear();
                    this.router.navigateByUrl('/login')
                    this.userLogForm.reset();
                  }
                });
              }
              break;
            case "employee":
              {
                this.employeeService.getById(this.decodedToken.id).subscribe((data) => {
                  if (data.status == 'active') {
                    this.router.navigateByUrl(`/profile/employee/${this.decodedToken.id}`);
                  } else {
                    localStorage.clear();
                    this.router.navigateByUrl('/login')
                    this.userLogForm.reset();
                  }
                });
              }  
              break;
            case "patient":
              this.router.navigateByUrl(`/profile/patient/${this.decodedToken.id}`);
              break;
            default:
              this.router.navigateByUrl(`/login`);
          }
        }else{
          this.router.navigateByUrl('/dashboard');
            }
      },
      err=>{
        // console.clear();
         this._snackBar.open("Your Email Or Password Incorrect","ok",{
          duration: 3000,
          verticalPosition: 'bottom',
         });
      }
      );
}
}
