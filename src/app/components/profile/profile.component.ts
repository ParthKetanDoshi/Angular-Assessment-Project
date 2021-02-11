import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userid: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userid = this.route.snapshot.params['id'];
    console.log(this.userid)
  }

}
