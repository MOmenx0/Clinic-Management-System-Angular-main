import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-get-patient',
  templateUrl: './get-patient.component.html',
  styleUrls: ['./get-patient.component.css'],
})
export class GetPatientComponent implements OnInit {
  patientObj: Patient = new Patient(0, '', '', 0, '', 0, '');
  constructor(
    public patientService: PatientService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.patientService.getById(i['id']).subscribe((data) => {(this.patientObj = data)
      });
    });
  }
}
