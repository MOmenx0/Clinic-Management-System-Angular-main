import { Component,OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Clinic } from 'src/app/models/clinic';
import { ClinicService } from 'src/app/services/clinic.service';

@Component({
  selector: 'app-accept-popup',
  templateUrl: './accept-popup.component.html',
  styleUrls: ['./accept-popup.component.css']
})
export class AcceptPopupComponent implements OnInit {
 
  clinins:Clinic[]=[];
  messege:String ="";
  errorFlag:boolean=false;
  updated:boolean= false;
  clininsID:Number=0;
  constructor(public modalRef: MdbModalRef<AcceptPopupComponent>,
    private clinicServise:ClinicService 
    ) {}

  ngOnInit(){

    this.clinicServise.getAll().subscribe(data=>{
      this.clinins = data
    })
  }
  exit(){
    this.modalRef.close({status:this.updated,clininsID:this.clininsID})
  }
  save(){
         if(!this.checkDept(this.clininsID)){
          this.errorFlag = true;
          this.messege = "Clinic is empty";
        }else{
          this.updated=true;
          this.modalRef.close({status:this.updated,clininsID:this.clininsID})
        }
      }


  checkDept(id:Number){
        for (let i = 0; i < this.clinins.length; i++) {
          if(this.clinins[i]._id==id){
            return true;
          }
        }
        return false;
  }

  


}
