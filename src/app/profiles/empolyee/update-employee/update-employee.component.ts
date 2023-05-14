import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';
import { MyErrorStateMatcher } from 'src/app/models/ErrorStateMatcher';
import { MatDialog } from '@angular/material/dialog';
import { UpdateDialogComponent } from 'src/app/update-dialog/update-dialog.component';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css'],
})
export class UpdateEmployeeComponent implements OnInit {
  newEmp: Employee = new Employee(0, '', new Date(), '', 0, 0, '', '', '');
  employeeUpdateForm: FormGroup;
  matcher: MyErrorStateMatcher;
  hide = true;
  id: Number = 0;

  constructor(
    private dialog: MatDialog,
    private fb: FormBuilder,
    public empService: EmployeeService,
    public activatedRouter: ActivatedRoute,
    public router: Router
  ) {
    this.employeeUpdateForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required,Validators.pattern(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/)]],
      password: ['', [Validators.required]],
      phone: [
        '',
        [Validators.required, Validators.pattern('01[0125](-)?[0-9]{8}')],
      ],
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
      this.empService.getById(i['id']).subscribe((data) => {
        if (data.status == 'active') {
          //  (this.newEmp = data)
          this.employeeUpdateForm.patchValue(data);
          this.id = data._id;
        } else {
          this.router.navigateByUrl('');
        }
      });
    });
  }
  get name() {
    return this.employeeUpdateForm.get('name');
  }
  get password() {
    return this.employeeUpdateForm.get('password');
  }
  get phone() {
    return this.employeeUpdateForm.get('phone');
  }
  get age() {
    return this.employeeUpdateForm.get('age');
  }
  get gender() {
    return this.employeeUpdateForm.get('gender');
  }
  get email() {
    return this.employeeUpdateForm.get('email');
  }
  get addressStreet() {
    return this.employeeUpdateForm.get('street');
  }
  get addressCity() {
    return this.employeeUpdateForm.get('city');
  }
  get addressBuiling() {
    return this.employeeUpdateForm.get('building');
  }

  edit() {
    const url = `/profile/employee/${this.id}`;
    console.log(this.employeeUpdateForm.value);

    this.empService.edit(this.employeeUpdateForm.value, this.id).subscribe();
    this.router.navigateByUrl(url);
    this.dialog.open(UpdateDialogComponent, {
      data: {
        message: `${this.employeeUpdateForm.value.name} your data has been updated successfully!`,
      },
    });
  }
  cancel() {
    const url = `/profile/employee/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
