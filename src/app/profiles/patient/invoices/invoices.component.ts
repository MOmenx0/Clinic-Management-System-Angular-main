import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Invoice } from 'src/app/models/invoice';
import { AppointmentService } from 'src/app/services/appointment.service';
import { Patient } from 'src/app/models/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.component.html',
  styleUrls: ['./invoices.component.css'],
})
export class InvoicesComponent implements OnInit {
  public dataSource!: MatTableDataSource<Invoice>;
  invoices: Invoice[] = [];
  displayedColumns: string[] = [
    'Payment Type',
    'Total Cost',
    'Doctor Name',
    'Date',
  ];
  id: Number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    public appoinmentService: AppointmentService,
    public router: Router,
    public activatedRouter: ActivatedRoute,
    public patientService: PatientService
  ) {}
  ngOnInit() {
    this.activatedRouter.params.subscribe((i) => {
      this.id = i['id'];
    });
    this.patientService.getPatientInovice(this.id).subscribe((res) => {
      this.invoices = res?.data;
      console.log(this.invoices);

      this.dataSource = new MatTableDataSource(this.invoices);
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
    const url = `/profile/patient/${this.id}`;
    this.router.navigateByUrl(url);
  }
}
