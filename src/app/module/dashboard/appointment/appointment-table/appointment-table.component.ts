import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointment-table',
  templateUrl: './appointment-table.component.html',
  styleUrls: ['./appointment-table.component.css']
})
export class AppointmentTableComponent {
   testModal=false;
 appointment:Appointment[]=[];
 public dataSource!: MatTableDataSource<Appointment>;
 displayedColumns: string[] = ['id', 'name', 'Dr name', 'date','time'/*,'Scaned'*/,'action'];

 @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
 constructor(public appointmentService:AppointmentService){}
 ngOnInit(){
  this.appointmentService.getAll().subscribe(data=>{
    this.appointment=data.filter(p =>p.archive==false);
    this.dataSource = new MatTableDataSource(this.appointment);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  })
 }
 printData(){
  console.log(this.appointment);
}
applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}


}
