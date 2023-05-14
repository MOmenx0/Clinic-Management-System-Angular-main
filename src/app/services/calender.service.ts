import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Calendar } from '../models/calendar';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class CalenderService {

  baseUrl = 'http://localhost:8080/calender/'
  constructor(public http:HttpClient) {}

  getAll(){
    return this.http.get<Calendar[]>(this.baseUrl)
  }

  getTodayCalender(id:Number)
  {
    const todayDate = new Date();
    let dayFormat =  moment(todayDate).format("yyyy-MM-DD");
    return this.http.get<any>(
      `http://localhost:8080/calender?date=${dayFormat}&doctor=${id}`
    )
  }

  getTMRCal(id:Number)
  {
    let todayDate = new Date();
    todayDate.setDate(todayDate.getDate() + 1)
    let dayFormat =  moment(todayDate).format("yyyy-MM-DD");
    return this.http.get<any>(
      `http://localhost:8080/calender?date=${dayFormat}&doctor=${id}`
    )
  }
  
  getById(id:Number){
    return this.http.get<Calendar>(this.baseUrl+id)
  }
  deleteById(id:Number){
    return this.http.delete(this.baseUrl+id)
  }

}