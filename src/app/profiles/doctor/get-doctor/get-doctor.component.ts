import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
@Component({
  selector: 'app-get-doctor',
  templateUrl: './get-doctor.component.html',
  styleUrls: ['./get-doctor.component.css'],
})
export class GetDoctorComponent implements OnInit {
  docObj: Doctor = new Doctor(0, '', '', '', 0, '', '', 0, 0, '');
  constructor(
    public doctorService: DoctorService,
    public activatedRouter: ActivatedRoute,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.doctorService.getById(i['id']).subscribe((data) => {
        if (data.status == 'active') {
          this.docObj = data;
          console.log(data.clinicId);
        } else {
          this.route.navigateByUrl('');
        }
      });
    });
  }
}
