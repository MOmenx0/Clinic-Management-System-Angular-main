import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-get-employee',
  templateUrl: './get-employee.component.html',
  styleUrls: ['./get-employee.component.css'],
})
export class GetEmployeeComponent implements OnInit {
  empObj: Employee = new Employee(0, '', new Date(), '', 0, 0, '', 0);
  constructor(
    public employeeService: EmployeeService,
    public activatedRouter: ActivatedRoute,
    public route: Router
  ) {}
  ngOnInit(): void {
    this.activatedRouter.params.subscribe((i) => {
      this.employeeService.getById(i['id']).subscribe((data) => {
        if (data.status == 'active') {
          this.empObj = data;
        } else {
          this.route.navigateByUrl('');
        }
      });
    });
  }
}
