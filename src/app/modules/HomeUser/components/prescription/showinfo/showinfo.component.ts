import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.css']
})
export class ShowinfoComponent {

  constructor(  @Inject(MAT_DIALOG_DATA) public targetData: any  ){}

  ngOnInit(){
console.log(this.targetData);


  }

  
}
