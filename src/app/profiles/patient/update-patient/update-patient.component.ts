import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';
import { MyErrorStateMatcher } from 'src/app/models/ErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/update-dialog/update-dialog.component';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css'],
})
export class UpdatePatientComponent {
  newPatient: Patient = new Patient(0, '', '', 0, '', 0, '', '');
  patientUpdateForm: FormGroup;
  matcher: MyErrorStateMatcher;
  hide = true;
  id: Number = 0;
  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    public patientService: PatientService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {
    this.patientUpdateForm = this.fb.group({
      name: ['name', [Validators.required]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/),
        ],
      ],
      password: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern(/^01[0125][0-9]{8}$/gm)],
      ],
      age: ['', [Validators.required]],
      gender: ['', [Validators.required]],
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
      this.patientService.getById(i['id']).subscribe((data) => {
        if (data.status == 'active') {
          this.patientUpdateForm.patchValue(data);
          this.id = data._id;
          console.log(data);
        } else {
          this.router.navigateByUrl('');
        }
      });
    });
  }
  get name() {
    return this.patientUpdateForm.get('name');
  }
  get password() {
    return this.patientUpdateForm.get('password');
  }
  get phone() {
    return this.patientUpdateForm.get('phone');
  }
  get age() {
    return this.patientUpdateForm.get('age');
  }
  get gender() {
    return this.patientUpdateForm.get('gender');
  }
  get email() {
    return this.patientUpdateForm.get('email');
  }
  get addressStreet() {
    return this.patientUpdateForm.get('street');
  }
  get addressCity() {
    return this.patientUpdateForm.get('city');
  }
  get addressBuiling() {
    return this.patientUpdateForm.get('building');
  }
  edit() {
    const url = `/profile/patient/${this.id}`;
    console.log(this.patientUpdateForm.value);

    this.patientService.edit(this.patientUpdateForm.value, this.id).subscribe();
    this.router.navigateByUrl(url);
    this.dialog.open(UpdateDialogComponent, {
      data: {
        message: `${this.patientUpdateForm.value.name} your data has been updated successfully!`,
      },
    });
  }
  cancel() {
    const url = `/profile/patient/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
