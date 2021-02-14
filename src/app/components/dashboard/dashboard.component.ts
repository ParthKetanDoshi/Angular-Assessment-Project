import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./service/user-service.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  loggedinuserid: number = +(localStorage.getItem('token'));
  data:any;
  value = '';

  constructor(private userData:UserServiceService, private router: Router) { 
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
    this.userData.getData().subscribe(userData => {
      // console.log(userData)
      this.data=userData
    })
  }

  ngOnInit(): void {
  }

}
