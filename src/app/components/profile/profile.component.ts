import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserfetchService } from "./service/userfetch.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid: number;
  data: any;

  constructor(private route: ActivatedRoute,
    private userData:UserfetchService) { 
      this.userData.getData().subscribe(userData => {
        console.log(userData)
        this.data=userData
      })
    }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    console.log(this.userid)
  }

}
