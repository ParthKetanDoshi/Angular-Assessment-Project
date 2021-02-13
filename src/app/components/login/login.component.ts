import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(data){
    if(data.userEmail == "Sherwood@rosamond.me" && data.password == "pass@123"){
      // console.log("Login Successful")
      localStorage.setItem('token','Sherwood@rosamond.me')
      this.router.navigate([''])
    }
    else{
      // console.log("Login Failed")
    }
  }

}
