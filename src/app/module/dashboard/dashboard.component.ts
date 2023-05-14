import { Component } from '@angular/core';

interface SideNavToggle{
  screenWidth:number;
  collapsed:boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  isSidNavCollapsed = false;
  screemWidth = 0;

  onToggleSideNav(data:SideNavToggle):void
  {
    this.screemWidth = data.screenWidth;
    this.isSidNavCollapsed = data.collapsed;
  }
}
