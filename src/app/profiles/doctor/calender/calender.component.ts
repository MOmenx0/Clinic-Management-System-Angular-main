import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Doctor } from 'src/app/models/doctor';
import { DoctorService } from 'src/app/services/doctor.service';
import { Calendar } from 'src/app/models/calendar';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent {
  public dataSource!: MatTableDataSource<Calendar>;
  calender: Calendar[] = [];
  displayedColumns: string[] = [
    'Date',
    'TimeTable',
    'TotalWorkingHours',
    'AvailableHours',
  ];
  id: Number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public doctorService: DoctorService
  ) {}

  ngOnInit() {
    this.activatedRouter.params.subscribe((i) => {
      this.id = i['id'];
    });
    this.doctorService.getDocCalender(this.id).subscribe((res) => {
      console.log(res);
      this.calender = res?.data;
      this.dataSource = new MatTableDataSource(this.calender);
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
    const url = `/profile/doctor/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
