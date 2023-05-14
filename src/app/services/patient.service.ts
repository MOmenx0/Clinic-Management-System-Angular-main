import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient';
import { Appointment } from '../models/appointment';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  baseUrl = 'http://localhost:8080/patient/';
  constructor(public http: HttpClient) {
    this.http.get<Patient>(this.baseUrl).subscribe((data) => {
      console.log('data');
    });
  }

  getAll() {
    return this.http.get<Patient[]>(this.baseUrl);
  }

  getActive() {
    return this.http.get<Patient[]>(
      'http://localhost:8080/patient?status=active'
    );
  }
  getBlocked() {
    return this.http.get<Patient[]>(
      'http://localhost:8080/patient?status=blocked'
    );
  }

  getById(id: Number) {
    return this.http.get<Patient>(this.baseUrl + id);
  }
  deleteById(id: Number) {
    return this.http.delete(this.baseUrl + id);
  }

  editWithoutId(patient: Patient) {
    return this.http.patch(this.baseUrl + patient._id, patient);
  }
  edit(patient: Patient,id:Number) {
    return this.http.patch(this.baseUrl + id, patient);
  }

  updateStatus(id: Number, status: any) {
    return this.http.patch(this.baseUrl + id + '/status', status);
  }

  getPatientAppt(id: Number) {
    return this.http.get<any>(this.baseUrl + id + '/appointment');
  }

  addPatient(formData: any) {
    let Patient = {
      name: formData.fname + ' ' + formData.lname,
      gender: formData.gender,
      age: formData.age,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      password: formData.password,
    };
    console.log(Patient);
    return this.http.post(this.baseUrl, Patient);
  }

getPatientInovice(id: Number) {
    return this.http.get<any>(`http://localhost:8080/patient/${id}/invoice`);
  }


}
