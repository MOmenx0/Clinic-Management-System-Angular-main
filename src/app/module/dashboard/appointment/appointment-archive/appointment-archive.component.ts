import { Component,ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Appointment } from 'src/app/models/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-archive',
  templateUrl: './appointment-archive.component.html',
  styleUrls: ['./appointment-archive.component.css']
})
export class AppointmentArchiveComponent {
  appointment:Appointment[]=[];
  public dataSource!: MatTableDataSource<Appointment>;
  // public dataSource2!: MatTableDataSource<Appointment>;
  displayedColumns: string[] = ['id', 'name', 'Dr name', 'date','time'/*,'Scaned'*/,'action'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   @ViewChild(MatSort) sort!: MatSort;
  constructor(public appointmentService:AppointmentService){}
  ngOnInit(){
   this.appointmentService.getAll().subscribe(data=>{
     console.log(data)
     this.appointment=data.filter(p =>p.archive==true);
     this.dataSource = new MatTableDataSource(this.appointment);
     this.dataSource.paginator = this.paginator;
     this.dataSource.sort = this.sort;
     // archive
    //  this.appointmentArchive=data.filter(p =>p.archive==true );
    //  this.dataSource2 = new MatTableDataSource(this.appointmentArchive);
    //    this.dataSource2.paginator = this.paginator;
    //    this.dataSource2.sort = this.sort;
 // console.log(this.appointment)
   })
  }

 applyFilter(event: Event) {
   const filterValue = (event.target as HTMLInputElement).value;
   this.dataSource.filter = filterValue.trim().toLowerCase();

   if (this.dataSource.paginator) {
     this.dataSource.paginator.firstPage();
   }
 }

}
