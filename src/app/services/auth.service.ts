import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
// import {DatePipe} from '@angular/common'
import { DateAdapter } from '@angular/material/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // isLogged:boolean=false;
  baseUrl = "http://localhost:8080";
  
  
  constructor(public http:HttpClient) { 
   // this.dateAdapter.setLocale('en-GB');
  }

  ptRegister(formData:any){

    console.log(formData);
    console.log("patient register");
    let patient={
      name:formData.name,
      gender:formData.gender,
      age:formData.age,
      email:formData.email,
      phone:formData.phone,
      address:formData.address,
      password:formData.password,
    }
    console.log(patient);

    return this.http.post(`${this.baseUrl}/patient`,patient)
  }


  dcRegister(formData:any){

    console.log(formData);
    console.log("doctor register");
    let doctor={
      name:formData.name,
      gender:formData.gender,
      age:formData.age,
      email:formData.email,
      phone:formData.phone,
      speciality:formData.speciality,
      yearsOfExperience:formData.yearsOfExperience,
      address:formData.address,
      password:formData.password,
    }
    console.log(doctor);

    return this.http.post(`${this.baseUrl}/doctors`,doctor)
  }


  empRegister(formData:any){

    console.log(formData);
    console.log("employee register");
    let employee={
      name:formData.name,
      gender:formData.gender,
      // birth_date:formData.birth_date,
      email:formData.email,
      phone:formData.phone,
      address:formData.address,
      password:formData.password,
    }
    console.log(employee);

   return this.http.post(`${this.baseUrl}/employee`,employee)
  }


  login(userData:any)
  {
    // console.log(userData);
    //  const headers = new HttpHeaders({'Authorization': `'Bearer' ${}`});
    return this.http.post(`${this.baseUrl}/login`,userData);
  }

  

  loggedIn(){
    return !!localStorage.getItem('token');
  }
  
  getRole(){
    return localStorage.getItem('role')?.toString();
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
