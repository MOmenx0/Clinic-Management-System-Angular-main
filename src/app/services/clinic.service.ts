import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clinic } from '../models/clinic';

@Injectable({
  providedIn: 'root'
})
export class ClinicService {

  baseUrl = 'http://localhost:8080/clinic/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Clinic[]>(this.baseUrl)
  }
  getById(id:Number){
    return this.http.get<Clinic>(this.baseUrl+id)
  }
}
