import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Invoice } from '../models/invoice';

@Injectable({
  providedIn: 'root',
})
export class InvoiceService {
  baseUrl = 'http://localhost:8080/invoice/';

  constructor(public http: HttpClient) {}
  getAll() {
    return this.http.get<Invoice[]>(this.baseUrl);
  }
  getById(id:Number){
    return this.http.get<Invoice>(this.baseUrl+id)
  }
  deleteById(id:Number){
    console.log(id+"delete")
    return this.http.delete(this.baseUrl+id)
  }
}
