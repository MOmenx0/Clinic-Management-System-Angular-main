import { Injectable } from '@angular/core';
import { Prescription } from '../models/prescription';
import { HttpClient } from '@angular/common/http';
import { PrescriptionGet } from '../models/prescriptionGet';
@Injectable({
  providedIn: 'root'
})
export class PrescriptionService {

  baseUrl = 'http://localhost:8080/prescription/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<PrescriptionGet[]>(this.baseUrl)
  }


  addPresc(data:any){
    return this.http.post(this.baseUrl,data)
  }


  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

  edit(preScription:any){

  // return  console.log(preScription,preScription._id);
    
    return this.http.patch(this.baseUrl+preScription._id,preScription)
  }
}
