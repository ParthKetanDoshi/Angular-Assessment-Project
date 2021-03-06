import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedinusersname: string = localStorage.getItem('token2')
  loggedinuserid: number = +(localStorage.getItem('token'));

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  loggedIn(){
    return localStorage.getItem('token');
  }

  logOut(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
