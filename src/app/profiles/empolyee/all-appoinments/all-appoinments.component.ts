import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-all-appoinments',
  templateUrl: './all-appoinments.component.html',
  styleUrls: ['./all-appoinments.component.css'],
})
export class AllAppoinmentsComponent implements OnInit {
  public dataSource!: MatTableDataSource<Appointment>;
  allAppointments: Appointment[] = [];
  displayedColumns: string[] = [
    'Doctor Name',
    'Patient Name',
    'Date',
    'Time',
    'Clinic',
  ];
  id:any = localStorage.getItem("id");
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public appoinmentService: AppointmentService,
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public empService: EmployeeService,
    public appointmentService: AppointmentService
  ) {}
  ngOnInit(): void {
    this.appointmentService.getAll().subscribe((res) => {
      this.allAppointments = res;
      this.dataSource = new MatTableDataSource(this.allAppointments);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  cancel() {
    const url = `/profile/employee/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
