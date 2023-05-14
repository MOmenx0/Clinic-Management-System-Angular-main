import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment';
import { Calendar } from '../models/calendar';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl = 'http://localhost:8080/doctors/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Doctor[]>(this.baseUrl)
  }
  getPending(){
    return this.http.get<Doctor[]>('http://localhost:8080/doctors?status=pending')
  }
  getBlocked(){
    return this.http.get<Doctor[]>('http://localhost:8080/doctors?status=blocked')
  }
  getActive(){
    return this.http.get<Doctor[]>('http://localhost:8080/doctors?status=active')
  }
  getById(id:Number){
    return this.http.get<Doctor>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  accept(id:Number,updatedValue:any){
    return this.http.patch(this.baseUrl+id,updatedValue)
  }
  edit(doctor:Doctor ,id:Number){
   return this.http.patch(this.baseUrl+id,doctor)
 }

 updateStatus(id:Number,status:any){
  return this.http.patch(this.baseUrl+id+"/status",status)
 }
 getDocCalender(id:Number){
  return this.http.get<any>(this.baseUrl+id+"/calender")
 }
 getDocAppt(id:Number){
  return this.http.get<any>(this.baseUrl+id+"/appointment")
 }

 addDoc(formData:any){
  let doctor={
    name:formData.fname+" "+formData.lname,
    gender:formData.gender,
    age:formData.age,
    email:formData.email,
    phone:formData.phone,
    speciality:formData.speciality,
    yearsOfExperience:formData.yearsOfExperience,
    address:formData.address,
    password:formData.password,
    status: 'active',
    price:formData.price ,
    clinicId:formData.clinic

  }
  console.log(doctor)
  return this.http.post(this.baseUrl,doctor)
 }
 
}