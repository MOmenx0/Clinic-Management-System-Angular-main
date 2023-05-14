import { Component,OnInit } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})

export class PopupComponent  {
 
  Type:String = "Confirm Booking"
  messege:String ="";
  response:boolean= false;
  constructor(public modalRef: MdbModalRef<PopupComponent>
    ) {}

 
  exit(){
    this.modalRef.close(this.response)
  }
  save(){
    this.response= true;
    this.modalRef.close(this.response)
  }



}
