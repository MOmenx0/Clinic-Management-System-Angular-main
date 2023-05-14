import { Component } from '@angular/core';
import { Router } from '@angular/router';
import{AuthService}from '../../../../../services/auth.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  id?:any;
  role?:any;
  constructor(public router:Router,public authService:AuthService){}
  isLogged:boolean=this.authService.loggedIn();
  logout(){
    localStorage.clear();
    this.router.navigateByUrl('/login')
  }
  profile(){
    this.id=localStorage.getItem("id");
    this.role=localStorage.getItem("role");
    this.router.navigateByUrl(`profile/${this.role}/${this.id}`)
  }
}
