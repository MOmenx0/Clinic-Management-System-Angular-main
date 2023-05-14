import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-findDoctors',
  templateUrl: './findDoctors.component.html',
  styleUrls: ['./findDoctors.component.css']
})


export class findDoctorsComponent {
public doctors! :Doctor[];
public doctorsMain! :Doctor[];

public allSpeciality :any

constructor(public doctorService:DoctorService,
              private router:Router
  ){}
  ngOnInit(){
    this.doctorService.getAll().subscribe(data=>{
    this.allSpeciality= [...new Set(data.map(ele=> ele.speciality ))]
      this.doctors=data;
      this.doctorsMain=data;
    })
  }

  changeSearch(e:any){
    if(e.target.value){this.doctorService.getAll().subscribe(data=>{this.doctors= data.filter((ele:any)=>{
      return new RegExp(e.target.value, 'i').test(ele.name)}
 
     
      
       )})} 
     else{this.doctorService.getAll().subscribe(data=>{  this.doctors=data;})}
  }


  book(id:Number){
    this.router.navigate(['appointment',id])
  }

  filterBySpeciality(speciality:any){
    this.doctors=this.doctorsMain.filter(doc=>doc?.speciality==speciality)
}
}