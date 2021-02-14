import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  useremails: string[] = ["Sincere@april.biz","Shanna@melissa.tv","Nathan@yesenia.net","Julianne.OConner@kory.org","Lucio_Hettinger@annie.ca","Karley_Dach@jasper.info","Telly.Hoeger@billy.biz","Sherwood@rosamond.me","Chaim_McDermott@dana.io","Rey.Padberg@karina.biz"]
  usernames: string[] = ["Leanne Graham", "Ervin Howell", "Clementine Bauch", "Patricia Lebsack", "Chelsey Dietrich", "Mrs. Dennis Schulist", "Kurtis Weissnat", "Nicholas Runolfsdottir V", "Glenna Reichert", "Clementina DuBuque"];
  loggedinuserid: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(data){
    if(this.useremails.indexOf(data.userEmail) != -1 && data.password == "pass@123"){
      // console.log("Login Successful")
      this.loggedinuserid = String(this.useremails.indexOf(data.userEmail) + 1);
      localStorage.setItem('token',this.loggedinuserid);
      localStorage.setItem('token2',this.usernames[(this.useremails.indexOf(data.userEmail))])
      this.router.navigate([''])
    }
    else{
      // console.log("Login Failed")
      window.alert("Incorrect Email ID or Password")
    }
  }

}
