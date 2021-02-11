import { Component, Input, OnInit } from '@angular/core';
import { UserfetchService } from "./service/userfetch.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  @Input() userid: number;
  data: any;

  constructor(private userData: UserfetchService) { 
    this.userData.getData().subscribe(userData => {
      // console.log(userData)
      this.data=userData
    })
  }

  ngOnInit(): void {
    // console.log(this.userid);
  }

}
