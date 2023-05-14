import { Component } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
// import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import {Location} from '@angular/common';
import { Subscription } from 'rxjs';
import { Medicine } from 'src/app/models/medicine';
import { MedicineService } from 'src/app/services/medicine.service';


@Component({
  selector: 'app-medicine-details',
  templateUrl: './medicine-details.component.html',
  styleUrls: ['./medicine-details.component.css']
})
export class MedicineDetailsComponent {
med?:Medicine;
 mdf:String='';
 exp:String='';

  // constructor(public modalRef: MdbModalRef<MedicineDetailsComponent>,public  medicineService:MedicineService,private activateRoute:ActivatedRoute
  //   ) {}
constructor(public  medicineService:MedicineService,private activateRoute:ActivatedRoute,private _location: Location){}

 ngOnInit(){
  this.activateRoute.params.subscribe(data=>{
    this.medicineService.getById(data['id']).subscribe(d=>{
      this.med=d;
      this.exp=d.exp_date.split("T")[0];
      if(d.mfd_date!=undefined){

       this. mdf=d.mfd_date.split("T")[0] ;
      }
    })
  })

  //  console.log(this.med)
 }
 back(){
  this._location.back();
}
}
