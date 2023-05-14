import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl = 'http://localhost:8080/employee/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Employee[]>(this.baseUrl)
  }
  getPending(){
    return this.http.get<Employee[]>('http://localhost:8080/employee?status=pending')
  }
  getBlocked(){
    return this.http.get<Employee[]>('http://localhost:8080/employee?status=blocked')
  }
  accept(id:Number,updatedValue:any){
    return this.http.patch(this.baseUrl+id,updatedValue)
  }
  getActive(){
    return this.http.get<Employee[]>('http://localhost:8080/employee?status=active')
  }
  
  getById(id:Number){
    return this.http.get<Employee>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  editWithoutId(emp:any){
   return this.http.patch(this.baseUrl+emp._id,emp)
 }
 edit(emp:any,id:Number){
  return this.http.patch(this.baseUrl+id,emp)
}

 updateStatus(id:Number,status:any){
  return this.http.patch(this.baseUrl+id+"/status",status)
 }
 addEmp(formData:any){
  let emp={
    name:formData.fname+" "+formData.lname,
    gender:formData.gender,
    age:formData.age,
    email:formData.email,
    phone:formData.phone,
    address:formData.address,
    password:formData.password,
    status: 'active',
    salary:formData.salary ,
    clinicId:formData.clinic

  }
  console.log(emp)
  return this.http.post(this.baseUrl,emp)
 }

}