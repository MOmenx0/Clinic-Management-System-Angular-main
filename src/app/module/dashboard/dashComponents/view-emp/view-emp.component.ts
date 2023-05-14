import { Component ,OnInit} from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Employee } from 'src/app/models/employee';
@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {

  Emp?:Employee;
  constructor(public modalRef: MdbModalRef<ViewEmpComponent>, 
    ) {
      console.log(this.Emp)
    }
  ngOnInit(): void {
    console.log(this.Emp)
  }
}


