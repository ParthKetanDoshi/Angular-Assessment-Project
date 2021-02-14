import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  users: string[] = ["Sincere@april.biz","Shanna@melissa.tv","Nathan@yesenia.net","Julianne.OConner@kory.org","Lucio_Hettinger@annie.ca","Karley_Dach@jasper.info","Telly.Hoeger@billy.biz","Sherwood@rosamond.me","Chaim_McDermott@dana.io","Rey.Padberg@karina.biz"]
  loggedinuserid: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(data){
    if(this.users.indexOf(data.userEmail) != -1 && data.password == "pass@123"){
      // console.log("Login Successful")
      this.loggedinuserid = String(this.users.indexOf(data.userEmail) + 1);
      localStorage.setItem('token',this.loggedinuserid);
      this.router.navigate([''])
    }
    // else{
    //   // console.log("Login Failed")
    // }
  }

}
