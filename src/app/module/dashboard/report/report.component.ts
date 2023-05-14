import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent  implements OnInit{

  doctors!:Doctor [];
  constructor(
    private doctorService:DoctorService,
  
  ){}
ngOnInit(): void {
  this.doctorService.getActive().subscribe(data=>{
    this.doctors=data;
  })
}



    
}
