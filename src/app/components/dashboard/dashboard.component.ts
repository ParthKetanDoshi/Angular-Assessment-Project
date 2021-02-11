import { Component, OnInit } from '@angular/core';
import { UserServiceService } from "./service/user-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any;

  constructor(private userData:UserServiceService) { 
    this.userData.getData().subscribe(userData => {
      // console.log(userData)
      this.data=userData
    })
  }

  ngOnInit(): void {
  }

}
