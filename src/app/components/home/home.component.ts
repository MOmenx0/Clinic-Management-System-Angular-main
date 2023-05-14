import { Component, OnChanges, OnInit,AfterViewInit} from '@angular/core';
import { Calendar } from 'src/app/models/calendar';
import { Doctor } from 'src/app/models/doctor';
import { CalenderService } from 'src/app/services/calender.service';
import { DoctorService } from 'src/app/services/doctor.service';
import * as moment from 'moment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
}





