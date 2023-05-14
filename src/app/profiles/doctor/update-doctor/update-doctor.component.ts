import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { MyErrorStateMatcher } from 'src/app/models/ErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/update-dialog/update-dialog.component';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css'],
})
export class UpdateDoctorComponent implements OnInit {
  newDoc: Doctor = new Doctor(0, '', '', '', 0, '', '', 0, 0, '');
  doctorUpdateForm: FormGroup;
  matcher: MyErrorStateMatcher;
  hide = true;
  id: Number = 0;
  constructor(
    public dialog: MatDialog,
    public fb: FormBuilder,
    public doctorService: DoctorService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {
    this.doctorUpdateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required ,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)]],
      password: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/gm)],
      ],
      gender: ['', [Validators.required]],
      yearsOfExperience: ['', [Validators.required]],

      address: this.fb.group({
        city: ['', [Validators.required, Validators.pattern('[a-zA-Z]{3,}')]],
        street: ['', Validators.required],
        building: ['', Validators.required],
      }),
    });
    this.matcher = new MyErrorStateMatcher();
  }
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.doctorService.getById(i['id']).subscribe((data) => {
        if (data.status == 'active') {
          //  (this.newEmp = data)
          this.doctorUpdateForm.patchValue(data);
          this.id = data._id;
        } else {
          this.router.navigateByUrl('');
        }
      });
    });
  }
  get name() {
    return this.doctorUpdateForm.get('name');
  }
  get password() {
    return this.doctorUpdateForm.get('password');
  }
  get phone() {
    return this.doctorUpdateForm.get('phone');
  }
  get yearsOfExperience() {
    return this.doctorUpdateForm.get('yearsOfExperience');
  }
  get gender() {
    return this.doctorUpdateForm.get('gender');
  }
  get email() {
    return this.doctorUpdateForm.get('email');
  }
  get addressStreet() {
    return this.doctorUpdateForm.get('street');
  }
  get addressCity() {
    return this.doctorUpdateForm.get('city');
  }
  get addressBuiling() {
    return this.doctorUpdateForm.get('building');
  }

  edit() {
    const url = `/profile/doctor/${this.id}`;
    console.log(this.doctorUpdateForm.value);

    this.doctorService.edit(this.doctorUpdateForm.value, this.id).subscribe();
    this.router.navigateByUrl(url);
    this.dialog.open(UpdateDialogComponent, {
      data: {
        message: `${this.doctorUpdateForm.value.name} your data has been updated successfully!`,
      },
    });
  }
  cancel() {
    const url = `/profile/doctor/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
