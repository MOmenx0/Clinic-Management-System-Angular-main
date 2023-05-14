import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-view-patient',
  templateUrl: './view-patient.component.html',
  styleUrls: ['./view-patient.component.css']
})
export class ViewPatientComponent {

  Patient?:Patient;
  constructor(public modalRef: MdbModalRef<ViewPatientComponent>, 
    ) {}
}



