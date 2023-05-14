import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {User} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = 'http://localhost:8080/user/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<User[]>(this.baseUrl)
  }


}
