import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-view-doctor',
  templateUrl: './view-doctor.component.html',
  styleUrls: ['./view-doctor.component.css']
})
export class ViewDoctorComponent {

  doctor?:Doctor;
  constructor(public modalRef: MdbModalRef<ViewDoctorComponent>, 
    ) {}


}
